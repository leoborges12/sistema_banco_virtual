import NewsCarousel from '@/components/ui/news-carousel';
import { PortalHeader } from '@/components/layout/portal-header';
import { PortalFooter } from '@/components/layout/portal-footer';

const fakeNews = [
  { id: 'n1', title: 'Campanha de vacinação contra a gripe', excerpt: 'Vacinação em todas as ESFs entre 10 e 20 de abril. Procure a sua unidade de referência.', date: '10/04/2026', image: '/images/news/vacina.jpg' },
  { id: 'n2', title: 'Nova rotina de entrega de medicamentos', excerpt: 'A partir da próxima semana, medicamentos de uso contíno terão retirada agendada.', date: '05/04/2026', image: '/images/news/medicamento.jpg' },
  { id: 'n3', title: 'Atenção: cuidados com o calor', excerpt: 'Dicas para proteger crianças e idosos durante ondas de calor.', date: '01/04/2026', image: '/images/news/calor.jpg' },
];

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortalHeader />
      <main className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <h1 className="text-4xl font-semibold">Notícias</h1>
        <p className="mt-3 text-muted-foreground">Últimas notícias, comunicados e avisos sobre saúde pública.</p>

        <section className="mt-8">
          <NewsCarousel items={fakeNews} />
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {fakeNews.map((n) => (
            <article key={n.id} className="rounded-md border bg-white p-5">
              <div className="text-xs text-muted-foreground">{n.date}</div>
              <h3 className="mt-2 text-lg font-semibold">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
            </article>
          ))}
        </section>
      </main>
      <PortalFooter />
    </div>
  );
}
