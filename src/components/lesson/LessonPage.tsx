"use client";

import { useMemo, useRef, useState } from "react";
import { getLessonById, lessons } from "@/data/lessons";
import { CommentsFeed } from "@/components/lesson/CommentsFeed";
import { LessonTabs } from "@/components/lesson/LessonTabs";
import { SidebarLessons } from "@/components/lesson/SidebarLessons";
import { Timecodes } from "@/components/lesson/Timecodes";
import {
  VideoPlayer,
  type VideoPlayerHandle,
} from "@/components/lesson/VideoPlayer";

export function LessonPage() {
  const [activeLessonId, setActiveLessonId] = useState(lessons[0].id);
  const [activeTimecodeId, setActiveTimecodeId] = useState(
    lessons[0].timecodes[0]?.id,
  );
  const videoRef = useRef<VideoPlayerHandle>(null);

  const lesson = useMemo(
    () => getLessonById(activeLessonId),
    [activeLessonId],
  );

  function handleSelectLesson(id: string) {
    const next = getLessonById(id);
    setActiveLessonId(next.id);
    setActiveTimecodeId(next.timecodes[0]?.id);
  }

  function handleSelectTimecode(seconds: number, id: string) {
    setActiveTimecodeId(id);
    videoRef.current?.seekTo(seconds);
  }

  return (
    <div className="relative min-h-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-coral/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sand-deep/40 blur-3xl" />
      </div>

      <header className="relative border-b border-ink/8 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div>
            <p className="font-display text-xl tracking-tight text-ink sm:text-2xl">
              Репетитор
            </p>
            <p className="text-xs text-ink/55 sm:text-sm">
              Медиа-уроки для школьников Алматы
            </p>
          </div>
          <div className="shrink-0 whitespace-nowrap rounded-full bg-sand px-3 py-1.5 text-xs font-medium text-ink/70 sm:text-sm">
            {lesson.subject} · {lesson.grade}
          </div>
        </div>
      </header>

      <main className="relative mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8 lg:py-8">
        <div className="space-y-5">
          <div>
            <p className="mb-1 text-sm font-medium text-teal">
              Урок от {lesson.teacher}
            </p>
            <h1 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
              {lesson.title}
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/65 sm:text-base">
              {lesson.description}
            </p>
          </div>

          <VideoPlayer
            key={`video-${lesson.id}`}
            ref={videoRef}
            src={lesson.videoUrl}
            poster={lesson.posterUrl}
            title={lesson.title}
          />

          <Timecodes
            items={lesson.timecodes}
            activeId={activeTimecodeId}
            onSelect={handleSelectTimecode}
          />

          <LessonTabs
            key={`tabs-${lesson.id}`}
            notes={lesson.notes}
            materials={lesson.materials}
            questions={lesson.questions}
          />

          <CommentsFeed
            key={`comments-${lesson.id}`}
            initialComments={lesson.comments}
          />
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <SidebarLessons
            lessons={lessons}
            activeId={lesson.id}
            onSelect={handleSelectLesson}
          />
        </div>
      </main>
    </div>
  );
}
