"use client";

import { useState } from "react";
import type { MaterialLink } from "@/types/lesson";

type TabId = "notes" | "materials" | "questions";

type LessonTabsProps = {
  notes: string[];
  materials: MaterialLink[];
  questions: string[];
};

const TABS: { id: TabId; label: string }[] = [
  { id: "notes", label: "Конспект" },
  { id: "materials", label: "Материалы и ссылки" },
  { id: "questions", label: "Вопросы" },
];

const materialLabel: Record<MaterialLink["type"], string> = {
  file: "Файл",
  link: "Ссылка",
  homework: "ДЗ",
};

export function LessonTabs({ notes, materials, questions }: LessonTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("notes");

  return (
    <section className="rounded-2xl bg-white/85 shadow-sm ring-1 ring-ink/8 backdrop-blur">
      <div
        role="tablist"
        aria-label="Разделы урока"
        className="flex flex-wrap gap-1 border-b border-ink/8 p-2"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-xl px-3.5 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-ink text-white"
                  : "text-ink/65 hover:bg-sand hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="p-5" role="tabpanel">
        {activeTab === "notes" && (
          <div className="space-y-4">
            <p className="text-sm text-ink/60">
              Короткий конспект — чтобы закрепить урок и вернуться к главному.
            </p>
            <ol className="space-y-3">
              {notes.map((note, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/15 text-xs font-semibold text-coral">
                    {index + 1}
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink/85">
                    {note}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {activeTab === "materials" && (
          <div className="space-y-3">
            <p className="text-sm text-ink/60">
              Файлы, полезные ссылки и домашнее задание к уроку.
            </p>
            <ul className="space-y-2">
              {materials.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target={item.url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center justify-between gap-3 rounded-xl bg-sand/80 px-4 py-3 transition hover:bg-teal/10"
                  >
                    <span className="min-w-0">
                      <span className="mb-1 inline-block rounded-md bg-white px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-teal ring-1 ring-teal/15">
                        {materialLabel[item.type]}
                      </span>
                      <span className="block truncate text-sm font-medium text-ink">
                        {item.title}
                      </span>
                    </span>
                    <span className="shrink-0 text-sm text-teal">Открыть →</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "questions" && (
          <div className="space-y-3">
            <p className="text-sm text-ink/60">
              Обсудите эти вопросы с преподавателем или одноклассниками.
            </p>
            <ul className="space-y-2">
              {questions.map((question, index) => (
                <li
                  key={index}
                  className="rounded-xl border border-dashed border-ink/15 bg-sand/40 px-4 py-3 text-[15px] leading-relaxed text-ink/85"
                >
                  <span className="mr-2 font-semibold text-coral">?</span>
                  {question}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
