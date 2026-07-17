import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@/components/icons/SocialIcons";
import { VideoCard } from "@/components/VideoCard";
import { findVideo } from "@/data/videos";

const CheckIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m5 13 4 4L19 7" />
  </svg>
);

const CopyIcon = ({ size = 14 }) => (
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
    <rect x="9" y="9" width="12" height="12" rx="2.5" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </svg>
);

export default function VideoSingle() {
  const params = useParams();
  const key = params.slug || params.id;
  const result = findVideo(key);
  const [copied, setCopied] = useState(false);

  if (!result) {
    return (
      <div className="page-shell">
        <main className="page-inner" data-testid="video-not-found">
          <Link
            to="/videos"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-zinc-700 hover:text-black no-underline"
          >
            <ChevronLeftIcon size={18} />
            Voltar aos vídeos
          </Link>
          <div className="mt-10 text-center">
            <h1 className="text-2xl font-bold text-black">Vídeo não encontrado</h1>
            <p className="mt-2 text-[14px] text-zinc-600">
              O link que você acessou não existe mais ou foi movido.
            </p>
          </div>
        </main>
      </div>
    );
  }

  const { video, category } = result;
  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/${video.slug || `v/${video.id}`}`
      : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback: select + copy via a temporary element
      const el = document.createElement("textarea");
      el.value = shareUrl;
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } catch {
        /* noop */
      }
      document.body.removeChild(el);
    }
  };

  return (
    <div className="page-shell">
      <main className="page-inner" data-testid="video-single-page">
        <Link
          to="/videos"
          data-testid="back-to-videos"
          className="inline-flex items-center gap-1 text-[13px] font-medium text-zinc-700 hover:text-black no-underline"
        >
          <ChevronLeftIcon size={18} />
          Ver todos os vídeos
        </Link>

        <header className="mt-5 fade-up">
          <p className="text-[12px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
            Davy Levy · {category.shortLabel}
          </p>
          <h1 className="mt-2 text-[24px] sm:text-[28px] font-extrabold tracking-tight text-black leading-tight uppercase">
            {video.title}
          </h1>
          <p className="mt-2 text-[13.5px] text-zinc-600 leading-snug max-w-[340px]">
            Assista ao vídeo e acesse as ferramentas citadas — tudo num link só
            pra você compartilhar.
          </p>
        </header>

        <section className="mt-6">
          <VideoCard video={video} categoryEmoji={category.emoji} />
        </section>

        {/* Share block */}
        <section
          className="mt-6 rounded-[24px] bg-white ring-1 ring-black/5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.2)] p-4 sm:p-5"
          data-testid="share-block"
        >
          <p className="text-[11.5px] uppercase tracking-[0.14em] text-zinc-500 font-semibold">
            Link para compartilhar
          </p>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 min-w-0 rounded-full bg-zinc-100 px-4 py-2.5">
              <p className="text-[12.5px] text-zinc-700 truncate font-medium">
                {shareUrl}
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              data-testid="copy-share-link"
              className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[12.5px] font-semibold transition-all leading-none ${
                copied
                  ? "bg-emerald-500 text-white"
                  : "bg-black text-white hover:bg-zinc-800"
              }`}
              aria-label="Copiar link"
            >
              {copied ? (
                <>
                  <CheckIcon size={14} />
                  Copiado
                </>
              ) : (
                <>
                  <CopyIcon size={14} />
                  Copiar
                </>
              )}
            </button>
          </div>
        </section>

        <footer className="mt-10 flex flex-col items-center gap-1">
          <p className="text-[11px] text-zinc-400">
            © {new Date().getFullYear()} Davy Levy
          </p>
        </footer>
      </main>
    </div>
  );
}
