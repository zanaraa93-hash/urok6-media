"use client";

import { useEffect, useImperativeHandle, useRef, forwardRef } from "react";

export type VideoPlayerHandle = {
  seekTo: (seconds: number) => void;
};

type VideoPlayerProps = {
  src: string;
  poster: string;
  title: string;
};

export const VideoPlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(
  function VideoPlayer({ src, poster, title }, ref) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useImperativeHandle(ref, () => ({
      seekTo(seconds: number) {
        const video = videoRef.current;
        if (!video) return;

        const applySeek = () => {
          const max = Number.isFinite(video.duration) ? video.duration : seconds;
          video.currentTime = Math.min(seconds, Math.max(0, max - 0.1));
          void video.play().catch(() => {
            /* автозапуск может быть заблокирован браузером */
          });
        };

        if (video.readyState >= 1) {
          applySeek();
          return;
        }

        const onReady = () => {
          video.removeEventListener("loadedmetadata", onReady);
          applySeek();
        };
        video.addEventListener("loadedmetadata", onReady);
        video.load();
      },
    }));

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;
      video.load();
    }, [src]);

    return (
      <div className="overflow-hidden rounded-2xl bg-ink shadow-[0_20px_50px_-28px_rgba(15,53,74,0.55)] ring-1 ring-ink/10">
        <div className="relative aspect-video w-full bg-ink">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={poster}
            title={title}
            src={src}
          >
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>
    );
  },
);
