# Onda Alta Toboáguas — site demonstrativo

Case de portfólio da **Runa Web**: site de uma página de uma empresa fictícia de toboáguas, com fichas técnicas dos modelos, ferramenta "qual cabe na minha piscina" (profundidade e espaço livre) e orçamento pelo WhatsApp com as medidas.

Feito com **TanStack Start (React 19)**, hospedado no **Cloudflare Workers**. Não usa banco de dados.

> **Usando um agente de IA (Cline, Antigravity, Claude, Gemini, DeepSeek…)?**
> Ele deve ler primeiro o [`AGENTS.md`](./AGENTS.md).

## Começando

```bash
npm install
npm run images:baixar   # fotos placeholder do Unsplash/Pexels (precisa de internet)
npm run dev             # http://localhost:3000
```

Antes de cada commit: `npm run check` (tipos + lint + testes).

## Publicar

Veja [`docs/02-deploy.md`](./docs/02-deploy.md). Resumo:

```bash
npx wrangler login
npm run deploy          # → https://onda-alta-toboaguas.<sua-conta>.workers.dev
```

## O que é placeholder

| Item | Onde trocar |
| --- | --- |
| Nome, CNPJ, contatos, horários | `src/content/site.ts` (SITE) |
| Modelos, medidas e preços | `MODELS` em `src/lib/slides.ts` |
| Projetos instalados, etapas e FAQ | `src/content/site.ts` |
| Fotos | `public/images/` (prompts em `public/images/PROMPTS-IA.md`) |
| Logo | `src/components/Header.tsx` e `public/favicon.svg` |
| Cores e fontes | `src/styles/base.css` e `src/routes/__root.tsx` |

## Documentação

| Arquivo | Conteúdo |
| --- | --- |
| [AGENTS.md](./AGENTS.md) | Mapa do projeto e regras para agentes |
| [docs/01-especificacao.md](./docs/01-especificacao.md) | Objetivo, páginas, identidade visual |
| [docs/02-deploy.md](./docs/02-deploy.md) | Publicação no Cloudflare e domínio |
| [public/images/LEIA-ME.md](./public/images/LEIA-ME.md) | Como baixar e trocar as fotos |

---

Desenvolvido por **[Runa Web](https://runaweb.com.br)**.
