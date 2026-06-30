import React from "react";
import { Link } from "react-router-dom";
import {
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  YouTubeIcon,
  MailIcon,
  ArrowRightIcon,
} from "@/components/icons/SocialIcons";

const PROFILE_IMG =
  "https://lh3.googleusercontent.com/d/1LRCPLtd5KMYISHkdnsMKi2vceWmKTctC=w800";
const GLOBE_IMG =
  "https://lh3.googleusercontent.com/d/1sRtkCgtHMOzEkRmelMrWwyrCGwJTzUzD=w800";
const TOOLS_IMG =
  "https://lh3.googleusercontent.com/d/182t1yhYgVBBVOylb8Tl3kpjXpv6OvWwa=w800";
const MIND7_IMG =
  "https://customer-assets.emergentagent.com/job_link-in-bio-7/artifacts/ul2ff3pv_images.png";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/davylevy_/",
    icon: InstagramIcon,
    testid: "social-instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/199GHz5Ymc/?mibextid=wwXIfr",
    icon: FacebookIcon,
    testid: "social-facebook",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@davytech_",
    icon: TikTokIcon,
    testid: "social-tiktok",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@DavyLevyTech",
    icon: YouTubeIcon,
    testid: "social-youtube",
  },
];

const DarkCardLink = ({
  to,
  href,
  external,
  title,
  description,
  ctaLabel,
  rightSlot,
  testid,
}) => {
  const content = (
    <article
      data-testid={testid}
      className="card-press relative overflow-hidden rounded-[24px] bg-[#0E0E10] text-white p-5 sm:p-6 flex items-stretch gap-4 sm:gap-5 fade-up"
    >
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="text-[18px] sm:text-[19px] font-bold leading-tight tracking-tight">
            {title}
          </h3>
          <p className="mt-1.5 text-[13px] sm:text-[13.5px] leading-snug text-zinc-400 pr-1">
            {description}
          </p>
        </div>
        <div className="mt-4">
          <span
            data-testid={`${testid}-cta`}
            className="cta-pill inline-flex items-center gap-1.5 rounded-full bg-[#FF7A1A] hover:bg-[#FF8A33] text-white text-[12.5px] sm:text-[13px] font-semibold px-4 py-2.5 leading-none"
          >
            {ctaLabel}
            <ArrowRightIcon size={14} />
          </span>
        </div>
      </div>
      <div className="shrink-0 self-center">{rightSlot}</div>
    </article>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        {content}
      </a>
    );
  }
  return (
    <Link to={to} className="block no-underline">
      {content}
    </Link>
  );
};

const ImageBox = ({ src, alt }) => (
  <div className="w-[96px] h-[96px] sm:w-[108px] sm:h-[108px] rounded-2xl bg-zinc-900 overflow-hidden ring-1 ring-white/5 flex items-center justify-center">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      className="w-full h-full object-cover"
    />
  </div>
);

const IconBox = ({ children, bg = "bg-zinc-800" }) => (
  <div
    className={`w-[96px] h-[96px] sm:w-[108px] sm:h-[108px] rounded-2xl ${bg} ring-1 ring-white/5 flex items-center justify-center`}
  >
    {children}
  </div>
);

export default function LinkInBio() {
  return (
    <div className="page-shell">
      <main className="page-inner" data-testid="link-in-bio-page">
        {/* Header */}
        <header className="flex flex-col items-center text-center fade-up">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-orange-300/40 via-zinc-300/30 to-zinc-900/40 blur-md" />
            <img
              data-testid="profile-photo"
              src={PROFILE_IMG}
              alt="Davy Levy"
              referrerPolicy="no-referrer"
              style={{ objectPosition: "50% 22%" }}
              className="relative w-[128px] h-[128px] rounded-full object-cover ring-4 ring-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]"
            />
          </div>

          <h1
            data-testid="profile-name"
            className="mt-5 text-[26px] sm:text-[28px] font-extrabold tracking-tight text-black"
          >
            Davy Levy
          </h1>
          <p
            data-testid="profile-bio"
            className="mt-1.5 text-[14px] sm:text-[14.5px] leading-snug text-zinc-600 max-w-[320px]"
          >
            Estrategista Digital. Ajudo você a proteger seus dados e sua
            privacidade.
          </p>

          {/* Social row */}
          <nav
            aria-label="Redes sociais"
            className="mt-5 flex items-center justify-center gap-3"
          >
            {SOCIALS.map(({ name, href, icon: Icon, testid }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                data-testid={testid}
                className="social-icon-btn flex items-center justify-center w-11 h-11 rounded-full bg-white hover:bg-zinc-50 ring-1 ring-black/5 shadow-[0_4px_14px_-8px_rgba(0,0,0,0.25)]"
              >
                <Icon size={22} />
              </a>
            ))}
          </nav>
        </header>

        {/* Cards */}
        <section className="mt-8 flex flex-col gap-4">
          {/* Card 1 — TV GRÁTIS */}
          <DarkCardLink
            external
            href="https://famelack.com/tv/br"
            title="TV GRÁTIS"
            description="Assista TV aberta de qualquer país, bastando apenas ter acesso a internet."
            ctaLabel="Acessar Famelack"
            testid="card-tv"
            rightSlot={<ImageBox src={GLOBE_IMG} alt="Globo TV grátis" />}
          />

          {/* Card 2 — Ferramentas de Investigação */}
          <DarkCardLink
            to="/ferramentas"
            title="Ferramentas de Investigação"
            description="Acesse um conjunto curado de ferramentas pra investigar e se proteger online."
            ctaLabel="Ver ferramentas"
            testid="card-ferramentas"
            rightSlot={
              <ImageBox src={TOOLS_IMG} alt="Ferramentas de investigação" />
            }
          />

          {/* Card 3 — MIND7 */}
          <DarkCardLink
            external
            href="https://mind-7.org/?r=DAVYLEVY_"
            title="MIND7"
            description="Descubra informações de qualquer pessoa."
            ctaLabel="Acessar Mind7"
            testid="card-mind7"
            rightSlot={
              <div className="w-[96px] h-[96px] sm:w-[108px] sm:h-[108px] rounded-2xl bg-white ring-1 ring-white/5 flex items-center justify-center overflow-hidden">
                <img
                  src={MIND7_IMG}
                  alt="MIND7"
                  className="w-[82%] h-[82%] object-contain"
                  loading="lazy"
                />
              </div>
            }
          />

          {/* Card 3 — Meus Vídeos */}
          <DarkCardLink
            to="/videos"
            title="Meus vídeos"
            description="Os reels mais quentes do Instagram, reunidos pra você assistir agora."
            ctaLabel="Assistir reels"
            testid="card-videos"
            rightSlot={
              <IconBox bg="bg-white/95">
                <InstagramIcon size={56} />
              </IconBox>
            }
          />
        </section>

        {/* Footer */}
        <footer className="mt-10 flex flex-col items-center gap-3">
          <p className="text-[12px] text-zinc-500">Apenas para parcerias</p>
          <a
            href="mailto:parceriasdavytech@gmail.com"
            data-testid="partnership-email"
            className="inline-flex items-center gap-2 text-[12.5px] text-zinc-700 hover:text-black"
          >
            <MailIcon size={14} />
            parceriasdavytech@gmail.com
          </a>
          <p className="mt-3 text-[11px] text-zinc-400">
            © {new Date().getFullYear()} Davy Levy
          </p>
        </footer>
      </main>
    </div>
  );
}
