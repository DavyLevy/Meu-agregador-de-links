import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/DlOi71ILIAW2uceJUbeKll?s=cl&p=i&iam=2";
const cards = [
  { title: "ENTRAR NO GRUPO DE PROMOÇÕES GRATUITO", description: "Receba ofertas e cupons no nosso grupo gratuito.", href: WHATSAPP_GROUP_URL, label: "Entrar no grupo", Icon: WhatsAppIcon },
  { title: "PRODUTOS MERCADO LIVRE", description: "Veja nossa vitrine de ofertas do Mercado Livre.", to: "/promocoes/mercado-livre", label: "Ver produtos", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Mercado%20Livre%20wordmark%20(Portuguese%20version).svg" },
  { title: "PRODUTOS AMAZON", description: "Veja nossa vitrine de ofertas da Amazon.", to: "/promocoes/amazon", label: "Ver produtos", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Amazon%202024.svg" },
];
export default function Promocoes() {
  return <div className="page-shell"><main className="page-inner">
    <Link to="/" className="text-sm text-zinc-600">← Voltar ao início</Link>
    <header className="mt-7 mb-7 text-center"><h1 className="text-3xl font-extrabold text-black">GRUPO DE PROMOÇÕES</h1><p className="mt-2 text-sm text-zinc-600">Entre no grupo gratuito ou explore nossas vitrines de produtos.</p></header>
    <section className="flex flex-col gap-4">{cards.map(({title,description,href,to,label,Icon,logo}) => {
      const card = <article className="card-press rounded-[24px] bg-[#0E0E10] text-white p-5 sm:p-6 flex items-center justify-between gap-4">
        <div><h2 className="text-lg font-bold">{title}</h2><p className="mt-2 text-sm text-zinc-400">{description}</p><span className="cta-pill mt-4 inline-flex items-center gap-2 rounded-full bg-[#FF7A1A] text-white text-sm font-semibold px-4 py-2.5">{label}<ArrowRightIcon size={14}/></span></div>
        <div className="shrink-0 w-[96px] h-[96px] sm:w-[108px] sm:h-[108px] rounded-2xl bg-white flex items-center justify-center p-3">{logo ? <img src={logo} alt={`Logo ${title.replace("PRODUTOS ", "")}`} loading="lazy" className="max-w-full max-h-full object-contain" /> : <div className="rounded-full bg-[#25D366] text-white p-3"><Icon size={44}/></div>}</div>
      </article>;
      return href ? <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="block no-underline">{card}</a> : <Link key={title} to={to} className="block no-underline">{card}</Link>;
    })}</section>
  </main></div>;
}