"use client";

import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess, Square } from "chess.js";

type PuzzleData = {
  title: string;
  url: string;
  fen: string;
  pgn: string;
};

export function PuzzleWidget() {
  const [puzzle, setPuzzle] = useState<PuzzleData | null>(null);
  const [game, setGame] = useState<Chess>(new Chess());
  const [moveIndex, setMoveIndex] = useState(0);
  const [solved, setSolved] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [solutionMoves, setSolutionMoves] = useState<string[]>([]);
  const [hintSquare, setHintSquare] = useState<string | null>(null);
  const [hintTargetSquare, setHintTargetSquare] = useState<string | null>(null);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(
    null,
  );
  const [wrongMove, setWrongMove] = useState(false);
  const [hintPressed, setHintPressed] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [positionBeforeWrongMove, setPositionBeforeWrongMove] = useState<
    string | null
  >(null);
  const [waitingForOpponent, setWaitingForOpponent] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [legalMoves, setLegalMoves] = useState<string[]>([]);
  const [revealing, setRevealing] = useState(false);

  useEffect(() => {
    fetchPuzzle();
  }, []);

  const fetchPuzzle = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/puzzle");
      if (!res.ok) throw new Error("Failed to fetch puzzle");
      const data = await res.json();
      setPuzzle(data);

      const fullGame = new Chess();
      fullGame.loadPgn(data.pgn);
      const allMoves = fullGame.history();

      const puzzleStart = new Chess();
      puzzleStart.load(data.fen);
      const puzzleStartMoves = puzzleStart.history().length;

      const solution = allMoves.slice(puzzleStartMoves);

      if (solution.length === 0) {
        throw new Error("Puzzle has no solution moves");
      }

      const newGame = new Chess();
      newGame.load(data.fen);

      setSolutionMoves(solution);
      setGame(newGame);
      setMoveIndex(0);
      setSolved(false);
      setShowHint(false);
      setHintPressed(false);
      setShowArrow(false);
    } catch (err) {
      setError("Failed to load puzzle. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onDrop = ({
    sourceSquare,
    targetSquare,
  }: {
    piece: any;
    sourceSquare: string;
    targetSquare: string | null;
  }) => {
    if (solved || !targetSquare || waitingForOpponent || wrongMove || revealing) return false;

    setSelectedSquare(null);
    setLegalMoves([]);

    const gameCopy = new Chess(game.fen());

    try {
      const move = gameCopy.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });

      if (move === null) return false;

      const expectedMove = solutionMoves[moveIndex];

      if (move.san !== expectedMove) {
        setPositionBeforeWrongMove(game.fen());
        setGame(gameCopy);
        setLastMove({ from: sourceSquare, to: targetSquare });
        setWrongMove(true);
        setShowHint(false);
        setHintSquare(null);
        setHintTargetSquare(null);
        setHintPressed(false);
        setShowArrow(false);
        return true;
      }

      setGame(gameCopy);
      setLastMove({ from: sourceSquare, to: targetSquare });
      setWrongMove(false);
      setShowHint(false);
      setHintSquare(null);
      setHintTargetSquare(null);
      setHintPressed(false);
      setShowArrow(false);
      const newMoveIndex = moveIndex + 1;

      if (newMoveIndex >= solutionMoves.length) {
        setSolved(true);
        return true;
      }

      setMoveIndex(newMoveIndex);

      if (newMoveIndex < solutionMoves.length) {
        setWaitingForOpponent(true);
        setTimeout(() => {
          const opponentGameCopy = new Chess(gameCopy.fen());
          const opponentMove = solutionMoves[newMoveIndex];
          const oppMove = opponentGameCopy.move(opponentMove);
          setGame(opponentGameCopy);
          setLastMove({ from: oppMove.from, to: oppMove.to });
          setMoveIndex(newMoveIndex + 1);
          setWaitingForOpponent(false);

          if (newMoveIndex + 1 >= solutionMoves.length) {
            setSolved(true);
          }
        }, 300);
      }

      return true;
    } catch (err) {
      return false;
    }
  };

  const handleReset = () => {
    if (!puzzle) return;
    const chess = new Chess();
    chess.load(puzzle.fen);
    setGame(chess);
    setMoveIndex(0);
    setSolved(false);
    setShowHint(false);
    setHintSquare(null);
    setHintTargetSquare(null);
    setLastMove(null);
    setWrongMove(false);
    setHintPressed(false);
    setShowArrow(false);
    setRevealing(false);
  };

  const handleTryAgain = () => {
    if (positionBeforeWrongMove) {
      const restoredGame = new Chess();
      restoredGame.load(positionBeforeWrongMove);
      setGame(restoredGame);
    }
    setWrongMove(false);
    setLastMove(null);
    setHintSquare(null);
    setHintTargetSquare(null);
    setHintPressed(false);
    setShowArrow(false);
    setPositionBeforeWrongMove(null);
  };

  const handleSquareClick = ({ square }: { piece: any; square: string }) => {
    if (solved || waitingForOpponent || wrongMove || revealing) return;

    if (selectedSquare) {
      if (square === selectedSquare) {
        setSelectedSquare(null);
        setLegalMoves([]);
        return;
      }

      const result = onDrop({
        piece: null,
        sourceSquare: selectedSquare,
        targetSquare: square,
      });

      if (result) {
        setSelectedSquare(null);
        setLegalMoves([]);
      } else {
        const piece = game.get(square as Square);
        if (piece && piece.color === game.turn()) {
          setSelectedSquare(square);
          const moves = game.moves({ square: square as Square, verbose: true });
          setLegalMoves(moves.map((m) => m.to));
        } else {
          setSelectedSquare(null);
          setLegalMoves([]);
        }
      }
      return;
    }

    const piece = game.get(square as Square);
    if (piece && piece.color === game.turn()) {
      setSelectedSquare(square);
      const moves = game.moves({ square: square as Square, verbose: true });
      setLegalMoves(moves.map((m) => m.to));
    }
  };

  const handleHint = () => {
    if (!solutionMoves[moveIndex]) return;

    if (!hintPressed) {
      const currentGame = new Chess(game.fen());
      const moves = currentGame.moves({ verbose: true });
      const nextMove = solutionMoves[moveIndex];

      const matchingMove = moves.find((m) => m.san === nextMove);
      if (matchingMove) {
        setHintSquare(matchingMove.from);
        setHintTargetSquare(matchingMove.to);
        setShowHint(true);
        setHintPressed(true);
      }
    } else {
      setShowArrow(true);
    }
  };

  const handleReveal = () => {
    if (!puzzle) return;

    setWrongMove(false);
    setLastMove(null);
    setHintSquare(null);
    setHintTargetSquare(null);
    setHintPressed(false);
    setShowArrow(false);
    setPositionBeforeWrongMove(null);

    const tempGame = new Chess();
    tempGame.load(puzzle.fen);
    setGame(tempGame);
    setRevealing(true);

    let currentMoveIndex = 0;
    const playNextMove = () => {
      if (currentMoveIndex >= solutionMoves.length) {
        setSolved(true);
        setRevealing(false);
        return;
      }

      const nextGame = new Chess(tempGame.fen());
      nextGame.move(solutionMoves[currentMoveIndex]);
      tempGame.move(solutionMoves[currentMoveIndex]);
      setGame(new Chess(nextGame.fen()));
      setMoveIndex(currentMoveIndex + 1);

      currentMoveIndex++;
      setTimeout(playNextMove, 1000);
    };

    playNextMove();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center rounded-2xl border thin-border bg-white/80 p-12 shadow-sm">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[color:var(--accent)]"></div>
          <p className="text-sm text-slate-600">Loading puzzle...</p>
        </div>
      </div>
    );
  }

  if (error || !puzzle) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border thin-border bg-white/80 p-12 shadow-sm">
        <p className="text-sm text-slate-600">
          {error || "No puzzle available"}
        </p>
        <button
          onClick={fetchPuzzle}
          className="cursor-pointer rounded-full accent-bg px-6 py-2 text-sm font-semibold !text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)]"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl border thin-border bg-white/80 p-6 shadow-sm shadow-black/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 lg:flex-row lg:items-start lg:gap-8 lg:p-8">
      {/* Chess board */}
      <div className="w-full max-w-md mx-auto">
        <div className="overflow-hidden rounded-lg shadow-md shadow-black/20">
          <Chessboard
            options={{
              position: game.fen(),
              onPieceDrop: onDrop,
              darkSquareStyle: { backgroundColor: "#b58863" },
              lightSquareStyle: { backgroundColor: "#f0d9b5" },
              allowDragging: !solved && !waitingForOpponent && !wrongMove && !revealing,
              onSquareClick: handleSquareClick,
              squareStyles: {
                ...(selectedSquare
                  ? {
                      [selectedSquare]: {
                        backgroundColor: "rgba(255, 255, 0, 0.5)",
                      },
                    }
                  : {}),
                ...legalMoves.reduce(
                  (acc, square) => {
                    acc[square] = {
                      background:
                        "radial-gradient(circle, rgba(0,0,0,.15) 25%, transparent 25%)",
                    };
                    return acc;
                  },
                  {} as Record<string, any>,
                ),
                ...(hintSquare
                  ? {
                      [hintSquare]: {
                        backgroundColor: "rgba(115, 210, 210, 0.6)",
                      },
                    }
                  : {}),
                ...(showArrow && hintTargetSquare
                  ? {
                      [hintTargetSquare]: {
                        backgroundColor: "rgba(115, 210, 210, 0.6)",
                      },
                    }
                  : {}),
                ...(lastMove
                  ? {
                      [lastMove.from]: {
                        backgroundColor: wrongMove
                          ? "rgba(255, 0, 0, 0.4)"
                          : "rgba(155, 199, 0, 0.4)",
                      },
                      [lastMove.to]: {
                        backgroundColor: wrongMove
                          ? "rgba(255, 0, 0, 0.4)"
                          : "rgba(155, 199, 0, 0.4)",
                      },
                    }
                  : {}),
              },
            }}
          />
        </div>
      </div>

      {/* Puzzle info and controls */}
      <div className="flex w-full flex-col gap-4 lg:max-w-sm">
        <div>
          <h3 className="text-xl font-bold text-slate-900 font-serif">
            Daily Chess Puzzle
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Find the best move for {game.turn() === "w" ? "White" : "Black"}
          </p>
        </div>

        {/* Status */}
        {solved && (
          <div className="rounded-lg bg-slate-50 border thin-border px-4 py-3">
            <p className="text-sm font-semibold text-slate-900">
              Puzzle solved
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Come back tomorrow for a new challenge.
            </p>
          </div>
        )}

        {/* Wrong move */}
        {wrongMove && !solved && (
          <div className="rounded-lg bg-slate-50 border thin-border px-4 py-3">
            <p className="text-sm font-semibold text-slate-900">Incorrect</p>
            <p className="text-xs text-slate-600 mt-1">
              That's not the best move. Try again or use a hint.
            </p>
          </div>
        )}

        {/* Buttons */}
        {!solved ? (
          wrongMove ? (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleTryAgain}
                className="cursor-pointer rounded-full border thin-border bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Try Again
              </button>
              <button
                onClick={handleReveal}
                className="cursor-pointer rounded-full border thin-border bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Show Solution
              </button>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleHint}
                className="cursor-pointer rounded-full border thin-border bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                {hintPressed && !showArrow ? "Move" : "Hint"}
              </button>
            </div>
          )
        ) : (
          <button
            onClick={handleReset}
            className="cursor-pointer flex items-center gap-2 rounded-full accent-bg px-6 py-2 text-sm font-semibold !text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
            Try Again
          </button>
        )}

        {/* Link to chess.com */}
        <div className="mt-2 pt-4 border-t thin-border">
          <a
            href={puzzle.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold accent-text-strong accent-hover-text underline decoration-[color:var(--accent-soft)] underline-offset-4"
          >
            View on Chess.com →
          </a>
        </div>
      </div>
    </div>
  );
}
