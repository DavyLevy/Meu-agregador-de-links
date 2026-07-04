import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeftIcon,
  ArrowRightIcon,
} from "@/components/icons/SocialIcons";

/* -------- DATA -------- */
const CATEGORIES = [
  {
    id: "investigacao",
    emoji: "🕵️",
    label: "Investigação e Monitoramento",
    shortLabel: "Investigação",
    videos: [
      {
        id: "loc-tempo-real",
        title:
          "COMO OBTER A LOCALIZAÇÃO EM TEMPO REAL DE QUALQUER PESSOA DE FORMA AUTOMÁTICA",
        href: "https://www.instagram.com/reel/DZ3MVXZxnHE/?igsh=MWpwdDNndW03MDVpdw==",
        tools: [],
      },
      {
        id: "tres-ferramentas",
        title:
          "TRÊS FERRAMENTAS PRA VOCÊ APRENDER A SE PROTEGER E INVESTIGAR",
        href: "https://www.instagram.com/reel/DZ8bthLK6wA/?igsh=bnpyMGt1b3pleGwy",
        tools: [
          {
            name: "DeHashed",
            description:
              "Verifique se seus dados vazaram em brechas de segurança.",
            href: "https://dehashed.com",
            accent: "#FF6B6B",
          },
          {
            name: "Jimpl",
            description:
              "Extraia metadados (EXIF) de fotos: local, câmera e mais.",
            href: "https://jimpl.com",
            accent: "#7C5CFF",
          },
          {
            name: "Sync.me",
            description:
              "Identifique chamadas desconhecidas e o dono do número.",
            href: "https://sync.me/pt-br/",
            accent: "#22C55E",
          },
        ],
      },
      {
        id: "amante",
        title:
          "QUER VER AS FOTOS QUE SEU MARIDO OU SUA ESPOSA RECEBEU DO(A) AMANTE E APAGOU?",
        href: "https://www.instagram.com/reel/DaJJz_tq6l0/?igsh=MnJyNzJ1ZzlraWZk",
        tools: [],
      },
      {
        id: "golpe-pix",
        title: "CAIU NO GOLPE DO PIX? DESCUBRA TUDO SOBRE QUEM RECEBEU",
        href: "https://www.instagram.com/reel/DaOgNtKqdAl/?igsh=MXM0eXFzazV5ZGtmcw==",
        tools: [],
      },
      {
        id: "insta-ex",
        title: "COMO VER O INSTAGRAM DO EX SEM ELE SABER",
        href: "https://www.instagram.com/reel/DaTpSV8uT2j/?igsh=ZXhpZHZiOGx0Y3hj",
        tools: [],
      },
    ],
  },
  {
    id: "seguranca",
    emoji: "🔒",
    label: "Segurança e Privacidade Digital",
    shortLabel: "Segurança",
    videos: [
      {
        id: "mic-google",
        title: "COMO DESATIVAR O MICROFONE ESPIÃO DO GOOGLE",
        href: "https://www.instagram.com/reel/DaBeJW-KLJk/?igsh=cWVjeHJlajFlYWE=",
        tools: [],
      },
      {
        id: "grampeado",
        title: "CUIDADO!!! O SEU CELULAR PODE ESTAR SENDO GRAMPEADO 😱🚨",
        href: "https://www.instagram.com/reel/DaQ5cwTqkuv/?igsh=MTNia3dzYnhhMzBvcQ==",
        tools: [],
      },
    ],
  },
  {
    id: "entretenimento",
    emoji: "🎬",
    label: "Entretenimento Grátis (TV e Filmes)",
    shortLabel: "Entretenimento",
    videos: [
      {
        id: "tv-aberta",
        title: "COMO VER TV ABERTA DE QUALQUER PAÍS, E DE GRAÇA",
        href: "https://www.instagram.com/reel/DZ53Todu7NJ/?igsh=ZDZqbmV0eDJsbWt2",
        tools: [],
      },
      {
        id: "nao-pague-filmes",
        title: "ATENÇÃO: NÃO PAGUE PARA ASSISTIR FILMES",
        href: "https://www.instagram.com/reel/DaEDZWmKsoA/?igsh=MTNzaXI2OGt5amJ1aw==",
        tools: [],
      },
    ],
  },
  {
    id: "truques",
    emoji: "📱",
    label: "Truques e Utilitários",
    shortLabel: "Truques",
    videos: [
      {
        id: "google-storage",
        title: "COMO LIBERAR ARMAZENAMENTO NA CONTA DO GOOGLE",
        href: "https://www.instagram.com/reel/DZ-NE_PuGwt/?igsh=MWQ2bXNiY2t5ZmwyZw==",
        tools: [],
      },
      {
        id: "wpp-offline",
        title: "FIQUE OFF-LINE NO WHATSAPP SEM DESLIGAR A SUA INTERNET",
        href: "https://www.instagram.com/reel/DaG0cq7ulcM/?igsh=MXJyeGxjNWF4bjc0dg==",
        tools: [],
      },
    ],
  },
  {
    id: "renda",
    emoji: "💰",
    label: "Renda Extra",
    shortLabel: "Renda Extra",
    videos: [
      {
        id: "4-apps-renda",
        title: "4 APLICATIVOS PARA FAZER RENDA EXTRA",
        href: "https://www.instagram.com/reel/DaWgiTuuj15/?igsh=MnB1ZGpubTEyd2w5",
        tools: [],
      },
    ],
  },
];

