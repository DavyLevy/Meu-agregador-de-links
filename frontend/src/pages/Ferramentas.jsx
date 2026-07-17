import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon, ArrowRightIcon } from "@/components/icons/SocialIcons";
import { findVideo } from "@/data/videos";

const DocIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M12 18v-6" />
    <path d="m9 15 3 3 3-3" />
  </svg>
);

const ToolButton = ({ tool }) => (
  <a
    href={tool.href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={`ferramenta-${tool.name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "")}`}
    className="card-press flex items-center gap-3.5 rounded-2xl bg-[#0E0E10] text-white ring-1 ring-black/5 px-4 py-4 no-underline shadow-[0_10px_30px_-22px_rgba(0,0,0,0.5)]"
  >
    <span
      className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl font-extrabold text-[15px]"
      style={{ backgroundColor: `${tool.accent}22`, color: tool.accent }}
      aria-hidden="true"
    >
      {tool.name.charAt(0)}
    </span>
    <span className="flex-1 min-w-0">
      <span className="block text-[14.5px] font-bold leading-tight">
        {tool.name}
      </span>
      {tool.description && (
        <span className="block text-[12px] text-zinc-400 leading-snug mt-0.5">
          {tool.description}
        </span>
      )}
    </span>
    <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FF7A1A] text-white">
      <ArrowRightIcon size={14} />
    </span>
  </a>
);

const PdfButton = ({ pdf }) => (
  <a
    href={pdf.href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="ferramenta-pdf"
    className="card-press flex items-center gap-3.5 rounded-2xl bg-[#0E0E10] text-white ring-1 ring-black/5 px-4 py-4 no-underline shadow-[0_10px_30px_-22px_rgba(0,0,0,0.5)]"
  >
    <span
      className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl text-[#FF7A1A]"
      style={{ backgroundColor: "rgba(255,122,26,0.14)" }}
      aria-hidden="true"
    >
      <DocIcon size={18} />
    </span>
    <span className="flex-1 min-w-0">
      <span className="block text-[14.5px] font-bold leading-tight">
        {pdf.label}
      </span>
      {pdf.description && (
        <span className="block text-[12px] text-zinc-400 leading-snug mt-0.5">
          {pdf.description}
        </span>
      )}
    </span>
    <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FF7A1A] text-white">
      <ArrowRightIcon size={14} />
    </span>
  </a>
);

export default function Ferramentas() {
  const { slug } = useParams();
  const result = findVideo(slug);

  if (!result) {
    return (
      <div className="page-shell">
        <main className="page-inner" data-testid="tools-not-found">
          <Link
            to="/videos"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-zinc-700 hover:text-black no-underline"
          >
            <ChevronLeftIcon size={18} />
            Voltar aos vídeos
          </Link>
          <div className="mt-10 text-center">
            <h1 className="text-2xl font-bold text-black">
              Ferramentas não encontradas
            </h1>
            <p className="mt-2 text-[14px] text-zinc-600">
              O link que você acessou não existe mais ou foi movido.
            </p>
          </div>
        </main>
      </div>
    );
  }

  const { video, category } = result;
  const hasTools = video.tools && video.tools.length > 0;

  return (
    <div className="page-shell">
      <main className="page-inner" data-testid="tools-page">
        <Link
          to={`/${video.slug || `v/${video.id}`}`}
          data-testid="back-to-video"
          className="inline-flex items-center gap-1 text-[13px] font-medium text-zinc-700 hover:text-black no-underline"
        >
          <ChevronLeftIcon size={18} />
          Voltar ao vídeo
        </Link>

        <header className="mt-5 fade-up">
          <p className="text-[12px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
            Davy Levy · {category.shortLabel}
            {video.date ? ` · ${video.date}` : ""}
          </p>
          <h1
            data-testid="tools-page-title"
            className="mt-2 text-[22px] sm:text-[26px] font-extrabold tracking-tight text-black leading-tight uppercase"
          >
            {video.title}
          </h1>
          <p className="mt-2 text-[13.5px] text-zinc-600 leading-snug max-w-[340px]">
            Todas as ferramentas citadas neste vídeo, reunidas aqui. É só tocar
            para abrir.
          </p>
        </header>

        {video.href && (
          <a
            href={video.href}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="tools-watch-video"
            className="cta-pill mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF7A1A] hover:bg-[#FF8A33] text-white text-[13px] font-semibold px-4 py-3 leading-none no-underline"
          >
            <span aria-hidden="true">🎬</span>
            Assistir ao Vídeo
            <ArrowRightIcon size={14} />
          </a>
        )}

        <section
          className="mt-6 flex flex-col gap-2.5"
          data-testid="tools-list"
        >
          {video.pdf && <PdfButton pdf={video.pdf} />}
          {hasTools &&
            video.tools.map((t) => <ToolButton key={t.name} tool={t} />)}
          {!hasTools && !video.pdf && (
            <div className="rounded-2xl bg-white ring-1 ring-black/5 px-4 py-5 text-center">
              <p className="text-[13px] text-zinc-600 leading-snug">
                Este tutorial usa apenas ferramentas nativas do seu celular —
                nenhum app extra é necessário.
              </p>
            </div>
          )}
        </section>

        <footer className="mt-12 flex flex-col items-center gap-1">
          <p className="text-[11px] text-zinc-400">
            © {new Date().getFullYear()} Davy Levy
          </p>
        </footer>
      </main>
    </div>
  );
}
