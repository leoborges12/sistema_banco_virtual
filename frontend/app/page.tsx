import { FileText, FlaskConical, MapPinned, Newspaper, Stethoscope } from 'lucide-react';
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortalHeader />
      <main>
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Portal de Saúde</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Informação, orientação e acesso aos serviços de saúde.
            </h1>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Sobre o portal</h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              O Portal de Saúde foi criado para reunir, organizar e facilitar o acesso a informações, serviços e recursos relacionados ao cuidado em saúde. Seu objetivo é oferecer um ponto de consulta simples e confiável para que a população encontre orientações importantes sem precisar percorrer diferentes canais.
            </p>

            <p>
              Neste ambiente será possível consultar onde encontrar medicamentos, identificar a equipe de Saúde da Família de referência a partir do endereço informado e localizar unidades responsáveis pela realização de exames. O portal também reunirá informações educativas sobre doenças, prevenção e cuidados recomendados.
            </p>

            <p>
              A área de documentação será destinada à publicação de guias, formulários, materiais de orientação e outros conteúdos de interesse público. Comunicados e notícias poderão ser disponibilizados para manter a comunidade informada sobre atualizações relevantes nos serviços de saúde.
            </p>

            <p>
              Os materiais publicados poderão reunir textos, documentos, imagens, vídeos e links para serviços externos. Cada conteúdo deverá informar sua origem e permanecer sob a responsabilidade da instituição ou do autor que o produziu, respeitando os critérios de publicação e os direitos aplicáveis.
            </p>

            <p>
              O conteúdo será ampliado progressivamente e organizado por assunto para tornar a navegação clara em celulares, tablets e computadores. As áreas disponíveis podem ser acessadas pelo menu principal localizado no topo da página.
            </p>

            <p>
              Sugestões da comunidade poderão contribuir para a evolução do portal. Um canal oficial de participação será divulgado após a definição da instituição responsável e a validação das informações de contato.
            </p>
          </div>

          <aside className="mt-12 border-l-4 border-cyan-600 bg-secondary px-6 py-5" aria-label="Aviso sobre o conteúdo">
            <p className="font-semibold text-foreground">Conteúdo em desenvolvimento</p>
            <p className="mt-2 leading-7 text-muted-foreground">
              As informações oficiais, endereços e documentos serão incluídos após validação institucional. Os conteúdos atuais têm finalidade demonstrativa.
            </p>
          </aside>
        </article>

        <section aria-labelledby="quick-access-title" className="border-t border-border bg-white">
          <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
            <h2 id="quick-access-title" className="text-3xl font-semibold tracking-tight">Acessos rápidos</h2>
            <p className="mt-3 text-lg text-muted-foreground">Escolha uma área para consultar serviços e informações.</p>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {portalAreas.map((area) => {
                const Icon = areaIcons[area.icon];
                return (
                  <Link key={area.slug} href={`/${area.slug}`} className="group flex min-h-24 items-center gap-5 bg-cyan-700 px-5 py-4 text-white transition-colors hover:bg-cyan-800 focus-visible:bg-cyan-800">
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-cyan-800 shadow-sm">
                      <Icon className="h-8 w-8" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="text-lg font-semibold leading-6">{area.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section aria-labelledby="highlights-title" className="bg-secondary">
          <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
            <h2 id="highlights-title" className="text-3xl font-semibold tracking-tight">Destaques</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {portalAreas.map((area) => {
                const Icon = areaIcons[area.icon];
                return (
                  <article key={area.slug} className="flex min-h-72 flex-col border border-border bg-white p-6">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-cyan-100 text-cyan-800">
                      <Icon className="h-10 w-10" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold italic tracking-tight">{area.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{area.description}</p>
                    <Link href={`/${area.slug}`} className="mt-auto pt-6 font-semibold text-primary underline decoration-2 underline-offset-4">Acessar {area.title}</Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <PortalFooter />
    </div>
  );
}
