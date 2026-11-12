"use client";

import Image from "next/image";
import type { Lesson } from "@/types/lesson";

type SidebarLessonsProps = {
  lessons: Lesson[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function SidebarLessons({
  lessons,
  activeId,
  onSelect,
}: SidebarLessonsProps) {
  return (
    <aside className="flex h-full max-h-[70vh] flex-col rounded-2xl bg-white/85 shadow-sm ring-1 ring-ink/8 backdrop-blur lg:max-h-[calc(100vh-7rem)]">
      <div className="border-b border-ink/8 px-4 py-3">
        <h2 className="font-display text-lg text-ink">Следующие уроки</h2>
        <p className="text-xs text-ink/55">Рекомендации для вас</p>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto p-3">
        {lessons.map((lesson) => {
          const isActive = lesson.id === activeId;
          return (
            <button
              key={lesson.id}
              type="button"
              onClick={() => onSelect(lesson.id)}
              className={`group flex w-full gap-3 rounded-xl p-2 text-left transition ${
                isActive
                  ? "bg-teal/12 ring-2 ring-teal"
                  : "hover:bg-sand/90"
              }`}
            >
              <div className="relative h-[4.5rem] w-28 shrink-0 overflow-hidden rounded-lg bg-sand">
                <Image
                  src={lesson.thumbnailUrl}
                  alt={lesson.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="112px"
                />
                {isActive && (
                  <span className="absolute left-1.5 top-1.5 rounded-md bg-teal px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    Сейчас
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1 py-0.5">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-coral">
                  {lesson.subject} · {lesson.grade}
                </p>
                <p
                  className={`line-clamp-2 text-sm leading-snug ${
                    isActive ? "font-semibold text-ink" : "font-medium text-ink/85"
                  }`}
                >
                  {lesson.title}
                </p>
                <p className="mt-1 text-xs text-ink/50">{lesson.duration}</p>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
