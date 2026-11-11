import { ArrowRight, ExternalLink, Info } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/layout/page-hero';
import { PortalFooter } from '@/components/layout/portal-footer';
import { PortalHeader } from '@/components/layout/portal-header';
import { findPortalArea, portalAreas } from '@/data/portal-areas';

export function generateStaticParams() { return portalAreas.map(({ slug }) => ({ slug })); }

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = findPortalArea(slug);
  if (!area) notFound();
  const tones = ['bg-teal-soft text-teal', 'bg-coral-soft text-coral', 'bg-amber-soft text-ink', 'bg-sky-soft text-sky'];
  return <div className="flex min-h-screen flex-col"><PortalHeader /><main className="flex-1"><PageHero eyebrow="Área do portal" title={area.title} description={area.description} backHref="/" backLabel="Página inicial" /><article className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><section><p className="eyebrow text-teal">Conheça esta área</p><h2 className="mt-3 text-3xl font-bold">Informação organizada para facilitar seu acesso.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">{area.introduction}</p><aside className="mt-8 rounded-2xl bg-teal-soft p-5"><div className="flex gap-3"><Info className="mt-0.5 h-5 w-5 shrink-0 text-teal" /><div><p className="font-bold">Validação institucional</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Os dados oficiais serão publicados após validação da instituição responsável.</p></div></div></aside></section><section aria-labelledby="contents-title"><p className="eyebrow text-coral">Conteúdos e serviços</p><h2 id="contents-title" className="mt-3 text-3xl font-bold">Explore as opções</h2><div className="mt-7 grid gap-4">{area.topics.map((topic, index) => { const content = <><span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-sm font-extrabold ${tones[index % tones.length]}`}>0{index + 1}</span><span className="min-w-0 flex-1"><span className="block text-lg font-bold">{topic.title}</span><span className="mt-1 block text-sm leading-6 text-muted-foreground">{topic.description}</span></span>{topic.href && (topic.external ? <ExternalLink className="h-5 w-5 shrink-0 text-teal" /> : <ArrowRight className="h-5 w-5 shrink-0 text-teal" />)}</>; const cls = 'card-lift flex items-center gap-5 p-5'; return topic.external && topic.href ? <a key={topic.title} href={topic.href} target="_blank" rel="noreferrer" className={cls}>{content}</a> : topic.href ? <Link key={topic.title} href={topic.href} className={cls}>{content}</Link> : <div key={topic.title} className={cls}>{content}</div>; })}</div></section></div></article></main><PortalFooter /></div>;
}
