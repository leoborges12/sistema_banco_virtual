# Migração visual — Saúde em Cena

## Resumo

O frontend atual foi preservado em Next.js e recebeu a identidade visual do projeto de referência Saúde em Cena. A migração abrange tokens globais, tipografia, cabeçalho, rodapé, página inicial, páginas internas, notícias, localização, acesso e painel administrativo.

O projeto de referência em `teste/saude-em-cena-main` foi utilizado somente para estudo. Nenhum arquivo dessa pasta foi modificado ou incorporado diretamente ao sistema atual.

## Tecnologias identificadas

### Sistema atual

- Next.js 16 com App Router.
- React 19 e TypeScript.
- Tailwind CSS 4.
- Lucide React.
- Componentes shadcn/Base UI já instalados.
- Dados institucionais locais em `data/portal-areas.ts`.
- Persistência demonstrativa do painel administrativo em `localStorage`.

### Referência Saúde em Cena

- React 19, TanStack Start e TanStack Router.
- Tailwind CSS 4.
- Radix/shadcn, Lucide React e Sonner.
- Design system baseado em Sora, Manrope, azul-petróleo, teal, coral, âmbar e sky.

## Componentes de referência estudados

- `src/styles.css`: tokens, tipografia, sombras, gradiente e animações.
- `src/routes/index.tsx`: composição da home.
- `src/routes/acesso.tsx`: composição dividida da área de acesso.
- `src/components/site/SiteHeader.tsx`: cabeçalho e menu responsivo.
- `src/components/site/SiteFooter.tsx`: rodapé institucional.
- `src/components/site/Logo.tsx`: símbolo e assinatura visual.
- `src/components/site/ComingSoon.tsx`: padrão visual interno, sem copiar estados provisórios.

## Inventário funcional preservado

| Rota | Função original | Origem dos dados/ações | Preservação |
| --- | --- | --- | --- |
| `/` | Apresentação, acessos rápidos e notícias | `portalAreas` e notícias locais | Links reais preservados; busca adicionada com destinos existentes |
| `/unidades-de-saude` | Lista de serviços e localização | `portalAreas` | Conteúdo e links preservados |
| `/informacoes-de-saude` | Informações e materiais educativos | `portalAreas` | Conteúdo preservado |
| `/documentacao` | Documentos, guias e formulários | `portalAreas` | Conteúdo preservado |
| `/links-uteis` | Links externos oficiais | `portalAreas` | URLs externas e abertura em nova aba preservadas |
| `/noticias` | Carrossel e cards de notícias | Dados locais existentes | Rotação automática e controles preservados |
| `/unidades-de-saude/esf` | Orientações e mapa incorporado | Google Maps embed | `iframe`, carregamento e redirecionamentos preservados |
| `/mapeamento` e rotas legadas | Redirecionamento | Next.js `redirect` | Sem alteração |
| `/sobre-o-portal` | Apresentação institucional | Conteúdo local | Conteúdo preservado |
| `/acesso` | Informação sobre acesso futuro | Conteúdo local | Não foi criado login falso nem integração inexistente |
| `/administracao` | Login demonstrativo e CRUD de notícias | Estado React e `localStorage` | Validação, criação, edição, exclusão e persistência preservadas |

## Matriz de correspondência visual

| Área atual | Composição aplicada | Componentes | Risco e teste |
| --- | --- | --- | --- |
| Estrutura global | Tokens Saúde em Cena, Sora/Manrope, superfícies e sombras | `globals.css` | Médio; lint e build |
| Cabeçalho | Fundo claro translúcido, logo, navegação e botão coral | `PortalHeader`, `PortalLogo` | Médio; links desktop/mobile |
| Rodapé | Azul-petróleo, faixa de quatro cores e colunas | `PortalFooter`, `PortalLogo` | Baixo; links e responsividade |
| Home | Hero em gradiente, imagem, busca, prateleira, cards e notícias | `Home`, `PortalSearch` | Médio; busca e navegação |
| Páginas internas | Hero escuro e cards coloridos | `PageHero`, rota dinâmica | Baixo; rotas e links externos |
| Mapeamento | Passos em cards e mapa em superfície elevada | `MappingServicePage` | Médio; carregamento do iframe |
| Notícias | Hero, carrossel elevado e cards editoriais | `NewsCarousel` | Médio; rotação e controles |
| Acesso | Layout dividido com imagem institucional | rota `/acesso` | Baixo; nenhum fluxo real removido |
| Administração | Painel com coral, teal, cards e formulários arredondados | rota `/administracao` | Alto; testar CRUD e validação |

## Componentes criados ou modificados

### Criados

- `components/layout/portal-logo.tsx`
- `components/layout/page-hero.tsx`
- `components/sections/portal-search.tsx`

### Modificados

- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `app/[slug]/page.tsx`
- `app/noticias/page.tsx`
- `app/acesso/page.tsx`
- `app/sobre-o-portal/page.tsx`
- `app/administracao/page.tsx`
- `components/layout/portal-header.tsx`
- `components/layout/portal-footer.tsx`
- `components/sections/mapping-service-page.tsx`
- `components/ui/news-carousel.tsx`

## Decisões de compatibilidade

- A aplicação permaneceu em Next.js; TanStack Router não foi migrado.
- O `package.json`, o roteamento, as URLs e os arquivos de configuração foram preservados.
- A foto local `public/images/cabecalho.jpg` foi reutilizada porque o JPEG da referência não está disponível.
- As fontes Sora e Manrope são carregadas pelo CSS global, com fallbacks de sistema.
- Textos de contato não confirmados permanecem claramente identificados como pendentes.
- O acesso público não recebeu autenticação simulada.
- O painel administrativo manteve seu caráter demonstrativo e a persistência exclusivamente local.

## Funcionalidades preservadas

- Navegação pública desktop e mobile.
- Rotas e redirecionamentos legados.
- Links externos oficiais.
- Mapa incorporado.
- Carrossel automático e controles manuais.
- CRUD administrativo completo existente.
- Validação dos formulários administrativos.
- Confirmação de exclusão.
- Persistência em `localStorage`.
- Preferência por movimento reduzido.

## Validação

### Estado inicial

- `npm run lint`: aprovado.
- `npm run build`: aprovado.

### Estado após migração

- `npm run lint`: aprovado, sem erros.
- `npm run build`: aprovado, incluindo verificação TypeScript e geração das 15 páginas estáticas.
- `git diff --check`: aprovado; apenas avisos locais de conversão LF/CRLF foram emitidos.
- Preview local: servidor Next.js iniciado com sucesso em `http://localhost:3000`.
- Validação visual automatizada: não executada porque o host de acesso do navegador estava indisponível na sessão.

## Limitações

- Não há backend, API ou banco de dados no frontend atual para notícias e administração.
- O painel usa dados simulados e `localStorage`, conforme sua implementação original.
- O mapa utiliza um embed genérico de Itaqui; os pontos oficiais ainda dependem de base validada.
- Sora e Manrope dependem do carregamento do Google Fonts no navegador; os fallbacks mantêm a interface legível sem rede.
- Contatos e dados institucionais ainda aguardam validação.
- A validação visual automatizada em navegador não foi realizada nesta etapa; lint e build cobrem a validação técnica disponível.

## Melhorias futuras

- Conectar notícias e administração a uma API real.
- Integrar autenticação institucional e autorização por perfil.
- Substituir o mapa genérico por base geográfica oficial.
- Adicionar busca indexada com resultados dedicados.
- Acrescentar testes automatizados dos fluxos administrativos.
- Hospedar fontes localmente após validação de licença e ativos.
