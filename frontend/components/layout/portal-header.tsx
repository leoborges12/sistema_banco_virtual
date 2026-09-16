import { ChevronDown, Menu, Plus, Search } from 'lucide-react';
import Link from 'next/link';

const navigation = [
  { label: 'Mapeamento', href: '/mapeamento' },
  { label: 'Locais de exames', href: '/locais-de-exames' },
  { label: 'Informações de saúde', href: '/informacoes-de-saude' },
  { label: 'Documentação', href: '/documentacao' },
  { label: 'Notícias', href: '/noticias' },
];

export function PortalHeader() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="mx-auto flex min-h-28 max-w-7xl items-center justify-between gap-6 px-5 py-5 md:px-8">
        <Link href="/" className="flex items-stretch font-semibold" aria-label="Portal de Saúde — página inicial">
          <span className="grid w-16 place-items-center bg-cyan-600 sm:w-20"><Plus className="h-9 w-9" strokeWidth={3} aria-hidden="true" /></span>
          <span className="flex flex-col justify-center border-l border-white/40 bg-cyan-700 px-4 py-3 sm:px-5"><span className="text-lg leading-tight sm:text-xl">Portal de Saúde</span><span className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-cyan-100">Informação e acesso</span></span>
        </Link>
        <Link href="/" className="grid h-14 w-14 place-items-center transition-colors hover:bg-white/10 focus-visible:bg-white/10" aria-label="Pesquisar no portal"><Search className="h-8 w-8" strokeWidth={2.5} aria-hidden="true" /></Link>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <nav aria-label="Navegação principal" className="hidden min-h-16 items-center justify-between lg:flex">
            {navigation.map((item) => <Link key={item.href} href={item.href} className="group inline-flex items-center gap-3 py-5 text-base font-semibold text-slate-100 transition-colors hover:text-white">{item.label}<ChevronDown className="h-5 w-5 text-amber-300 transition-transform group-hover:translate-y-0.5" strokeWidth={3} aria-hidden="true" /></Link>)}
          </nav>
          <div className="flex min-h-14 items-center justify-between lg:hidden"><span className="text-sm font-semibold uppercase tracking-wider text-slate-300">Menu principal</span><button type="button" className="grid h-11 w-11 place-items-center" aria-label="Abrir menu"><Menu className="h-7 w-7" aria-hidden="true" /></button></div>
        </div>
      </div>
    </header>
  );
}
