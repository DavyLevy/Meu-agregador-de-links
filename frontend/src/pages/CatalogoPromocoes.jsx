import React from "react";
import { Link, useParams } from "react-router-dom";

const labels = { amazon: "Amazon", "mercado-livre": "Mercado Livre" };
// Add approved products here later: { name, image, price, url }.
const products = { amazon: [], "mercado-livre": [] };

export default function CatalogoPromocoes() {
  const { loja } = useParams();
  const title = labels[loja];
  if (!title) return <div className="page-shell"><main className="page-inner"><Link to="/promocoes">← Voltar às promoções</Link><p>Catálogo não encontrado.</p></main></div>;
  return <div className="page-shell"><main className="page-inner">
    <Link to="/promocoes" className="text-sm text-zinc-600">← Voltar às promoções</Link>
    <header className="mt-7 mb-7 text-center"><h1 className="text-3xl font-extrabold text-black">PRODUTOS {title.toUpperCase()}</h1><p className="mt-2 text-sm text-zinc-600">Ofertas selecionadas pelo LEVY PROMOS</p></header>
    {products[loja].length === 0 ? <div className="rounded-[24px] bg-[#0E0E10] p-8 text-center text-white"><p className="text-xl font-bold">Produtos em breve</p><p className="mt-3 text-sm text-zinc-400">Estamos preparando nossa seleção. Volte em breve!</p></div> : <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">{products[loja].map((product) => <article key={product.url} className="rounded-[24px] bg-[#0E0E10] p-5 text-white"><img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded-xl bg-white"/><h2 className="mt-3 font-bold">{product.name}</h2><p className="mt-1 text-sm">{product.price}</p><a href={product.url} target="_blank" rel="sponsored noopener noreferrer" className="mt-4 inline-block rounded-full bg-[#FF7A1A] px-4 py-2 font-semibold">Ver produto</a></article>)}</section>}
    <p className="mt-8 text-center text-xs text-zinc-500">Alguns links podem gerar comissão de afiliado sem custo adicional para você.</p>
  </main></div>;
}