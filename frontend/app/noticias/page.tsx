import NewsCarousel from '@/components/ui/news-carousel';
import { PageHero } from '@/components/layout/page-hero';
import { PortalHeader } from '@/components/layout/portal-header';
import { PortalFooter } from '@/components/layout/portal-footer';

const news = [
  { id: 'n1', title: 'Campanha de vacinação contra a gripe', excerpt: 'Vacinação em todas as ESFs entre 10 e 20 de abril. Procure a sua unidade de referência.', date: '10/04/2026', image: '/images/news/vacina.jpg', category: 'Vacinação' },
  { id: 'n2', title: 'Nova rotina de entrega de medicamentos', excerpt: 'A partir da próxima semana, medicamentos de uso contínuo terão retirada agendada.', date: '05/04/2026', image: '/images/news/medicamento.jpg', category: 'Medicamentos' },
  { id: 'n3', title: 'Atenção: cuidados com o calor', excerpt: 'Dicas para proteger crianças e idosos durante ondas de calor.', date: '01/04/2026', image: '/images/news/calor.jpg', category: 'Prevenção' },
];

export default function NoticiasPage() {
  return <div className="flex min-h-screen flex-col"><PortalHeader /><main className="flex-1"><PageHero eyebrow="Fique por dentro" title="Notícias e comunicados" description="Acompanhe atualizações, campanhas e avisos sobre saúde pública." /><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><section aria-label="Notícias em destaque"><NewsCarousel items={news} /></section><section className="mt-14"><div><p className="eyebrow text-teal">Todas as publicações</p><h2 className="mt-2 text-3xl font-bold">Informação atualizada</h2></div><div className="mt-8 grid gap-5 md:grid-cols-3">{news.map((item, index) => <article key={item.id} className="card-lift overflow-hidden"><div className={`h-1.5 ${index === 0 ? 'bg-coral' : index === 1 ? 'bg-teal' : 'bg-amber'}`} /><div className="p-6"><div className="flex items-center justify-between gap-3 text-xs font-semibold"><span className="rounded-full bg-teal-soft px-3 py-1 text-teal">{item.category}</span><time className="text-muted-foreground">{item.date}</time></div><h3 className="mt-5 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.excerpt}</p></div></article>)}</div></section></div></main><PortalFooter /></div>;
}
