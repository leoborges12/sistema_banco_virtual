import Link from 'next/link';

function TheaterMark({ className }: { className?: string }) {
  return <svg viewBox="0 0 104 112" className={className} aria-hidden="true" fill="none"><path d="M4 46 L52 8 L100 46 Z" fill="currentColor" /><circle cx="52" cy="32" r="7" fill="var(--coral)" /><rect x="4" y="50" width="96" height="12" rx="2" fill="currentColor" /><rect x="12" y="66" width="18" height="28" rx="1.5" fill="var(--teal)" /><rect x="43" y="66" width="18" height="28" rx="1.5" fill="var(--teal)" /><rect x="74" y="66" width="18" height="28" rx="1.5" fill="var(--teal)" /><rect x="49" y="70" width="6" height="20" rx="1" fill="currentColor" /><rect x="44" y="77" width="16" height="6" rx="1" fill="currentColor" /><rect x="8" y="94" width="88" height="7" rx="1.5" fill="currentColor" /><rect x="2" y="101" width="100" height="9" rx="2" fill="currentColor" /></svg>;
}

export function PortalLogo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`group flex items-center gap-3 ${light ? 'text-white' : 'text-ink'}`} aria-label="Portal de Saúde de Itaqui — página inicial"><TheaterMark className="h-11 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105" /><span className="leading-tight"><span className="block font-heading text-base font-bold">Portal de Saúde</span><span className={`mt-0.5 block text-[11px] font-bold uppercase tracking-[0.14em] ${light ? 'text-ink-muted' : 'text-muted-foreground'}`}>Itaqui · RS</span></span></Link>;
}
