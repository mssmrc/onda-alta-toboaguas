import { useEffect, useRef, useState } from 'react'
import { HOME } from '~/content/site'
import { MODELS, type SlideModel } from '~/lib/slides'
import { SlideIcon } from './SlideIcon'

const n = (v: number) => v.toLocaleString('pt-BR')
const MAX_HEIGHT = 4 // metros representados na régua

/**
 * Carrossel de modelos: rolagem horizontal com encaixe (funciona com o dedo, o trackpad e o teclado)
 * e setas para quem usa mouse. Cada ficha mostra a altura do toboágua ao lado de uma pessoa.
 */
export function ModelCarousel() {
  const track = useRef<HTMLUListElement>(null)
  const [edges, setEdges] = useState({ start: true, end: false })

  useEffect(() => {
    const el = track.current
    if (!el) return
    const update = () =>
      setEdges({
        start: el.scrollLeft < 8,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8,
      })
    const frame = requestAnimationFrame(update)
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  function go(dir: 1 | -1) {
    const el = track.current
    if (!el) return
    const card = el.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * step, behavior: smooth ? 'smooth' : 'auto' })
  }

  return (
    <div className="carousel">
      <div className="carousel-nav">
        <button type="button" onClick={() => go(-1)} disabled={edges.start} aria-label="Modelo anterior">
          ←
        </button>
        <button type="button" onClick={() => go(1)} disabled={edges.end} aria-label="Próximo modelo">
          →
        </button>
      </div>
      <ul className="carousel-track" ref={track} tabIndex={0} aria-label="Modelos de toboágua">
        {MODELS.map((m, i) => (
          <li key={m.id} className="model-card">
            <div className="model-head">
              <span className="model-index">0{i + 1}</span>
              <SlideIcon shape={m.shape} />
            </div>
            <h3>{m.name}</h3>
            <p className="model-dims">
              {n(m.height)} m de altura · {n(m.length)} m de percurso
            </p>
            <p className="model-use">{m.use}</p>
            <HeightMeter model={m} />
            <dl>
              <div>
                <dt>Espaço ao lado</dt>
                <dd>{m.area.map(n).join(' × ')} m</dd>
              </div>
              <div>
                <dt>Profundidade</dt>
                <dd>a partir de {n(m.minDepth)} m</dd>
              </div>
              <div>
                <dt>Idade</dt>
                <dd>{m.minAge}+ anos</dd>
              </div>
            </dl>
            <div className="model-price">
              <PriceDrops tier={m.tier} />
              <span>
                a partir de <b>{m.price}</b>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Régua: altura de saída do toboágua comparada a uma pessoa adulta. */
function HeightMeter({ model }: { model: SlideModel }) {
  const person = HOME.models.personHeight
  const px = (m: number) => (m / MAX_HEIGHT) * 112
  const ground = 126
  const slideTop = ground - px(model.height)
  const personH = px(person)
  return (
    <svg
      className="meter"
      viewBox="0 0 220 140"
      role="img"
      aria-label={`Altura de saída de ${n(model.height)} m, comparada a uma pessoa de ${n(person)} m`}
    >
      {[1, 2, 3, 4].map((h) => (
        <g key={h}>
          <line x1="28" x2="212" y1={ground - px(h)} y2={ground - px(h)} className="meter-grid" />
          <text x="2" y={ground - px(h) + 4} className="meter-tick">
            {h} m
          </text>
        </g>
      ))}
      {/* pessoa */}
      <g className="meter-person">
        <circle cx="70" cy={ground - personH + 7} r="7" />
        <rect x="61" y={ground - personH + 16} width="18" height={personH - 16} rx="8" />
      </g>
      {/* toboágua */}
      <rect x="128" y={slideTop} width="34" height={ground - slideTop} rx="10" className="meter-bar" />
      <text x="145" y={slideTop - 8} textAnchor="middle" className="meter-label">
        {n(model.height)} m
      </text>
      <line x1="20" x2="212" y1={ground} y2={ground} className="meter-ground" />
    </svg>
  )
}

/** Faixa de preço em gotas (1 a 4). */
function PriceDrops({ tier }: { tier: SlideModel['tier'] }) {
  return (
    <span className="drops" role="img" aria-label={`Faixa de preço ${tier} de 4`}>
      {[1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 16 20" className={i <= tier ? 'is-on' : ''} aria-hidden="true">
          <path d="M8 1C8 1 2 8.5 2 12.5a6 6 0 0 0 12 0C14 8.5 8 1 8 1Z" />
        </svg>
      ))}
    </span>
  )
}
