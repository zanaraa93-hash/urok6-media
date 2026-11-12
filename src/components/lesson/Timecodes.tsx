"use client";

import type { Timecode } from "@/types/lesson";
import { formatTimecode } from "@/lib/format";

type TimecodesProps = {
  items: Timecode[];
  activeId?: string;
  onSelect: (seconds: number, id: string) => void;
};

export function Timecodes({ items, activeId, onSelect }: TimecodesProps) {
  return (
    <section className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-ink/8 backdrop-blur">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="font-display text-lg text-ink">Главы урока</h2>
        <span className="text-xs text-ink/55">{items.length} темы</span>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onSelect(item.seconds, item.id)}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                  isActive
                    ? "bg-teal text-white shadow-md shadow-teal/25"
                    : "bg-sand/70 text-ink hover:bg-teal/10"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
                    isActive
                      ? "bg-white/20"
                      : "bg-white text-teal ring-1 ring-teal/20"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">
                    {item.title}
                  </span>
                  <span
                    className={`text-xs ${
                      isActive ? "text-white/80" : "text-ink/50"
                    }`}
                  >
                    {formatTimecode(item.seconds)}
                  </span>
                </span>
                <span
                  className={`text-xs font-medium ${
                    isActive ? "text-white" : "text-teal opacity-0 group-hover:opacity-100"
                  }`}
                >
                  Смотреть
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
