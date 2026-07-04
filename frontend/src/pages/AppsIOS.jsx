import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeftIcon,
  ArrowRightIcon,
  AppleIcon,
} from "@/components/icons/SocialIcons";

const ACCENT = "#F5F5F7";

const IOS_APPS = [
  {
    name: "Fiverr",
    description: "Marketplace global de serviços freelancers.",
    href: "https://apps.apple.com/br/app/fiverr-servi%C3%A7os-freelance/id346080608",
    testid: "ios-fiverr",
  },
  {
    name: "Closeer",
    description: "Trabalhos por hora, perto de você.",
    href: "https://apps.apple.com/br/app/closeer-trabalho-freelancer/id1440858117",
    testid: "ios-closeer",
  },
  {
    name: "Bravo Eventos",
    description: "Freelas em eventos, buffets e produções.",
    href: "https://apps.apple.com/br/app/bravo-eventos/id6465486694",
    testid: "ios-bravo",
  },
  {
    name: "Estaff",
    description: "Freelancer em eventos e serviços temporários.",
    href: "https://apps.apple.com/br/app/estaff-para-freelancers/id6470943542",
    testid: "ios-estaff",
  },
];

const AppCard = ({ name, description, href, testid }) => (
  <a
    data-testid={testid}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="card-press fade-up no-underline block rounded-[24px] bg-[#0E0E10] text-white p-5 sm:p-6"
  >
    <div className="flex items-start gap-4">
      <div
        className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ring-1 ring-white/10 text-white"
        style={{ backgroundColor: "#1F1F22" }}
      >
        <AppleIcon size={26} className="text-white" />
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
            className="cta-pill inline-flex items-center gap-1.5 rounded-full text-black text-[12.5px] font-semibold px-4 py-2.5 leading-none"
            style={{
              backgroundColor: ACCENT,
              boxShadow: `0 8px 20px -8px rgba(255,255,255,0.35)`,
            }}
          >
            Abrir na App Store
            <ArrowRightIcon size={14} />
          </span>
        </div>
      </div>
    </div>
  </a>
);

export default function AppsIOS() {
  return (
    <div className="page-shell">
      <main className="page-inner" data-testid="apps-ios-page">
        <Link
          to="/apps"
          data-testid="back-to-apps"
          className="inline-flex items-center gap-1 text-[13px] font-medium text-zinc-700 hover:text-black no-underline"
        >
          <ChevronLeftIcon size={18} />
          Voltar
        </Link>

        <header className="mt-5 fade-up">
          <p className="text-[12px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
            Apps · Renda Extra
          </p>
          <h1 className="mt-2 text-[26px] sm:text-[30px] font-extrabold tracking-tight text-black leading-tight uppercase">
            IOS
          </h1>
          <p className="mt-2 text-[14px] text-zinc-600 leading-snug max-w-[340px]">
            Clique para abrir cada app direto na App Store.
          </p>
        </header>

        <section className="mt-7 flex flex-col gap-4">
          {IOS_APPS.map((a) => (
            <AppCard key={a.name} {...a} />
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
