import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortalFooter } from '@/components/layout/portal-footer';
import { PortalHeader } from '@/components/layout/portal-header';
import { findPortalArea, portalAreas } from '@/data/portal-areas';

export function generateStaticParams() { return portalAreas.map(({ slug }) => ({ slug })); }
export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const area = findPortalArea(slug); if (!area) notFound();
  return <div className="min-h-screen bg-background text-foreground"><PortalHeader /><main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16"><Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft className="h-4 w-4" /> Voltar ao início</Link><div className="mt-10 grid gap-10 lg:grid-cols-[.72fr_1.28fr]"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Área do portal</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{area.title}</h1><p className="mt-5 text-lg leading-8 text-muted-foreground">{area.description}</p></div><section aria-label={`Conteúdos de ${area.title}`} className="border-t-4 border-primary bg-secondary p-6 sm:p-8"><p className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Conteúdos previstos</p><div className="divide-y divide-border border-y border-border">{area.topics.map((topic) => <div key={topic} className="flex items-center justify-between gap-4 py-5"><span className="text-lg font-semibold">{topic}</span><ArrowRight className="h-5 w-5 text-primary" /></div>)}</div><p className="mt-7 text-sm leading-6 text-muted-foreground">Página estrutural de demonstração. Os dados e serviços oficiais serão integrados nas próximas etapas.</p></section></div></main><PortalFooter /></div>;
}
