"use client";

import { useState, type FormEvent } from "react";
import type { Comment } from "@/types/lesson";

type CommentsFeedProps = {
  initialComments: Comment[];
};

export function CommentsFeed({ initialComments }: CommentsFeedProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [text, setText] = useState("");
  const canSend = text.trim().length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    const now = new Date();
    const createdAt = `Сегодня, ${now.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;

    const nextComment: Comment = {
      id: `local-${Date.now()}`,
      author: "Вы",
      avatar: "В",
      text: trimmed,
      createdAt,
    };

    setComments((prev) => [nextComment, ...prev]);
    setText("");
  }

  return (
    <section className="rounded-2xl bg-white/85 p-5 shadow-sm ring-1 ring-ink/8 backdrop-blur">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-lg text-ink">Комментарии</h2>
          <p className="text-sm text-ink/55">
            Спрашивайте и делитесь впечатлениями
          </p>
        </div>
        <span className="rounded-full bg-sand px-2.5 py-1 text-xs font-medium text-ink/60">
          {comments.length}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="mb-5 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="comment" className="sr-only">
          Ваш комментарий
        </label>
        <input
          id="comment"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Напишите вопрос или отзыв..."
          className="w-full flex-1 rounded-xl border border-ink/10 bg-sand/50 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/20"
        />
        <button
          type="submit"
          disabled={!canSend}
          className="rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-white transition hover:bg-coral-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Отправить
        </button>
      </form>

      <ul className="space-y-3">
        {comments.length === 0 && (
          <li className="rounded-xl bg-sand/60 px-4 py-6 text-center text-sm text-ink/50">
            Пока нет комментариев — будьте первым!
          </li>
        )}
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="flex gap-3 rounded-xl bg-sand/50 px-3 py-3"
          >
            <div
              aria-hidden
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white"
            >
              {comment.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-sm font-semibold text-ink">
                  {comment.author}
                </span>
                <span className="text-xs text-ink/45">{comment.createdAt}</span>
              </div>
              <p className="text-sm leading-relaxed text-ink/80">{comment.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
