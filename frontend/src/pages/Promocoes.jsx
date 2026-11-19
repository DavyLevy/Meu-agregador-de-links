import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/DlOi71ILIAW2uceJUbeKll?s=cl&p=i&iam=2";
const cards = [
  { title: "ENTRAR NO GRUPO DE PROMOÇÕES GRATUITO", description: "Receba ofertas e cupons no nosso grupo gratuito.", href: WHATSAPP_GROUP_URL, label: "Entrar no grupo", Icon: WhatsAppIcon },
  { title: "PRODUTOS MERCADO LIVRE", description: "Veja nossa vitrine de ofertas do Mercado Livre.", to: "/promocoes/mercado-livre", label: "Ver produtos" },
  { title: "PRODUTOS AMAZON", description: "Veja nossa vitrine de ofertas da Amazon.", to: "/promocoes/amazon", label: "Ver produtos" },
];
export default function Promocoes() {
  return <div className="page-shell"><main className="page-inner">
    <Link to="/" className="text-sm text-zinc-600">← Voltar ao início</Link>
    <header className="mt-7 mb-7 text-center"><h1 className="text-3xl font-extrabold text-black">GRUPO DE PROMOÇÕES</h1><p className="mt-2 text-sm text-zinc-600">Entre no grupo gratuito ou explore nossas vitrines de produtos.</p></header>
    <section className="flex flex-col gap-4">{cards.map(({title,description,href,to,label,Icon}) => {
      const card = <article className="card-press rounded-[24px] bg-[#0E0E10] text-white p-5 sm:p-6 flex items-center justify-between gap-4">
        <div><h2 className="text-lg font-bold">{title}</h2><p className="mt-2 text-sm text-zinc-400">{description}</p><span className="cta-pill mt-4 inline-flex items-center gap-2 rounded-full bg-[#FF7A1A] text-white text-sm font-semibold px-4 py-2.5">{label}<ArrowRightIcon size={14}/></span></div>
        {Icon ? <Icon size={42}/> : <span className="text-3xl" aria-hidden="true">🛍️</span>}
      </article>;
      return href ? <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="block no-underline">{card}</a> : <Link key={title} to={to} className="block no-underline">{card}</Link>;
    })}</section>
  </main></div>;
}