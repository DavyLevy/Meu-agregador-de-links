import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeftIcon, ArrowRightIcon } from "@/components/icons/SocialIcons";
import { getToolGroups } from "@/data/videos";

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
  const location = useLocation();
  const groups = getToolGroups();

  useEffect(() => {
    const hash = location.hash ? location.hash.slice(1) : "";
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const t = setTimeout(
        () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
        120,
      );
      return () => clearTimeout(t);
    }
  }, [location.hash]);

  return (
    <div className="page-shell">
      <main className="page-inner" data-testid="ferramentas-page">
        <Link
          to="/videos"
          data-testid="back-to-videos"
          className="inline-flex items-center gap-1 text-[13px] font-medium text-zinc-700 hover:text-black no-underline"
        >
          <ChevronLeftIcon size={18} />
          Voltar aos vídeos
        </Link>

        <header className="mt-5 fade-up">
          <p className="text-[12px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
            Davy Levy · Pasta de Ferramentas
          </p>
          <h1 className="mt-2 text-[26px] sm:text-[30px] font-extrabold tracking-tight text-black leading-tight uppercase">
            FERRAMENTAS
          </h1>
          <p className="mt-2 text-[13.5px] text-zinc-600 leading-snug max-w-[340px]">
            Todos os sites e ferramentas citados nos vídeos, reunidos num lugar
            só. É só tocar para abrir.
          </p>
        </header>

        <div className="mt-8 flex flex-col gap-10">
          {groups.map((cat) => (
            <section key={cat.id} data-testid={`ferramentas-cat-${cat.id}`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl" aria-hidden="true">
                  {cat.emoji}
                </span>
                <h2 className="text-[13.5px] font-bold text-black uppercase tracking-wider">
                  {cat.label}
                </h2>
              </div>

              <div className="flex flex-col gap-7">
                {cat.videos.map((v) => (
                  <div
                    key={v.id}
                    id={v.id}
                    className="scroll-mt-6"
                    data-testid={`ferramentas-group-${v.id}`}
                  >
                    <p className="text-[12.5px] font-bold text-zinc-800 leading-snug mb-3">
                      {v.title}
                    </p>
                    <div className="flex flex-col gap-2.5">
                      {v.pdf && <PdfButton pdf={v.pdf} />}
                      {v.tools.map((t) => (
                        <ToolButton key={t.name} tool={t} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 flex flex-col items-center gap-1">
          <p className="text-[11px] text-zinc-400">
            © {new Date().getFullYear()} Davy Levy
          </p>
        </footer>
      </main>
    </div>
  );
}
