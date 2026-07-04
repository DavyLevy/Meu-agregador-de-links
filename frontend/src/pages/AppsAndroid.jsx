import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeftIcon,
  ArrowRightIcon,
  AndroidIcon,
} from "@/components/icons/SocialIcons";

const ACCENT = "#3DDC84";

const ANDROID_APPS = [
  {
    name: "Fiverr",
    description: "Marketplace global de serviços freelancers.",
    href: "https://play.google.com/store/apps/details?id=com.fiverr.fiverr&pcampaignid=web_share",
    testid: "android-fiverr",
  },
  {
    name: "Closeer",
    description: "Trabalhos por hora, perto de você.",
    href: "https://play.google.com/store/apps/details?id=com.closeer.closeer_worker&pcampaignid=web_share",
    testid: "android-closeer",
  },
  {
    name: "Bravo Eventos",
    description: "Freelas em eventos, buffets e produções.",
    href: "https://play.google.com/store/apps/details?id=com.appbravoeventos.bravoapp&pcampaignid=web_share",
    testid: "android-bravo",
  },
  {
    name: "Estaff",
    description: "Freelancer em eventos e serviços temporários.",
    href: "https://play.google.com/store/apps/details?id=com.estaff.appfreela&pcampaignid=web_share",
    testid: "android-estaff",
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
        className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ring-1 ring-white/10"
        style={{ backgroundColor: `${ACCENT}22` }}
      >
        <AndroidIcon size={26} />
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
            className="cta-pill inline-flex items-center gap-1.5 rounded-full text-white text-[12.5px] font-semibold px-4 py-2.5 leading-none"
            style={{
              backgroundColor: ACCENT,
              boxShadow: `0 8px 20px -8px ${ACCENT}aa`,
              color: "#062E1A",
            }}
          >
            Abrir na Play Store
            <ArrowRightIcon size={14} />
          </span>
        </div>
      </div>
    </div>
  </a>
);

export default function AppsAndroid() {
  return (
    <div className="page-shell">
      <main className="page-inner" data-testid="apps-android-page">
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
            ANDROID
          </h1>
          <p className="mt-2 text-[14px] text-zinc-600 leading-snug max-w-[340px]">
            Clique para abrir cada app direto na Google Play Store.
          </p>
        </header>

        <section className="mt-7 flex flex-col gap-4">
          {ANDROID_APPS.map((a) => (
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
