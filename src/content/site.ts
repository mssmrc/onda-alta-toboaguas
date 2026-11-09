import type { ImageKey } from './images'

/** Dados gerais (FICTÍCIOS — troque pelos dados reais do cliente). */
export const SITE = {
  name: 'Onda Alta Toboáguas',
  tagline: 'Venda e instalação de toboáguas para piscinas de casas, condomínios, clubes e pousadas.',
  description:
    'Toboáguas de fibra para piscinas residenciais, condomínios e clubes, com projeto, base, instalação e garantia. Atendemos o interior de São Paulo e região.',
  cnpj: '00.000.000/0001-00',
  phone: '(16) 3000-0000',
  whatsapp: '(16) 99999-0000',
  whatsappNumber: '5516999990000',
  email: 'orcamento@exemplo.com.br',
  city: 'Ribeirão Preto — SP',
  hours: 'Segunda a sexta, 8h às 18h · Sábado, 8h às 12h',
} as const

/** Texto obrigatório nos sites de case. */
export const DEMO_NOTICE = 'Site demonstrativo. Empresa, modelos, preços e contatos são fictícios.'
export const DEV_CREDIT = { text: 'Desenvolvido por', name: 'Runa Web', url: 'https://runaweb.com.br' } as const

export const NAV = [
  { href: '#modelos', label: 'Modelos' },
  { href: '#qual-cabe', label: 'Qual cabe' },
  { href: '#instalacao', label: 'Instalação' },
  { href: '#projetos', label: 'Obras' },
  { href: '#duvidas', label: 'Dúvidas' },
] as const

/** Textos da página inicial. */
export const HOME = {
  hero: {
    kicker: 'Toboáguas de fibra · interior de SP, sul de MG e Triângulo',
    title: 'A piscina de casa virou parque aquático.',
    lead: 'Para casas, condomínios, clubes e pousadas. Projeto, base e instalação feitos pela nossa equipe.',
    primary: 'Ver qual cabe na minha piscina',
    secondary: 'Conhecer os modelos',
  },
  models: {
    title: 'Escolha a sua descida',
    lead: 'Fibra de vidro com gelcoat resistente ao sol e ao cloro, em 8 cores. Preços com instalação, sem a base.',
    personHeight: 1.7,
  },
  finder: {
    title: 'Qual toboágua cabe na sua piscina?',
    lead: 'Meça a profundidade no ponto onde a pessoa vai cair na água e o espaço livre ao lado da borda. A visita técnica confirma tudo antes da compra.',
  },
  steps: {
    title: 'Do orçamento ao primeiro mergulho',
    lead: 'Quatro etapas, uma equipe só. Você acompanha tudo pelo WhatsApp.',
  },
  projects: {
    title: 'Obras entregues',
    lead: 'Alguns toboáguas que já estão em uso pela região.',
  },
  faq: {
    title: 'Dúvidas',
    lead: 'Ou fale direto com a gente:',
  },
  cta: {
    title: 'Bora marcar a visita técnica?',
    text: 'Sem custo em até 100 km. Levamos a trena, você escolhe a cor.',
    primary: 'Pedir orçamento pelo WhatsApp',
    secondary: 'Calcular qual cabe',
  },
} as const

/** Números da faixa logo abaixo do topo. */
export const HIGHLIGHTS = [
  { value: '1,2 a 3,5 m', label: 'de altura de saída' },
  { value: '4 formatos', label: 'reto, curvo, caracol e tubo' },
  { value: '1 a 2 dias', label: 'de instalação na sua casa' },
  { value: '2 anos', label: 'de garantia na fibra' },
] as const

export const PROJECTS: { title: string; place: string; image: ImageKey }[] = [
  { title: 'Parque aquático com cinco raias de toboágua', place: 'Ribeirão Preto', image: 'residencial' },
  { title: 'Condomínio Parque das Palmeiras', place: 'Franca', image: 'condominio' },
  { title: 'Clube de campo', place: 'São Carlos', image: 'clube' },
]

export const STEPS = [
  { title: 'Visita técnica', text: 'Medimos a piscina, a profundidade e o espaço livre ao redor. Sem custo em até 100 km.' },
  { title: 'Projeto e proposta', text: 'Você recebe o modelo indicado, a posição ideal e o orçamento com base e instalação.' },
  { title: 'Fabricação', text: 'Toboágua em fibra de vidro com gelcoat, na cor escolhida. Prazo de 15 a 30 dias.' },
  { title: 'Instalação', text: 'Base de concreto, fixação, ligação da água e teste. Em geral, em um ou dois dias.' },
]

export const FAQ: [string, string][] = [
  ['Qual a profundidade mínima da piscina?', 'Depende do modelo e da altura de saída. Para os infantis, a partir de 0,6 m; para os maiores, a partir de 1,2 m. A visita técnica confirma a profundidade no ponto de saída.'],
  ['Precisa quebrar o piso da piscina?', 'Normalmente não. Fazemos uma pequena base de concreto ao lado da borda e fixamos a estrutura nela.'],
  ['O toboágua precisa de água corrente?', 'Sim, para deslizar melhor e com segurança. Ligamos a um ponto de água ou a uma pequena bomba ligada ao filtro.'],
  ['Qual a garantia?', 'Dois anos contra defeitos de fabricação na fibra e um ano na instalação, com manual de uso e manutenção.'],
]
