'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type NewsItem = { id: string; title: string; excerpt: string; date: string; image?: string };

export default function NewsCarousel({ items }: { items: NewsItem[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => { if (items.length === 0) return; const timer = window.setInterval(() => setIndex((current) => (current + 1) % items.length), 5000); return () => window.clearInterval(timer); }, [items]);
  if (items.length === 0) return null;
  return <div className="relative min-h-[25rem] overflow-hidden rounded-3xl bg-ink shadow-lift md:min-h-80">{items.map((item, itemIndex) => <article key={item.id} aria-hidden={itemIndex !== index} className={`absolute inset-0 grid transition-opacity duration-700 md:grid-cols-[0.9fr_1.1fr] ${itemIndex === index ? 'z-10 opacity-100' : 'pointer-events-none opacity-0'}`}><div className="relative min-h-48"><Image src={item.image ?? '/images/cabecalho.jpg'} alt="" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" /></div><div className="flex flex-col justify-center p-8 text-white md:p-10"><p className="eyebrow text-amber">Destaque · {item.date}</p><h2 className="mt-3 text-3xl font-bold">{item.title}</h2><p className="mt-4 max-w-xl leading-7 text-ink-muted">{item.excerpt}</p></div></article>)}<div className="absolute bottom-5 right-5 z-20 flex gap-2"><button onClick={() => setIndex((current) => (current - 1 + items.length) % items.length)} aria-label="Notícia anterior" className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-soft"><ChevronLeft className="h-5 w-5" /></button><button onClick={() => setIndex((current) => (current + 1) % items.length)} aria-label="Próxima notícia" className="grid h-11 w-11 place-items-center rounded-full bg-coral text-white shadow-soft"><ChevronRight className="h-5 w-5" /></button></div><div className="absolute bottom-6 left-8 z-20 flex gap-2">{items.map((item, itemIndex) => <button key={item.id} onClick={() => setIndex(itemIndex)} aria-label={`Ir para notícia ${itemIndex + 1}`} className={`h-2.5 rounded-full transition-all ${itemIndex === index ? 'w-8 bg-teal' : 'w-2.5 bg-white/50'}`} />)}</div></div>;
}
