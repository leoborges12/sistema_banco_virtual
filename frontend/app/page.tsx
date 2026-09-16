import { ArrowRight, Cross, FileText, FlaskConical, MapPinned, Newspaper, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { PortalHeader } from '@/components/layout/portal-header';
import { PortalFooter } from '@/components/layout/portal-footer';
import { portalAreas } from '@/data/portal-areas';

const icons = { map: MapPinned, exam: FlaskConical, health: Stethoscope, document: FileText, news: Newspaper };

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortalHeader />
      <main>
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_.9fr] md:px-8 md:py-20">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Portal de saúde</p>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">Informação para cuidar da sua saúde.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">Encontre unidades, medicamentos, exames, orientações e documentos em um único lugar.</p>
            </div>
            <div className="flex items-end md:justify-end">
              <div className="w-full max-w-md border-l-4 border-cyan-300 bg-white/10 p-6">
                <Cross className="mb-5 h-8 w-8 text-cyan-200" aria-hidden="true" />
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-100">Acesso rápido</p>
                <p className="mt-2 text-lg leading-7">Use o mapeamento para localizar serviços de saúde próximos ao seu endereço.</p>
                <Link href="/mapeamento" className="mt-5 inline-flex items-center gap-2 font-semibold underline decoration-cyan-300 decoration-2 underline-offset-4">Abrir mapeamento <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="areas-title" className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="mb-9 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Serviços e informações</p><h2 id="areas-title" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">O que você procura?</h2></div>
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {portalAreas.map((area, index) => {
              const Icon = icons[area.icon];
              return <Link key={area.slug} href={`/${area.slug}`} className={`group flex min-h-64 flex-col bg-card p-7 transition-colors hover:bg-accent focus-visible:bg-accent ${index === 0 ? 'lg:col-span-2' : ''}`}>
                <div className="flex items-start justify-between gap-4"><span className="grid h-16 w-16 place-items-center bg-primary text-primary-foreground"><Icon className="h-8 w-8" strokeWidth={2.3} aria-hidden="true" /></span><span className="text-sm font-semibold text-muted-foreground">0{index + 1}</span></div>
                <div className="mt-auto pt-8"><h3 className="text-2xl font-semibold tracking-tight">{area.title}</h3><p className="mt-3 max-w-xl leading-7 text-muted-foreground">{area.description}</p><span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Acessar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></div>
              </Link>;
            })}
          </div>
        </section>
      </main>
      <PortalFooter />
    </div>
  );
}
