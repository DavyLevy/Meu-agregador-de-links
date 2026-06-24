import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeftIcon,
  ArrowRightIcon,
  InstagramIcon,
  PlayIcon,
} from "@/components/icons/SocialIcons";

const VIDEOS = [
  {
    title: "COMO RASTREAR QUALQUER PESSOA USANDO O GOOGLE MAPS",
    description: "Tutorial completo direto no Instagram.",
    href: "https://www.instagram.com/reel/DZ3MVXZxnHE/?igsh=MWpwdDNndW03MDVpdw==",
    testid: "video-google-maps",
  },
  {
    title: "COMO VER TV ABERTA DE QUALQUER LUGAR DO MUNDO",
    description: "O passo a passo pra liberar TV global em segundos.",
    href: "https://www.instagram.com/reel/DZ53Todu7NJ/?igsh=ZDZqbmV0eDJsbWt2",
    testid: "video-tv-aberta",
  },
  {
    title: "TRÊS FERRAMENTAS PRA VOCÊ APRENDER A INVESTIGAR E SE PROTEGER",
    description: "As 3 ferramentas que todo investigador precisa conhecer.",
    href: "https://www.instagram.com/reel/DZ8bthLK6wA/?igsh=bnpyMGt1b3pleGwy",
    testid: "video-tres-ferramentas",
  },
  {
    title: "COMO LIBERAR ARMAZENAMENTO DO GOOGLE SEM GASTAR E NEM APAGAR NADA",
    description: "Recupere espaço grátis no Google em poucos cliques.",
    href: "https://www.instagram.com/reel/DZ-NE_PuGwt/?igsh=MWQ2bXNiY2t5ZmwyZw==",
    testid: "video-google-storage",
  },
];

const VideoCard = ({ title, description, href, testid }) => (
  <a
    data-testid={testid}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="card-press fade-up no-underline block rounded-[24px] bg-[#0E0E10] text-white p-5 sm:p-6"
  >
    <div className="flex items-stretch gap-4">
      <div className="shrink-0 self-center">
        <div className="w-[88px] h-[88px] rounded-2xl bg-white/95 ring-1 ring-white/10 flex items-center justify-center relative">
          <InstagramIcon size={42} />
          <span className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#FF7A1A] flex items-center justify-center ring-4 ring-[#0E0E10]">
            <PlayIcon size={16} className="text-white" />
          </span>
        </div>
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="text-[15.5px] font-bold leading-snug tracking-tight">
            {title}
          </h3>
          <p className="mt-1.5 text-[13px] leading-snug text-zinc-400">
            {description}
          </p>
        </div>
        <div className="mt-3">
          <span className="cta-pill inline-flex items-center gap-1.5 rounded-full bg-[#FF7A1A] hover:bg-[#FF8A33] text-white text-[12.5px] font-semibold px-4 py-2.5 leading-none">
            Assistir reel
            <ArrowRightIcon size={14} />
          </span>
        </div>
      </div>
    </div>
  </a>
);

export default function Videos() {
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
          <h1 className="mt-2 text-[26px] sm:text-[30px] font-extrabold tracking-tight text-black leading-tight">
            Meus vídeos
          </h1>
          <p className="mt-2 text-[14px] text-zinc-600 leading-snug max-w-[340px]">
            Os reels mais quentes selecionados. Cada card abre direto no
            Instagram.
          </p>
        </header>

        <section className="mt-7 flex flex-col gap-4">
          {VIDEOS.map((v) => (
            <VideoCard key={v.title} {...v} />
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
