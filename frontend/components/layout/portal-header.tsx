import { LogIn, Menu } from 'lucide-react';
import Link from 'next/link';
import { PortalLogo } from './portal-logo';

const navigation = [
  { label: 'Início', href: '/' },
  { label: 'Unidades', href: '/unidades-de-saude' },
  { label: 'Informações', href: '/informacoes-de-saude' },
  { label: 'Documentação', href: '/documentacao' },
  { label: 'Notícias', href: '/noticias' },
  { label: 'Links Úteis', href: '/links-uteis' },
  { label: 'Administração', href: '/administracao' },
];

export function PortalHeader() {
  return <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md"><div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8"><PortalLogo /><nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">{navigation.map((item) => <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-ink xl:px-3.5">{item.label}</Link>)}</nav><div className="flex items-center gap-2"><Link href="/acesso" className="hidden items-center gap-2 rounded-full bg-coral px-4 py-2.5 text-sm font-bold text-white shadow-[var(--shadow-coral)] transition-transform hover:-translate-y-0.5 sm:inline-flex"><LogIn className="h-4 w-4" /> Acessar</Link><details className="group relative lg:hidden"><summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full text-ink hover:bg-muted [&::-webkit-details-marker]:hidden" aria-label="Abrir menu"><Menu className="h-5 w-5" /></summary><nav aria-label="Navegação móvel" className="absolute right-0 top-14 w-72 rounded-2xl border border-border bg-card p-3 shadow-lift">{navigation.map((item) => <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 font-semibold hover:bg-teal-soft">{item.label}</Link>)}<Link href="/acesso" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-coral px-4 py-3 font-bold text-white"><LogIn className="h-4 w-4" /> Acessar</Link></nav></details></div></div></header>;
}
