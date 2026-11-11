import { LogIn, Menu, Plus } from 'lucide-react';
import Link from 'next/link';

const navigation = [
  { label: 'Início', href: '/' },
  { label: 'Unidades de Saúde', href: '/unidades-de-saude' },
  { label: 'Informações de saúde', href: '/informacoes-de-saude' },
  { label: 'Documentação', href: '/documentacao' },
  { label: 'Notícias', href: '/noticias' },
  { label: 'Links Úteis', href: '/links-uteis' },
  { label: 'Administração', href: '/administracao' },
];

export function PortalHeader() {
  return (
    <header className="bg-navy text-white">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-5 px-5 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3 font-semibold" aria-label="Portal de Saúde — página inicial">
          <span className="grid h-11 w-11 place-items-center bg-turquoise text-navy"><Plus className="h-7 w-7" strokeWidth={3} aria-hidden="true" /></span>
          <span className="flex flex-col">
            <span className="text-base leading-tight sm:text-lg">Portal de Saúde</span>
            <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white/75">Informação e acesso</span>
          </span>
        </Link>
        <nav aria-label="Navegação principal" className="ml-auto hidden min-h-16 items-center gap-4 lg:flex xl:gap-6">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="whitespace-nowrap py-5 text-xs font-semibold text-white/90 transition-colors hover:text-turquoise xl:text-sm">{item.label}</Link>)}
          <Link href="/acesso" className="inline-flex min-h-10 items-center gap-2 bg-turquoise px-4 text-sm font-bold text-navy transition-colors hover:bg-turquoise/90">
            <LogIn className="h-4 w-4" aria-hidden="true" />
            Acesso
          </Link>
        </nav>
        <details className="group ml-auto lg:hidden">
          <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 text-sm font-semibold uppercase tracking-wider text-white/80 [&::-webkit-details-marker]:hidden">
            <span className="hidden sm:inline">Menu principal</span>
            <span className="grid h-11 w-11 place-items-center text-white" aria-label="Alternar menu principal"><Menu className="h-7 w-7" aria-hidden="true" /></span>
          </summary>
          <nav aria-label="Navegação móvel" className="absolute left-0 right-0 z-20 border-t border-white/15 bg-navy px-5 pb-4 md:px-8">
            {navigation.map((item) => <Link key={item.href} href={item.href} className="block py-3 text-base font-semibold text-white/90 transition-colors hover:text-turquoise">{item.label}</Link>)}
            <Link href="/acesso" className="mt-2 inline-flex min-h-11 items-center gap-2 bg-turquoise px-4 text-sm font-bold text-navy">
              <LogIn className="h-4 w-4" aria-hidden="true" />
              Acesso
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
