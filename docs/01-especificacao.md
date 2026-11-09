# Especificação — Onda Alta Toboáguas (case)

## Objetivo

Mostrar a empresas de nicho (equipamentos para piscina, lazer, instalação) como um site pode
**explicar um produto técnico de forma divertida e qualificar o pedido de orçamento** com as
medidas certas.

## Público do site

Donos de casas com piscina, síndicos e administradoras de condomínio, clubes, hotéis e pousadas do
interior de São Paulo e regiões vizinhas.

## Seções (página única)

| Âncora        | Conteúdo                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------- |
| topo          | Foto da piscina em tela cheia, título centralizado, ondas animadas e botões               |
| números       | Faixa amarela com 4 destaques (altura, formatos, prazo, garantia)                         |
| `#modelos`    | Carrossel com encaixe: ficha com régua de altura (vs. pessoa de 1,70 m), espaço, profundidade, idade e faixa de preço em gotas |
| `#qual-cabe`  | Seção "água funda": ferramenta de compatibilidade e formulário de orçamento               |
| `#instalacao` | Quatro etapas ao longo de uma curva de toboágua, com boias numeradas, e duas fotos        |
| `#projetos`   | Galeria em mosaico com três obras (legenda em etiqueta sobre a foto)                     |
| `#duvidas`    | Perguntas frequentes em fundo areia e chamada final para a visita técnica               |

## Funcionalidades

- **Qual cabe na minha piscina**: com a profundidade no ponto de saída e o espaço livre ao lado da
  borda (em qualquer orientação), a lista mostra os modelos compatíveis e o que falta nos outros.
- **Orçamento pelo WhatsApp** com medidas, tipo de local e modelo escolhido.
- **Desenhos dos formatos** em SVG (reto, curvo, caracol, tubo) e **régua de altura** em SVG, sem depender de imagens.

## Identidade visual

| Token      | Valor     | Uso                                                   |
| ---------- | --------- | ----------------------------------------------------- |
| `--foam`   | `#f3fbfc` | Espuma: fundo claro                                   |
| `--lagoon` | `#d6f3f5` | Lagoa: galeria, detalhes de fichas                    |
| `--pool`   | `#12b3c9` | Piscina: gradiente da seção "qual cabe", logo         |
| `--deep`   | `#04293a` | Fundo da piscina: texto, seção escura e rodapé        |
| `--sun`    | `#ffd23f` | Sol: botões e faixa de números                        |
| `--coral`  | `#ff6b4a` | Toboágua: desenhos, boias, régua, curvas decorativas  |
| `--sand`   | `#fff1d6` | Areia: seção de dúvidas                               |

- **Tipografia:** Bricolage Grotesque (títulos grossos, cara de cartaz de verão) e Figtree (texto).
- **Marca visual:** água em movimento — ondas animadas no topo, divisórias curvas diferentes entre
  as seções (onda, rampa de toboágua, marola) e o percurso de toboágua nas etapas.
- **Diferente de outros cases:** nada de título à esquerda com foto em moldura à direita; o topo é
  uma foto em tela cheia com o texto centralizado sobre a água.
