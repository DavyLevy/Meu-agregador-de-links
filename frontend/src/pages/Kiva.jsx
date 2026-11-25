import React from "react";
import { Link } from "react-router-dom";

export default function Kiva() {
  const downloads = [
    ["🤖 BAIXAR PARA ANDROID", "https://play.google.com/store/apps/details?id=com.kiva.app"],
    ["🍎 BAIXAR PARA IPHONE", "https://apps.apple.com/br/app/kiva-v%C3%ADdeos-e-an%C3%BAncios-com-ia/id6761752130"],
  ];
  return (
    <div className="page-shell">
      <main className="page-inner" data-testid="kiva-page">
        <Link to="/" className="inline-flex items-center min-h-[44px] text-zinc-700 font-semibold mb-6">Voltar ao início</Link>
        <section className="rounded-[24px] bg-[#0E0E10] text-white p-5 sm:p-6 text-center fade-up">
          <img src="/kiva-logo.png" alt="Logo KIVA AI" width="108" height="108" className="mx-auto w-[108px] h-[108px] rounded-2xl object-contain" />
          <h1 className="mt-5 text-2xl font-extrabold">KIVA AI</h1>
          <p className="mt-3 text-base leading-relaxed text-zinc-300">Crie vídeos publicitários para divulgar e vender seus produtos utilizando inteligência artificial.</p>
          <p className="mt-6 mb-4 text-base text-zinc-300">Escolha seu celular para baixar:</p>
          <div className="flex flex-col gap-3">
            {downloads.map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="cta-pill flex items-center justify-center min-h-[48px] rounded-full bg-[#FF7A1A] hover:bg-[#FF8A33] text-white text-sm sm:text-base font-semibold px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{label}</a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