/* -------- CARD -------- */
const ToolPill = ({ tool }) => (
  <a
    href={tool.href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={`tool-${tool.name.toLowerCase()}`}
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

const VideoCard = ({ video, categoryEmoji }) => (
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
            Este tutorial usa apenas ferramentas nativas do seu celular — nenhum
            app extra é necessário.
          </p>
        </div>
      )}
    </div>
  </article>
);

/* -------- TABS -------- */
const CategoryTabs = ({ categories, active, onChange }) => {
  const containerRef = useRef(null);

  // Scroll active tab into view on change
  useEffect(() => {
    const el = containerRef.current?.querySelector(
      `[data-tab-id="${active}"]`,
    );
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    }
  }, [active]);

  return (
    <div
      ref={containerRef}
      className="mt-6 -mx-4 sm:mx-0 overflow-x-auto scrollbar-hide"
      data-testid="category-tabs"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="flex gap-2 px-4 sm:px-0 py-1 w-max">
        {categories.map((c) => {
          const isActive = c.id === active;
          return (
            <button
              key={c.id}
              data-tab-id={c.id}
              data-testid={`tab-${c.id}`}
              onClick={() => onChange(c.id)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-[12.5px] font-semibold leading-none inline-flex items-center gap-1.5 transition-all duration-150 ${
                isActive
                  ? "bg-[#0E0E10] text-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)]"
                  : "bg-white text-zinc-700 ring-1 ring-black/5 hover:bg-zinc-50"
              }`}
            >
              <span aria-hidden="true">{c.emoji}</span>
              {c.shortLabel}
              <span
                className={`ml-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                  isActive ? "bg-white/15 text-white" : "bg-zinc-100 text-zinc-500"
                }`}
              >
                {c.videos.length}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* -------- PAGE -------- */
export default function Videos() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const activeCat = CATEGORIES.find((c) => c.id === active) || CATEGORIES[0];

  return (
    <div className="page-shell">
      <main className="page-inner" data-testid="videos-page">
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
            Davy Levy · Instagram
          </p>
          <h1 className="mt-2 text-[26px] sm:text-[30px] font-extrabold tracking-tight text-black leading-tight uppercase">
            MEUS VÍDEOS
          </h1>
          <p className="mt-2 text-[13.5px] text-zinc-600 leading-snug max-w-[340px]">
            Reels organizados por categoria. Cada card traz o vídeo + as
            ferramentas citadas nele.
          </p>
        </header>

        <CategoryTabs
          categories={CATEGORIES}
          active={active}
          onChange={setActive}
        />

        {/* Active category header */}
        <div className="mt-6 flex items-center gap-2 fade-up" key={activeCat.id}>
          <span className="text-xl" aria-hidden="true">
            {activeCat.emoji}
          </span>
          <h2 className="text-[13.5px] font-bold text-black uppercase tracking-wider">
            {activeCat.label}
          </h2>
        </div>

        {/* Videos list */}
        <section
          key={activeCat.id + "-list"}
          className="mt-4 flex flex-col gap-4"
          data-testid={`videos-list-${activeCat.id}`}
        >
          {activeCat.videos.map((v) => (
            <VideoCard key={v.id} video={v} categoryEmoji={activeCat.emoji} />
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
