import { ArrowLeft, MapPinned } from 'lucide-react';
import Link from 'next/link';
import { PortalFooter } from '@/components/layout/portal-footer';
import { PortalHeader } from '@/components/layout/portal-header';

interface MappingServicePageProps {
  title: string;
  description: string;
  steps: string[];
}

export function MappingServicePage({ title, description, steps }: MappingServicePageProps) {
  return <div className="min-h-screen bg-background text-foreground"><PortalHeader /><main><section className="bg-primary text-primary-foreground"><div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16"><Link href="/mapeamento" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 underline underline-offset-4"><ArrowLeft className="h-4 w-4" /> Voltar ao mapeamento</Link><div className="mt-9 flex items-start gap-5"><span className="grid h-16 w-16 shrink-0 place-items-center bg-cyan-700"><MapPinned className="h-8 w-8" /></span><div><p className="text-sm font-semibold uppercase tracking-[0.17em] text-cyan-200">Serviço de localização</p><h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">{description}</p></div></div></div></section><article className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><section><h2 className="text-3xl font-semibold tracking-tight">Como funcionará</h2><ol className="mt-6 space-y-5">{steps.map((step, index) => <li key={step} className="flex gap-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span><span className="pt-1 leading-7 text-muted-foreground">{step}</span></li>)}</ol></section><section className="border border-border bg-white p-7"><p className="text-sm font-semibold uppercase tracking-wider text-primary">Integração pendente</p><h2 className="mt-3 text-2xl font-semibold">Ferramenta preparada para receber dados oficiais</h2><p className="mt-4 leading-7 text-muted-foreground">A busca será ativada quando a base de endereços, unidades e áreas de atendimento for definida e validada. Nenhum resultado fictício será apresentado como informação real.</p></section></div></article></main><PortalFooter /></div>;
}
