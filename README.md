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
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Copie `.env.example` para `.env.local` e preencha as variáveis conforme as integrações forem habilitadas (banco de dados, Auth.js, Spotify, MusicBrainz).

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — inicia o build de produção
- `npm run lint` — checagem de lint

## Status

Projeto em desenvolvimento incremental. Consulte o histórico de commits para acompanhar o progresso de cada etapa.
