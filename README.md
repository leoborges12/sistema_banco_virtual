# Sistema Banco Virtual

Portal institucional de saúde para organização e acesso a informações, serviços, documentos e recursos de interesse público.

O projeto está sendo desenvolvido de forma incremental. A prioridade atual é validar a arquitetura de informação, a identidade visual e a navegação antes da integração com dados oficiais.

## Referência conceitual

A organização do conteúdo utiliza a BVAPS — Biblioteca Virtual da Atenção Primária à Saúde de Porto Alegre — como referência conceitual.

O projeto possui identidade, textos, componentes e estrutura próprios. Não são reutilizados logotipos, contatos, imagens ou informações institucionais da BVAPS.

## Estado atual

O frontend já possui:

- página inicial institucional;
- cabeçalho, navegação e rodapé reutilizáveis;
- texto de apresentação do portal;
- acessos rápidos e destaques;
- páginas independentes para as cinco áreas principais;
- duas páginas preparadas dentro da área de Mapeamento;
- layout responsivo para celulares, tablets e computadores;
- conteúdo demonstrativo claramente identificado;
- estrutura preparada para receber dados oficiais futuramente.

O backend, a API REST e a persistência em JSON ainda não foram implementados.

## Áreas do portal

1. **Mapeamento**
   - Onde encontrar medicamentos.
   - Localizar a ESF pelo endereço.
2. **Locais de exames**
3. **Informações sobre doenças e exames preventivos**
4. **Documentação**
5. **Notícias**

## Rotas disponíveis

| Rota | Finalidade |
| --- | --- |
| `/` | Página inicial e apresentação institucional |
| `/mapeamento` | Área de serviços de localização |
| `/mapeamento/medicamentos` | Estrutura para consulta de locais de retirada de medicamentos |
| `/mapeamento/esf` | Estrutura para localização da ESF pelo endereço |
| `/locais-de-exames` | Informações sobre exames e locais de atendimento |
| `/informacoes-de-saude` | Informações sobre doenças e prevenção |
| `/documentacao` | Documentos, guias e formulários |
| `/noticias` | Notícias, comunicados e atualizações |

As páginas de Mapeamento apresentam o fluxo previsto, mas ainda não realizam buscas. Elas aguardam definição e validação das bases oficiais de endereços, unidades, medicamentos e áreas de atendimento.

## Tecnologias atuais

- React 19;
- TypeScript;
- Vinext;
- Vite;
- Tailwind CSS;
- Lucide React para ícones;
- componentes Shadcn disponíveis para evolução da interface.

Planejamento futuro, ainda não implementado:

- backend Node.js, Express e TypeScript;
- API REST com prefixo `/api/v1`;
- persistência inicial em arquivos JSON por meio de repositories;
- PostgreSQL e Prisma em uma etapa posterior.

## Pré-requisitos

- Node.js 22.13 ou superior;
- npm.

## Instalação

Na raiz do repositório:

```bash
cd frontend
npm install
```

## Executar em desenvolvimento

```bash
cd frontend
npm run dev
```

O endereço local padrão é:

```text
http://localhost:3000
```

## Gerar a versão de produção

```bash
cd frontend
npm run build
```

## Publicação na Vercel

Ao importar o repositório na Vercel, configure:

- **Root Directory:** `frontend`
- **Framework Preset:** Next.js
- **Install Command:** `npm install`
- **Build Command:** `npm run build`

O arquivo `frontend/vercel.json` mantém o preset e os comandos de build versionados. O frontend usa o runtime oficial do Next.js para preservar as rotas e os componentes interativos no ambiente da Vercel.

## Estrutura principal

```text
sistema_banco_virtual/
├── docs/
│   └── analise-prompt-mestre.md
├── frontend/
│   ├── app/
│   │   ├── [slug]/
│   │   ├── mapeamento/
│   │   │   ├── esf/
│   │   │   └── medicamentos/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   │   └── portal-areas.ts
│   └── package.json
├── .gitignore
└── README.md
```

## Organização do frontend

- `app/`: páginas e rotas.
- `components/layout/`: elementos compartilhados de estrutura.
- `components/sections/`: seções reutilizáveis de páginas.
- `components/ui/`: componentes básicos de interface.
- `data/`: configuração centralizada das áreas e conteúdos demonstrativos.

Os dados das áreas não ficam duplicados dentro das páginas. A configuração compartilhada está concentrada em `frontend/data/portal-areas.ts`.

## Princípios do projeto

- desenvolvimento modular e incremental;
- componentes com responsabilidades claras;
- conteúdo separado da apresentação sempre que fizer sentido;
- nenhuma informação fictícia apresentada como oficial;
- acessibilidade e responsividade como requisitos permanentes;
- ausência de abstrações prematuras;
- preparação para crescimento sem implementar antecipadamente funcionalidades não solicitadas.

## Próximas etapas previstas

- definir a instituição responsável, identidade definitiva e contatos oficiais;
- definir as fontes de dados para medicamentos, ESF e exames;
- criar o backend em camadas `Route → Controller → Service → Repository`;
- disponibilizar os primeiros endpoints REST;
- integrar o frontend à API;
- implementar estados de carregamento, vazio e erro para dados remotos;
- incluir documentos, notícias e informações de saúde validados.

## Documentação

As regras arquiteturais consolidadas estão em [docs/analise-prompt-mestre.md](docs/analise-prompt-mestre.md).

## Aviso

O projeto está em desenvolvimento. Endereços, contatos, unidades, medicamentos, documentos e demais informações oficiais somente serão publicados após validação da instituição responsável.
