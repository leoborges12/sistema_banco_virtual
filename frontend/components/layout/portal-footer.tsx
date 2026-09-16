import Link from 'next/link';

export function PortalFooter() {
  return <footer className="border-t border-border bg-slate-950 text-slate-200"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-9 md:flex-row md:items-end md:justify-between md:px-8"><div><p className="text-lg font-semibold text-white">Portal de Saúde</p><p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">Ambiente demonstrativo. Informações oficiais e contatos serão adicionados após validação institucional.</p></div><Link href="/documentacao" className="text-sm font-semibold underline underline-offset-4">Acessar documentação</Link></div></footer>;
}
