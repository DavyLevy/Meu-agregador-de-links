import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeftIcon,
  ArrowRightIcon,
  AndroidIcon,
  AppleIcon,
} from "@/components/icons/SocialIcons";

const PlatformCard = ({
  to,
  title,
  description,
  IconCmp,
  iconColor,
  ctaLabel,
  ringColor,
  testid,
}) => (
  <Link
    to={to}
    data-testid={testid}
    className="card-press fade-up no-underline block rounded-[24px] bg-[#0E0E10] text-white p-5 sm:p-6"
  >
    <div className="flex items-stretch gap-4">
      <div className="shrink-0 self-center">
        <div
          className="w-[96px] h-[96px] rounded-2xl flex items-center justify-center ring-1"
          style={{
            backgroundColor: ringColor + "18",
            boxShadow: `inset 0 0 0 1px ${ringColor}33`,
          }}
        >
          <IconCmp size={54} className="" style={{ color: iconColor }} />
        </div>
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="text-[19px] font-bold leading-tight tracking-tight uppercase">
            {title}
          </h3>
          <p className="mt-1.5 text-[13.5px] leading-snug text-zinc-400">
            {description}
          </p>
        </div>
        <div className="mt-4">
          <span
            className="cta-pill inline-flex items-center gap-1.5 rounded-full text-white text-[12.5px] font-semibold px-4 py-2.5 leading-none"
            style={{
              backgroundColor: ringColor,
              boxShadow: `0 8px 20px -8px ${ringColor}aa`,
            }}
          >
            {ctaLabel}
            <ArrowRightIcon size={14} />
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default function Apps() {
  return (
    <div className="page-shell">
      <main className="page-inner" data-testid="apps-page">
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
            Davy Levy · Freela
          </p>
          <h1 className="mt-2 text-[26px] sm:text-[30px] font-extrabold tracking-tight text-black leading-tight uppercase">
            APPS PARA RENDA EXTRA
          </h1>
          <p className="mt-2 text-[14px] text-zinc-600 leading-snug max-w-[340px]">
            Escolha o sistema do seu celular pra ver os melhores apps de freela
            e trampo por conta.
          </p>
        </header>

        <section className="mt-7 flex flex-col gap-4">
          <PlatformCard
            to="/apps/android"
            title="ANDROID"
            description="Os melhores apps de renda extra na Play Store."
            IconCmp={AndroidIcon}
            iconColor="#3DDC84"
            ringColor="#3DDC84"
            ctaLabel="Ver apps Android"
            testid="platform-android"
          />
          <PlatformCard
            to="/apps/ios"
            title="IOS"
            description="Os melhores apps de renda extra na App Store."
            IconCmp={AppleIcon}
            iconColor="#F2F2F2"
            ringColor="#A1A1AA"
            ctaLabel="Ver apps iOS"
            testid="platform-ios"
          />
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
