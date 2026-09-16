import { PortalFooter } from '@/components/layout/portal-footer';
import { PortalHeader } from '@/components/layout/portal-header';

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
              O conteúdo será ampliado progressivamente e organizado por assunto para tornar a navegação clara em celulares, tablets e computadores. As áreas disponíveis podem ser acessadas pelo menu principal localizado no topo da página.
            </p>
          </div>

          <aside className="mt-12 border-l-4 border-cyan-600 bg-secondary px-6 py-5" aria-label="Aviso sobre o conteúdo">
            <p className="font-semibold text-foreground">Conteúdo em desenvolvimento</p>
            <p className="mt-2 leading-7 text-muted-foreground">
              As informações oficiais, endereços e documentos serão incluídos após validação institucional. Os conteúdos atuais têm finalidade demonstrativa.
            </p>
          </aside>
        </article>
      </main>
      <PortalFooter />
    </div>
  );
}
