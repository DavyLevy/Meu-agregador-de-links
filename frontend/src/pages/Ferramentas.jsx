import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeftIcon,
  ArrowRightIcon,
  SearchEyeIcon,
} from "@/components/icons/SocialIcons";

const TOOLS = [
  {
    name: "DeHashed",
    description:
      "Verifique se seus dados pessoais vazaram em grandes brechas de segurança.",
    href: "https://dehashed.com",
    accent: "#FF6B6B",
    testid: "tool-dehashed",
  },
  {
    name: "Jimpl",
    description:
      "Extraia metadados (EXIF) de qualquer foto pra descobrir local, câmera e mais.",
    href: "https://jimpl.com",
    accent: "#7C5CFF",
    testid: "tool-jimpl",
  },
  {
    name: "Sync.me",
    description:
      "Identifique chamadas desconhecidas e descubra quem está por trás do número.",
    href: "https://sync.me/pt-br/",
    accent: "#22C55E",
    testid: "tool-syncme",
  },
];

const ToolCard = ({ name, description, href, accent, testid }) => (
  <a
    data-testid={testid}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="card-press fade-up no-underline block rounded-[24px] bg-[#0E0E10] text-white p-5 sm:p-6"
  >
    <div className="flex items-start gap-4">
      <div
        className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ring-1 ring-white/10"
        style={{ backgroundColor: `${accent}22` }}
      >
        <SearchEyeIcon size={22} className="" style={{ color: accent }} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[18px] font-bold leading-tight tracking-tight">
          {name}
        </h3>
        <p className="mt-1.5 text-[13.5px] leading-snug text-zinc-400">
          {description}
        </p>
        <div className="mt-4">
          <span
            className="cta-pill inline-flex items-center gap-1.5 rounded-full bg-[#FF7A1A] hover:bg-[#FF8A33] text-white text-[12.5px] font-semibold px-4 py-2.5 leading-none"
            style={{
              boxShadow: `0 8px 20px -8px ${accent}88`,
            }}
          >
            Abrir {name}
            <ArrowRightIcon size={14} />
          </span>
        </div>
      </div>
    </div>
  </a>
);

export default function Ferramentas() {
  return (
    <div className="page-shell">
      <main className="page-inner" data-testid="ferramentas-page">
        <Link
          to="/"
          data-testid="back-to-home"
          className="inline-flex items-center gap-1 text-[13px] font-medium text-zinc-700 hover:text-black no-underline"
        >
          <ChevronLeftIcon size={18} />
          Voltar
        </Link>

        <header className="mt-5 fade-up">
          <p className="text-[12px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
            Davy Levy · OSINT
          </p>
          <h1 className="mt-2 text-[26px] sm:text-[30px] font-extrabold tracking-tight text-black leading-tight">
            Ferramentas de Investigação
          </h1>
          <p className="mt-2 text-[14px] text-zinc-600 leading-snug max-w-[340px]">
            Três ferramentas que eu uso pra investigar e me proteger. Clique e
            abre direto no site oficial.
          </p>
        </header>

        <section className="mt-7 flex flex-col gap-4">
          {TOOLS.map((t) => (
            <ToolCard key={t.name} {...t} />
          ))}
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
