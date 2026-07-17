import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@/components/icons/SocialIcons";

const CalendarIcon = ({ size = 13 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4.5" width="18" height="17" rx="2.5" />
    <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
  </svg>
);

const WrenchIcon = ({ size = 15 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.4 2.4-2.3-.6-.6-2.3 2.4-2.4Z" />
  </svg>
);

export const VideoCard = ({ video, categoryEmoji }) => {
  const hasVideo = Boolean(video.href);
  const hasResources =
    (video.tools && video.tools.length > 0) || Boolean(video.pdf);
  return (
    <article
      data-testid={`video-${video.id}`}
      className="fade-up rounded-[24px] bg-[#0E0E10] text-white p-5 sm:p-6 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.45)]"
    >
      {video.date && (
        <span
          data-testid={`video-date-${video.id}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] ring-1 ring-white/10 px-2.5 py-1 text-[10.5px] font-semibold text-zinc-300 mb-3"
        >
          <CalendarIcon size={12} />
          {video.date}
        </span>
      )}

      <div className="flex items-start gap-2">
        <span className="text-xl leading-none mt-0.5" aria-hidden="true">
          {categoryEmoji}
        </span>
        <h3 className="text-[15.5px] sm:text-[16px] font-extrabold leading-snug tracking-tight uppercase">
          {video.title}
        </h3>
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        {hasVideo ? (
          <a
            href={video.href}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`watch-${video.id}`}
            className="cta-pill inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF7A1A] hover:bg-[#FF8A33] text-white text-[13px] font-semibold px-4 py-3 leading-none no-underline"
          >
            <span aria-hidden="true">🎬</span>
            Assistir ao Vídeo
            <ArrowRightIcon size={14} />
          </a>
        ) : (
          <button
            type="button"
            disabled
            data-testid={`watch-${video.id}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/[0.06] ring-1 ring-white/10 text-zinc-400 text-[13px] font-semibold px-4 py-3 leading-none cursor-not-allowed"
          >
            <span aria-hidden="true">🎬</span>
            Vídeo em breve
          </button>
        )}

        {hasResources && (
          <Link
            to={`/ferramentas/${video.slug || video.id}`}
            data-testid={`access-tools-${video.id}`}
            className="cta-pill inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-black text-[13px] font-semibold px-4 py-3 leading-none no-underline hover:bg-zinc-100"
          >
            <WrenchIcon size={15} />
            Acessar Ferramentas
            <ArrowRightIcon size={14} />
          </Link>
        )}
      </div>
    </article>
  );
};
