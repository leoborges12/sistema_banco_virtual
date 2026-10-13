import { ArrowRight, FileText, FlaskConical, MapPinned, Newspaper, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PortalFooter } from '@/components/layout/portal-footer';
import { PortalHeader } from '@/components/layout/portal-header';
import { portalAreas } from '@/data/portal-areas';

const areaIcons = {
  map: MapPinned,
  exam: FlaskConical,
  health: Stethoscope,
  document: FileText,
  news: Newspaper,
};

const featuredNews = [
  { title: 'Campanha de vacinação contra a gripe', excerpt: 'Vacinação em todas as ESFs entre 10 e 20 de abril. Procure a sua unidade de referência.', date: '10/04/2026', image: '/images/news/vacina.jpg' },
  { title: 'Nova rotina de entrega de medicamentos', excerpt: 'A partir da próxima semana, medicamentos de uso contínuo terão retirada agendada.', date: '05/04/2026', image: '/images/news/medicamento.jpg' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section aria-label="Cabeçalho do Portal de Saúde" className="relative h-[clamp(180px,28vw,320px)] overflow-hidden bg-slate-900">
        <Image src="/images/cabecalho.jpg" alt="Fachada do Theatro Prezewodowski, em Itaqui" fill priority sizes="100vw" className="header-photo object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-slate-950/10" />
        <div className="header-copy absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-8 text-white md:px-8 md:pb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">Itaqui, Rio Grande do Sul</p>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl">Portal de Saúde</h1>
        </div>
      </section>
      <PortalHeader showBrand={false} />
      <main>
        <section aria-labelledby="quick-access-title" className="border-t border-border bg-white">
          <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
            <div>
              <h2 id="quick-access-title" className="text-2xl font-semibold tracking-tight">Acessos rápidos</h2>
              <p className="mt-2 text-muted-foreground">Serviços e informações de saúde em um só lugar.</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {portalAreas.map((area) => {
                const Icon = areaIcons[area.icon];
                return (
                  <Link key={area.slug} href={`/${area.slug}`} className="group flex min-h-24 items-center gap-4 border-l-4 border-cyan-700 bg-slate-50 px-4 py-4 text-slate-900 transition-colors hover:bg-cyan-50 focus-visible:bg-cyan-50">
                    <span className="grid h-11 w-11 shrink-0 place-items-center bg-cyan-100 text-cyan-800">
                      <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold leading-5">{area.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section aria-label="Informações do portal e notícias" className="border-t border-border bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:px-8 md:py-14 lg:grid-cols-[0.9fr_1.1fr]">
            <article>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-800">Portal de Saúde</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Informação e acesso para cuidar melhor.</h2>
              <p className="mt-5 leading-7 text-muted-foreground">Um ponto de consulta para encontrar serviços de saúde, orientações, documentos e comunicados importantes para a comunidade de Itaqui.</p>
              <p className="mt-4 leading-7 text-muted-foreground">O conteúdo está sendo organizado e será ampliado conforme as informações forem validadas pela instituição responsável.</p>
              <Link href="/unidades-de-saude" className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-800 underline decoration-2 underline-offset-4">Conheça as unidades de saúde <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <aside className="mt-8 border-l-4 border-amber-500 bg-white px-5 py-4" aria-label="Aviso sobre o conteúdo">
                <p className="font-semibold">Conteúdo em desenvolvimento</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Endereços e informações oficiais serão publicados após validação institucional.</p>
              </aside>
            </article>

            <section aria-labelledby="featured-news-title">
              <div className="flex items-end justify-between gap-4 border-b border-border pb-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-800">Fique por dentro</p>
                  <h2 id="featured-news-title" className="mt-2 text-2xl font-semibold tracking-tight">Notícias principais</h2>
                </div>
                <Link href="/noticias" className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-cyan-800 underline underline-offset-4">Todas <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
              <div className="mt-5 divide-y divide-border">
                {featuredNews.map((news) => (
                  <article key={news.title} className="grid gap-4 py-5 sm:grid-cols-[8rem_1fr]">
                    <Image src={news.image} alt="" width={160} height={120} className="aspect-[4/3] h-full max-h-32 w-full object-cover" />
                    <div>
                      <time className="text-xs font-medium text-muted-foreground">{news.date}</time>
                      <h3 className="mt-1 text-lg font-semibold leading-6">{news.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{news.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <PortalFooter />
    </div>
  );
}
