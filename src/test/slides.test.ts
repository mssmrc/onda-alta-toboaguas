import { describe, expect, it } from 'vitest'
import { MODELS, compatibleModels } from '~/lib/slides'

const ids = (d: number, w: number, l: number) => compatibleModels({ depth: d, width: w, length: l }).map((m) => m.id)

describe('compatibleModels', () => {
  it('piscina rasa só aceita o modelo infantil', () => {
    expect(ids(0.8, 4, 4)).toEqual(['kids'])
  })
  it('piscina funda com espaço médio aceita até o caracol', () => {
    expect(ids(1.3, 3, 3)).toEqual(['kids', 'curvo', 'caracol'])
  })
  it('aceita o espaço em qualquer orientação', () => {
    expect(ids(1.0, 3, 2.5)).toContain('curvo')
  })
  it('entradas inválidas retornam lista vazia', () => {
    expect(ids(0, 3, 3)).toEqual([])
  })
})

describe('faixa de preço', () => {
  it('as gotas acompanham a ordem de preço do catálogo', () => {
    const price = (s: string) => Number(s.replace(/\D/g, ''))
    const sorted = [...MODELS].sort((a, b) => price(a.price) - price(b.price))
    expect(sorted.map((m) => m.tier)).toEqual([1, 2, 3, 4])
  })
})
