# Sistema Banco Virtual

Portal institucional de conhecimento, serviços e recursos, em desenvolvimento incremental.

## Estado atual

O repositório contém, inicialmente, a fundação documental e as decisões que orientarão a primeira entrega. A implementação será feita progressivamente, sem antecipar funcionalidades ainda não solicitadas.

## Stack planejada

- Frontend: React, TypeScript, Vite, Tailwind CSS e React Router.
- Backend: Node.js, Express e TypeScript.
- Persistência inicial: arquivos JSON acessados exclusivamente por repositories.
- Persistência futura: PostgreSQL e Prisma, preservando os contratos das demais camadas.

## Arquitetura planejada

```text
frontend: Página -> Hook/Feature -> API Client -> Backend
backend:  Route -> Controller -> Service -> Repository -> JSON
```

Consulte [docs/analise-prompt-mestre.md](docs/analise-prompt-mestre.md) para o escopo e as regras consolidadas.

## Próxima entrega

A base do monorepo será criada com `frontend`, `backend` e `docs`, incluindo os três endpoints iniciais e uma Home que consome a API.

