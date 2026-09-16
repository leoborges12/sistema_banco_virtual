import { Menu, Plus } from 'lucide-react';
import Link from 'next/link';

export function PortalHeader() {
  return <header className="border-b border-border bg-background"><div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 md:px-8">
    <Link href="/" className="flex items-center gap-3 font-semibold" aria-label="Portal de Saúde — página inicial"><span className="grid h-10 w-10 place-items-center bg-primary text-primary-foreground"><Plus className="h-6 w-6" strokeWidth={3} /></span><span className="leading-tight"><span className="block text-lg">Portal de Saúde</span><span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">Informação e acesso</span></span></Link>
    <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex"><Link className="nav-link" href="/mapeamento">Mapeamento</Link><Link className="nav-link" href="/locais-de-exames">Exames</Link><Link className="nav-link" href="/informacoes-de-saude">Saúde</Link><Link className="nav-link" href="/documentacao">Documentação</Link><Link className="nav-link" href="/noticias">Notícias</Link></nav>
    <button type="button" className="grid h-11 w-11 place-items-center border border-border lg:hidden" aria-label="Abrir menu"><Menu className="h-5 w-5" /></button>
  </div></header>;
}
