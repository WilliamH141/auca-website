"use client";

import { useState, useEffect, useRef } from "react";
import {
  generateGoogleCalendarUrl,
  generateOutlookCalendarUrl,
  generateICSFile,
} from "../../src/utils/calendar";

type CalendarPickerProps = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

export function CalendarPicker({
  title,
  date,
  time,
  location,
  description,
}: CalendarPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleDownloadICS = () => {
    const icsData = generateICSFile(title, date, time, location, description);
    const link = document.createElement("a");
    link.href = icsData;
    link.download = `${title.replace(/\s+/g, "-").toLowerCase()}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const calendarOptions = [
    {
      name: "Google Calendar",
      icon: (
        <svg viewBox="0 0 48 48" width="24px" height="24px" className="h-5 w-5">
          <rect width="22" height="22" x="13" y="13" fill="#fff" />
          <polygon
            fill="#1e88e5"
            points="25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"
          />
          <path
            fill="#1e88e5"
            d="M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"
          />
          <polygon
            fill="#fbc02d"
            points="34,42 14,42 13,38 14,34 34,34 35,38"
          />
          <polygon
            fill="#4caf50"
            points="38,35 42,34 42,14 38,13 34,14 34,34"
          />
          <path
            fill="#1e88e5"
            d="M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"
          />
          <polygon fill="#e53935" points="34,34 34,42 42,34" />
          <path fill="#1565c0" d="M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z" />
          <path fill="#1565c0" d="M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z" />
        </svg>
      ),
      url: generateGoogleCalendarUrl(title, date, time, location, description),
    },
    {
      name: "Apple Calendar",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
      ),
      isDownload: true,
    },
    {
      name: "Outlook",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <rect x="18" y="8" width="26" height="28" rx="4" fill="#1E90FF" />
          <path
            d="M20 18L31 26L42 18"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            opacity="0.9"
          />
          <rect x="6" y="14" width="22" height="26" rx="4" fill="#0078D4" />
          <circle cx="17" cy="27" r="7" fill="#FFFFFF" />
          <circle cx="17" cy="27" r="4" fill="#0078D4" />
        </svg>
      ),
      url: generateOutlookCalendarUrl(title, date, time, location, description),
    },
    {
      name: "Download .ics file",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />
        </svg>
      ),
      isDownload: true,
    },
  ];

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border thin-border accent-bg-soft px-3 py-1.5 text-sm font-semibold accent-text-strong shadow-sm shadow-black/10 transition thin-border-hover hover:bg-[color:var(--accent-strong)] hover:shadow-md hover:shadow-black/20 hover:brightness-97 active:brightness-85"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2z" />
        </svg>
        Add to calendar
      </button>

      {isOpen && (
        <div className="absolute left-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border thin-border bg-white shadow-xl">
          <div className="p-2">
            {calendarOptions.map((option) => (
              <div key={option.name}>
                {option.isDownload ? (
                  <button
                    onClick={handleDownloadICS}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    {option.icon}
                    {option.name}
                  </button>
                ) : (
                  <a
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    {option.icon}
                    {option.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
