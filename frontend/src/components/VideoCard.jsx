import React from "react";
import { ArrowRightIcon } from "@/components/icons/SocialIcons";

export const ToolPill = ({ tool }) => (
  <a
    href={tool.href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={`tool-${tool.name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "")}`}
    className="card-press flex items-center gap-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] ring-1 ring-white/10 px-3.5 py-3 no-underline text-white"
  >
    <span
      className="shrink-0 w-2.5 h-2.5 rounded-full"
      style={{ backgroundColor: tool.accent }}
      aria-hidden="true"
    />
    <span className="flex-1 min-w-0">
      <span className="block text-[13.5px] font-semibold leading-tight">
        {tool.name}
      </span>
      {tool.description && (
        <span className="block text-[11.5px] text-zinc-400 leading-snug mt-0.5">
          {tool.description}
        </span>
      )}
    </span>
    <ArrowRightIcon size={13} className="shrink-0 text-zinc-400" />
  </a>
);

export const VideoCard = ({ video, categoryEmoji }) => {
  const hasVideo = Boolean(video.href);
  return (
    <article
      data-testid={`video-${video.id}`}
      className="fade-up rounded-[24px] bg-[#0E0E10] text-white p-5 sm:p-6 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.45)]"
    >
      <div className="flex items-start gap-2">
        <span className="text-xl leading-none mt-0.5" aria-hidden="true">
          {categoryEmoji}
        </span>
        <h3 className="text-[15.5px] sm:text-[16px] font-extrabold leading-snug tracking-tight uppercase">
          {video.title}
        </h3>
      </div>

      <div className="mt-4">
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
      </div>

      <div
        className="mt-5 pt-4 border-t border-white/10"
        data-testid={`tools-section-${video.id}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span aria-hidden="true">🛠️</span>
          <p className="text-[11.5px] uppercase tracking-[0.14em] text-zinc-400 font-semibold">
            Ferramentas Citadas
          </p>
        </div>
        {video.tools.length > 0 ? (
          <div className="flex flex-col gap-2">
            {video.tools.map((t) => (
              <ToolPill key={t.name} tool={t} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white/[0.03] ring-1 ring-dashed ring-white/10 px-4 py-3">
            <p className="text-[12px] text-zinc-400 leading-snug">
              Este tutorial usa apenas ferramentas nativas do seu celular —
              nenhum app extra é necessário.
            </p>
          </div>
        )}
      </div>
    </article>
  );
};
