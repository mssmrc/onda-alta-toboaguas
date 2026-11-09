# AGENTS.md — Guia obrigatório para agentes de IA

> Vale para Cline, Antigravity, Claude, Gemini, DeepSeek e qualquer outro agente.
> **Leia este arquivo inteiro antes de alterar o código.** Detalhes em `docs/`.

---

## 1. O que é o projeto

1. Site **demonstrativo (case de portfólio)** de **Onda Alta Toboáguas**, empresa de venda e instalação de toboáguas para piscinas **fictício(a)**.
2. Desenvolvido pela **Runa Web** ([runaweb.com.br](https://runaweb.com.br)). O crédito "Desenvolvido por Runa Web" fica no rodapé, com link para o site, e **não deve ser removido**.
3. Não há banco de dados, login nem pagamento. O pedido de orçamento envia as medidas da piscina e o modelo escolhido pelo WhatsApp do visitante.
4. Nomes, telefones, e-mails, endereços, preços e depoimentos são **placeholders**.

**Páginas:** Início (página única com seções) (`/`), Política de privacidade (`/privacidade`).

---

## 2. Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | **TanStack Start** (React 19 + TanStack Router, SSR) |
| Build | **Vite 8** |
| Hospedagem | **Cloudflare Workers** (deploy com `wrangler`) |
| Estilo | **Tailwind v4** + CSS de componentes em `src/styles/` |
| Testes | **Vitest** · Qualidade: ESLint + Prettier |

---

## 3. Comandos

```bash
npm install            # instalar dependências (uma vez)
npm run images:baixar  # baixar as fotos placeholder do Unsplash/Pexels (uma vez)
npm run images:prompts # regenerar public/images/PROMPTS-IA.md após mudar images.json
npm run dev            # site local em http://localhost:3000
npm run check          # typecheck + lint + testes  ← RODE SEMPRE ANTES DE TERMINAR
npm run build          # build de produção
npm run deploy         # build + publicar no Cloudflare
```

---

## 4. Mapa de pastas

```
src/
├── routes/                 PÁGINAS (cada arquivo = uma URL)
│   ├── __root.tsx          layout geral (cabeçalho, rodapé, fontes)
│   ├── index.tsx             /  conteúdo em components/pages/HomePage.tsx
│   ├── privacidade.tsx       /privacidade
├── components/             peças reutilizáveis (Header, Footer, Photo, Faq, Curve (divisórias curvas), ModelCarousel (fichas com régua de altura), SlideIcon (desenho de cada formato), FitFinder (qual cabe + orçamento)…)
├── content/                TEXTOS E DADOS (site.ts (dados, textos da home, números, projetos, etapas, FAQ), legal.ts, images.json)
├── lib/                    regras puras (whatsapp.ts, slides.ts (catálogo de modelos e regra de compatibilidade))
├── styles/ + styles.css    estilos (cores em styles/base.css → :root)
├── server.ts               entrada do Worker (cabeçalhos de segurança e CSP)
└── test/                   testes automáticos
scripts/                    baixar-imagens.mjs · gerar-prompts.mjs
public/                     imagens, favicon, robots.txt
docs/                       especificação e deploy
```

---

## 5. Regras de ouro

| # | Regra | Por quê |
| --- | --- | --- |
| 1 | **Não remova o crédito "Desenvolvido por Runa Web"** nem o aviso de site demonstrativo. | É um case de portfólio. |
| 2 | **Textos e dados ficam em `src/content/`**, não espalhados nas páginas. | Trocar o cliente = editar só essa pasta. |
| 3 | **Imagens: lista única em `src/content/images.json`.** Use `<Photo k="nome" />`. | O script e os prompts leem o mesmo arquivo. |
| 4 | **Cores e fontes só pelas variáveis CSS** de `src/styles/base.css`. | Mudar a identidade em um lugar só. |
| 5 | **Novo domínio externo** (script, iframe, API) → inclua na CSP em `src/server.ts`. | Senão o navegador bloqueia. |
| 6 | **Nunca `dangerouslySetInnerHTML`.** | Evita XSS. |
| 7 | **Rode `npm run check` antes de concluir.** | É a rede de segurança do projeto. |

---

## 6. Convenções

- Textos de interface em **português do Brasil**; variáveis, funções e arquivos em **inglês**.
- A marca visual é a **água em movimento**: foto da piscina em tela cheia com ondas animadas na base, divisórias curvas diferentes entre as seções (componente `Curve`: onda, rampa de toboágua, marola) e as etapas da instalação ao longo de um "toboágua" com boias numeradas. Paleta de verão (turquesa, marinho profundo, amarelo-sol, coral). Tipografia Bricolage Grotesque (títulos) + Figtree (texto). Menu em pílula flutuante com âncoras (#modelos, #qual-cabe, #instalacao, #projetos, #duvidas).
- Animações respeitam `prefers-reduced-motion`.
- Commits pequenos, em português, dizendo o que mudou e por quê.

---

## 7. Receitas rápidas

- **Adicionar um modelo:** inclua em `MODELS` (`src/lib/slides.ts`) com `shape` existente (reto, curvo, caracol, tubo) e `tier` (faixa de preço, 1 a 4 gotas). O carrossel e a ferramenta se atualizam sozinhos.
- **Mudar a regra de compatibilidade:** função `fits` em `src/lib/slides.ts`; testes em `src/test/slides.test.ts`.
- **Trocar os projetos instalados:** `PROJECTS` em `src/content/site.ts` + imagens em `images.json`.
- **Trocar uma foto:** salve o arquivo novo em `public/` com o mesmo nome (veja `public/images/LEIA-ME.md`).
- **Mudar cores:** variáveis do `:root` em `src/styles/base.css`.
