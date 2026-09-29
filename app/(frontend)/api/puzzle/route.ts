import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.chess.com/pub/puzzle", {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        "User-Agent": "AucklandUniChessClub/1.0",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch puzzle" },
        { status: 502 },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch puzzle" },
      { status: 500 },
    );
  }
}
