# M-SICA

Plataforma para catalogar discografias, acompanhar o que você ouve e avaliar álbuns — inspirada na experiência do Letterboxd, mas pensada para música.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [PostgreSQL](https://www.postgresql.org) + [Prisma ORM](https://www.prisma.io)
- [Auth.js](https://authjs.dev)
- Deploy na [Vercel](https://vercel.com)

## Estrutura do projeto

```
/app          rotas e páginas (App Router)
/components   componentes de UI reutilizáveis e providers
/lib          integrações e helpers compartilhados (ex: cliente Prisma)
/services     camada de acesso a dados e integrações externas (MusicBrainz, Spotify, Cover Art Archive)
/hooks        hooks React reutilizáveis
/types        tipos e contratos compartilhados
/prisma       schema e migrations do banco de dados
/utils        funções utilitárias puras
/public       arquivos estáticos
```

## Getting started

```bash
cp .env.example .env   # preencha DATABASE_URL com sua instância PostgreSQL
npm install             # roda "prisma generate" automaticamente (postinstall)
npm run db:migrate      # aplica as migrations no banco
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Demais variáveis do `.env.example` (Auth.js, Spotify, MusicBrainz) serão preenchidas conforme as integrações forem habilitadas.

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — inicia o build de produção
- `npm run lint` — checagem de lint
- `npm run db:migrate` — aplica migrations do Prisma no banco de dados
- `npm run db:studio` — abre o Prisma Studio para inspecionar os dados

## Status

Projeto em desenvolvimento incremental. Consulte o histórico de commits para acompanhar o progresso de cada etapa.
