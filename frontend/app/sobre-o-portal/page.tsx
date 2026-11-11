import { ArrowRight, HeartPulse, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { PageHero } from '@/components/layout/page-hero';
import { PortalFooter } from '@/components/layout/portal-footer';
import { PortalHeader } from '@/components/layout/portal-header';

export default function AboutPortalPage() {
  return <div className="flex min-h-screen flex-col"><PortalHeader /><main className="flex-1"><PageHero eyebrow="Portal de Saúde de Itaqui" title="Sobre o portal" description="Cuidar da sua saúde também é cuidar do futuro." /><article className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><span className="grid h-16 w-16 place-items-center rounded-2xl bg-coral text-white shadow-[var(--shadow-coral)]"><HeartPulse className="h-8 w-8" /></span><p className="eyebrow mt-6 text-coral">Nossa proposta</p><h2 className="mt-3 text-3xl font-bold">Informação e serviços de saúde em um só lugar.</h2></div><div className="card-lift p-7 sm:p-9"><p className="text-lg leading-8 text-muted-foreground">Este portal foi criado para facilitar o acesso da população de Itaqui a informações de saúde, unidades de atendimento, documentos e serviços.</p><div className="mt-7 flex gap-4 rounded-2xl bg-teal-soft p-5"><ShieldCheck className="h-6 w-6 shrink-0 text-teal" /><p className="text-sm leading-6 text-muted-foreground">Os conteúdos institucionais serão revisados e validados antes da publicação definitiva.</p></div><Link href="/unidades-de-saude" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-bold text-white">Conheça as unidades de saúde <ArrowRight className="h-4 w-4" /></Link></div></div></article></main><PortalFooter /></div>;
}
