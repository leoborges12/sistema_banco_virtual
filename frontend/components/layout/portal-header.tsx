import { ChevronDown, Menu, Plus } from 'lucide-react';
import Link from 'next/link';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Unidades de Saúde', href: '/unidades-de-saude' },
  { label: 'Informações de saúde', href: '/informacoes-de-saude' },
  { label: 'Documentação', href: '/documentacao' },
  { label: 'Notícias', href: '/noticias' },
];

export function PortalHeader({ showBrand = true }: { showBrand?: boolean }) {
  return (
    <header className="bg-slate-900 text-white">
      {showBrand && <div className="mx-auto flex min-h-28 max-w-7xl items-center px-5 py-5 md:px-8">
        <Link href="/" className="flex items-stretch font-semibold" aria-label="Portal de Saúde — página inicial">
          <span className="grid w-16 place-items-center bg-cyan-600 sm:w-20"><Plus className="h-9 w-9" strokeWidth={3} aria-hidden="true" /></span>
          <span className="flex flex-col justify-center border-l border-white/40 bg-cyan-700 px-4 py-3 sm:px-5"><span className="text-lg leading-tight sm:text-xl">Portal de Saúde</span><span className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-cyan-100">Informação e acesso</span></span>
        </Link>
      </div>}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <nav aria-label="Navegação principal" className="hidden min-h-16 items-center justify-between lg:flex">
            {navigation.map((item) => <Link key={item.href} href={item.href} className="group inline-flex items-center gap-3 py-5 text-base font-semibold text-slate-100 transition-colors hover:text-white">{item.label}<ChevronDown className="h-5 w-5 text-amber-300 transition-transform group-hover:translate-y-0.5" strokeWidth={3} aria-hidden="true" /></Link>)}
          </nav>
          <details className="group lg:hidden">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between text-sm font-semibold uppercase tracking-wider text-slate-300 [&::-webkit-details-marker]:hidden">
              <span>Menu principal</span>
              <span className="grid h-11 w-11 place-items-center text-white" aria-label="Alternar menu principal"><Menu className="h-7 w-7" aria-hidden="true" /></span>
            </summary>
            <nav aria-label="Navegação móvel" className="border-t border-white/10 pb-3">
              {navigation.map((item) => <Link key={item.href} href={item.href} className="block py-3 text-base font-semibold text-slate-100 transition-colors hover:text-white">{item.label}</Link>)}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
