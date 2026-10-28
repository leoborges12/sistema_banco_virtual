import { ArrowRight, HeartPulse } from 'lucide-react';
import Link from 'next/link';
import { PortalFooter } from '@/components/layout/portal-footer';
import { PortalHeader } from '@/components/layout/portal-header';

export default function AboutPortalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortalHeader />
      <main>
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.17em] text-white/80">Portal de Saúde de Itaqui</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Sobre o portal</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90">Cuidar da sua saúde também é cuidar do futuro.</p>
          </div>
        </section>
        <article className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <div className="flex max-w-3xl items-start gap-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center bg-ice text-turquoise">
              <HeartPulse className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Informação e serviços de saúde em um só lugar</h2>
              <p className="mt-4 leading-7 text-muted-foreground">Este portal foi criado para facilitar o acesso da população de Itaqui a informações de saúde, unidades de atendimento, documentos e serviços.</p>
              <Link href="/unidades-de-saude" className="mt-6 inline-flex min-h-11 items-center gap-2 bg-institutional px-4 font-semibold text-white transition-colors hover:bg-institutional/90">Conheça as unidades de saúde <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </article>
      </main>
      <PortalFooter />
    </div>
  );
}