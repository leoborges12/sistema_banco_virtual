import Link from 'next/link';

export function PortalFooter() {
  return <footer className="border-t border-white/15 bg-navy text-white/90"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_auto] md:px-8"><div><p className="text-lg font-semibold text-white">Portal de Saúde</p><p className="mt-3 max-w-xl text-sm leading-6 text-white/75">Portal institucional demonstrativo para organização de informações, serviços e recursos de saúde.</p><div className="mt-5 border-l-2 border-turquoise pl-4 text-sm leading-6 text-white/75"><p>Instituição responsável: a definir</p><p>Endereço e contato: aguardando validação institucional</p></div></div><Link href="/documentacao" className="self-end text-sm font-semibold underline underline-offset-4">Acessar documentação</Link></div></footer>;
}
