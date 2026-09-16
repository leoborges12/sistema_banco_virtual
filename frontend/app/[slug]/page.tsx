import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortalFooter } from '@/components/layout/portal-footer';
import { PortalHeader } from '@/components/layout/portal-header';
import { findPortalArea, portalAreas } from '@/data/portal-areas';

export function generateStaticParams() {
  return portalAreas.map(({ slug }) => ({ slug }));
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = findPortalArea(slug);
  if (!area) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortalHeader />
      <main>
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 underline underline-offset-4"><ArrowLeft className="h-4 w-4" /> Página inicial</Link>
            <p className="mt-9 text-sm font-semibold uppercase tracking-[0.17em] text-cyan-200">Área do portal</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{area.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">{area.description}</p>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Sobre esta área</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">{area.introduction}</p>

          <section aria-labelledby="contents-title" className="mt-12">
            <h2 id="contents-title" className="text-3xl font-semibold tracking-tight">Conteúdos e serviços</h2>
            <div className="mt-7 divide-y divide-border border-y border-border">
              {area.topics.map((topic, index) => {
                const content = <><span className="grid h-11 w-11 shrink-0 place-items-center bg-primary text-sm font-bold text-primary-foreground">0{index + 1}</span><span className="min-w-0 flex-1"><span className="block text-xl font-semibold">{topic.title}</span><span className="mt-2 block leading-7 text-muted-foreground">{topic.description}</span></span>{topic.href && <ArrowRight className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />}</>;
                return topic.href ? <Link key={topic.title} href={topic.href} className="flex items-center gap-5 py-6 transition-colors hover:bg-secondary focus-visible:bg-secondary sm:px-4">{content}</Link> : <div key={topic.title} className="flex items-center gap-5 py-6 sm:px-4">{content}</div>;
              })}
            </div>
          </section>

          <aside className="mt-12 border-l-4 border-cyan-600 bg-secondary px-6 py-5"><p className="font-semibold">Conteúdo em preparação</p><p className="mt-2 leading-7 text-muted-foreground">Os dados oficiais desta área serão publicados após validação da instituição responsável.</p></aside>
        </article>
      </main>
      <PortalFooter />
    </div>
  );
}
