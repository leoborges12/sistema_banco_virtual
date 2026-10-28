import { ArrowLeft, LockKeyhole } from 'lucide-react';
import Link from 'next/link';
import { PortalFooter } from '@/components/layout/portal-footer';
import { PortalHeader } from '@/components/layout/portal-header';

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortalHeader />
      <main>
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.17em] text-white/80">Portal de Saúde</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Acesso</h1>
          </div>
        </section>
        <section className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <div className="flex max-w-3xl items-start gap-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center bg-ice text-turquoise">
              <LockKeyhole className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Acesso a documentos privados</h2>
              <p className="mt-4 leading-7 text-muted-foreground">A criação de contas e o acesso restrito serão disponibilizados em uma próxima etapa. No momento, esta área ainda não requer login.</p>
              <Link href="/" className="mt-6 inline-flex items-center gap-2 font-semibold text-institutional underline decoration-2 underline-offset-4"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Voltar ao início</Link>
            </div>
          </div>
        </section>
      </main>
      <PortalFooter />
    </div>
  );
}