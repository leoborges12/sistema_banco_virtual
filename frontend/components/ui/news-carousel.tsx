"use client";

import React from 'react';

type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
};

export default function NewsCarousel({ items }: { items: NewsItem[] }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!items || items.length === 0) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full">
      <div className="relative rounded-md bg-white shadow overflow-hidden" style={{ minHeight: 180 }}>
        {/* Slides (stacked) */}
        {items.map((it, i) => (
          <div
            key={it.id}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <div className="w-full h-full flex flex-col md:flex-row">
              <div className="md:w-2/5 h-44 md:h-72 relative">
                {it.image ? (
                  <img src={it.image} alt={it.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-ice" />
                )}
              </div>

              <div className="p-6 md:w-3/5 flex flex-col justify-center">
                <div className="text-xs text-muted-foreground">{it.date}</div>
                <h3 className="mt-2 text-2xl font-semibold">{it.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{it.excerpt}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <button onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)} className="rounded-full bg-white/90 p-2 shadow">◀</button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <button onClick={() => setIndex((i) => (i + 1) % items.length)} className="rounded-full bg-white/90 p-2 shadow">▶</button>
        </div>

        {/* Indicators */}
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir para notícia ${i + 1}`}
              className={`h-3 w-6 rounded ${i === index ? 'bg-turquoise' : 'bg-white/70'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
