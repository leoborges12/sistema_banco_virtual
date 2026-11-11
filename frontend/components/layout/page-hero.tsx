import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function PageHero({ eyebrow = 'Portal de Saúde', title, description, backHref, backLabel }: { eyebrow?: string; title: string; description?: string; backHref?: string; backLabel?: string }) {
  return <section className="relative overflow-hidden bg-gradient-ink text-white"><div className="absolute inset-0 bg-grid-ink opacity-70" /><div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-teal/20 blur-3xl" /><div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">{backHref && <Link href={backHref} className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-ink-muted hover:text-white"><ArrowLeft className="h-4 w-4" />{backLabel ?? 'Voltar'}</Link>}<p className="eyebrow text-amber">{eyebrow}</p><h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>{description && <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-muted">{description}</p>}</div></section>;
}
