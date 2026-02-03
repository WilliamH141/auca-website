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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2z" />
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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
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
        className="cursor-pointer text-sm font-semibold text-sky-700 underline decoration-sky-200 underline-offset-4 hover:text-sky-800"
      >
        Add to calendar
      </button>

      {isOpen && (
        <div className="absolute left-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
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
