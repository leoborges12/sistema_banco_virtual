'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const destinations = [
  { terms: ['unidade', 'esf', 'endereço', 'mapa'], href: '/unidades-de-saude' },
  { terms: ['exame', 'preventivo', 'doença', 'saúde'], href: '/informacoes-de-saude' },
  { terms: ['documento', 'formulário', 'manual', 'norma'], href: '/documentacao' },
  { terms: ['notícia', 'campanha', 'vacina', 'aviso'], href: '/noticias' },
  { terms: ['link', 'ministério', 'prefeitura'], href: '/links-uteis' },
];
type SearchSubmitEvent = Parameters<NonNullable<React.ComponentProps<'form'>['onSubmit']>>[0];

export function PortalSearch() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  function search(event: SearchSubmitEvent) {
    event.preventDefault();
    const normalized = query.trim().toLocaleLowerCase('pt-BR');
    if (!normalized) { setMessage('Digite o que você procura.'); return; }
    const match = destinations.find((item) => item.terms.some((term) => normalized.includes(term)));
    if (match) router.push(match.href);
    else setMessage('Nenhuma área correspondente. Tente “unidade”, “vacina” ou “documentos”.');
  }

  return <div><form onSubmit={search} className="mt-8 flex max-w-xl items-center gap-2 rounded-full bg-white p-1.5 shadow-lift"><Search className="ml-4 h-5 w-5 shrink-0 text-muted-foreground" /><input value={query} onChange={(event) => { setQuery(event.target.value); setMessage(''); }} type="search" aria-label="Buscar no portal" placeholder="Buscar serviço ou informação…" className="h-11 min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground" /><button type="submit" className="shrink-0 rounded-full bg-coral px-5 py-3 text-sm font-bold text-white">Buscar</button></form>{message && <output className="mt-3 block max-w-xl text-sm text-amber">{message}</output>}</div>;
}
