# Análise do prompt-mestre

## Objetivo

Construir um portal institucional de conhecimento, serviços e recursos. O produto não será apenas um catálogo de PDFs e não copiará identidade visual, conteúdo ou estrutura página a página de portais usados como referência conceitual.

## Primeira entrega definida

- Monorepo com `frontend`, `backend` e `docs`.
- Backend com `GET /api/v1/categories`, `GET /api/v1/resources` e `GET /api/v1/highlights`.
- Dados locais fictícios e explicitamente identificados como demonstração.
- Frontend com estrutura base, Header, Navigation, Footer e Home consumindo a API.
- README com instalação, execução e estrutura do projeto.

## Restrições desta fase

Não implementar painel administrativo, autenticação, PostgreSQL, Prisma, busca completa, upload, permissões, dashboards ou analytics.

## Decisões arquiteturais obrigatórias

1. O backend seguirá `Route -> Controller -> Service -> Repository`.
2. Somente repositories conhecerão a persistência em JSON.
3. Services e controllers dependerão de contratos, permitindo trocar JSON por PostgreSQL/Prisma futuramente.
4. O frontend seguirá `Página -> Hook/Feature -> API Client`; componentes visuais não farão `fetch` diretamente.
5. `Resource` será a entidade genérica de conteúdo, com tipos extensíveis e status editorial.
6. Categorias serão hierárquicas por `parentId`; navegação continuará sendo um conceito separado.
7. Dados persistidos terão IDs e timestamps quando aplicável.
8. Erros da API serão consistentes e tratados centralmente.
9. Páginas dependentes da API contemplarão loading, success, empty e error.
10. O design será mobile-first, institucional, acessível (WCAG AA), sóbrio e baseado em tokens centralizados.

## Critérios de qualidade

- TypeScript sem uso injustificado de `any`.
- Responsabilidade única e nomes claros.
- Reutilização sem abstrações prematuras.
- Nenhuma informação institucional fictícia apresentada como real.
- Verificação de tipos, imports, rotas, build e lint após mudanças relevantes.
- Registro de decisões estruturais em `docs/decisoes-arquitetura.md` quando começarem a ser tomadas.

## Sequência recomendada para a implementação

1. Configurar os workspaces e scripts do monorepo.
2. Definir modelos e contratos mínimos do backend.
3. Criar os repositories JSON e os três fluxos completos da API.
4. Criar o cliente HTTP e os hooks/features no frontend.
5. Implementar o layout e a Home com estados de carregamento, vazio e erro.
6. Validar comunicação, responsividade, acessibilidade e builds.

