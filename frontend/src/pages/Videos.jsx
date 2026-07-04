import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@/components/icons/SocialIcons";
import { VideoCard } from "@/components/VideoCard";
import { CATEGORIES } from "@/data/videos";

const CategoryTabs = ({ categories, active, onChange }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current?.querySelector(
      `[data-tab-id="${active}"]`,
    );
    if (el && el.scrollIntoView) {
      el.scrollIntoView({
        inline: "center",
        block: "nearest",
        behavior: "smooth",
      });
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
                  isActive
                    ? "bg-white/15 text-white"
                    : "bg-zinc-100 text-zinc-500"
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

        <div
          className="mt-6 flex items-center gap-2 fade-up"
          key={activeCat.id}
        >
          <span className="text-xl" aria-hidden="true">
            {activeCat.emoji}
          </span>
          <h2 className="text-[13.5px] font-bold text-black uppercase tracking-wider">
            {activeCat.label}
          </h2>
        </div>

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
