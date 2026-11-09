/**
 * Catálogo de modelos (FICTÍCIO) e regra do "qual cabe na minha piscina".
 * Um modelo é compatível quando a profundidade no ponto de saída e o espaço livre ao lado da
 * piscina atendem às medidas mínimas do modelo. A visita técnica sempre confirma.
 */
export type SlideModel = {
  id: string
  name: string
  shape: 'reto' | 'curvo' | 'caracol' | 'tubo'
  height: number
  length: number
  /** Área livre necessária ao lado da piscina (largura × comprimento, em metros). */
  area: [number, number]
  /** Profundidade mínima da água no ponto de saída, em metros. */
  minDepth: number
  minAge: number
  price: string
  /** Faixa de preço de 1 (mais acessível) a 4, mostrada em gotas na ficha. */
  tier: 1 | 2 | 3 | 4
  use: string
}

export const MODELS: SlideModel[] = [
  { id: 'kids', name: 'Reto Kids', shape: 'reto', height: 1.2, length: 2.4, area: [1.2, 3], minDepth: 0.6, minAge: 3, price: 'R$ 4.900', tier: 1, use: 'Casas e áreas infantis' },
  { id: 'curvo', name: 'Curvo 180°', shape: 'curvo', height: 1.8, length: 4, area: [2.5, 3], minDepth: 1.0, minAge: 6, price: 'R$ 9.800', tier: 2, use: 'Casas e pousadas' },
  { id: 'caracol', name: 'Caracol 360°', shape: 'caracol', height: 2.5, length: 6.5, area: [3, 3], minDepth: 1.2, minAge: 8, price: 'R$ 16.500', tier: 3, use: 'Condomínios e pousadas' },
  { id: 'tubo', name: 'Tubo fechado', shape: 'tubo', height: 3.5, length: 10, area: [4, 6], minDepth: 1.4, minAge: 10, price: 'R$ 32.000', tier: 4, use: 'Clubes e hotéis' },
]

export type PoolInput = { depth: number; width: number; length: number }

export function fits(m: SlideModel, { depth, width, length }: PoolInput): boolean {
  const [w, l] = m.area
  // o espaço pode estar em qualquer orientação
  const spaceOk = (width >= w && length >= l) || (width >= l && length >= w)
  return depth >= m.minDepth && spaceOk
}

export function compatibleModels(input: PoolInput): SlideModel[] {
  if ([input.depth, input.width, input.length].some((n) => !Number.isFinite(n) || n <= 0)) return []
  return MODELS.filter((m) => fits(m, input))
}
