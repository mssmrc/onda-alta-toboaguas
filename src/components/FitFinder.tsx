import { useState, type FormEvent } from 'react'
import { SITE } from '~/content/site'
import { MODELS, compatibleModels } from '~/lib/slides'
import { buildMessage, whatsappLink } from '~/lib/whatsapp'
import { SlideIcon } from './SlideIcon'

const num = (v: string) => Number(v.replace(',', '.'))

/**
 * "Qual cabe na minha piscina": o visitante informa profundidade e espaço livre, vê os modelos
 * compatíveis e pede o orçamento pelo WhatsApp com essas medidas.
 */
export function FitFinder() {
  const [depth, setDepth] = useState('1,2')
  const [width, setWidth] = useState('3')
  const [length, setLength] = useState('3')
  const [choice, setChoice] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const list = compatibleModels({ depth: num(depth), width: num(width), length: num(length) })
  const ok = new Set(list.map((m) => m.id))

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    if (!get('nome') || get('telefone').replace(/\D/g, '').length < 10) {
      setError('Preencha seu nome e um WhatsApp com DDD.')
      return
    }
    setError('')
    const message = buildMessage(`Olá! Quero um orçamento de toboágua com a ${SITE.name}.`, [
      ['Nome', get('nome')],
      ['WhatsApp', get('telefone')],
      ['Cidade', get('cidade')],
      ['Tipo de local', get('local')],
      ['Profundidade na saída', `${depth} m`],
      ['Espaço livre ao lado', `${width} × ${length} m`],
      ['Modelo de interesse', choice || (list.length ? list.map((m) => m.name).join(', ') : 'Preciso de orientação')],
    ])
    window.open(whatsappLink(SITE.whatsappNumber, message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <div className="finder">
      <div className="finder-inputs">
        <label>
          Profundidade da água onde o toboágua vai desaguar (m)
          <input inputMode="decimal" value={depth} onChange={(e) => setDepth(e.target.value)} />
        </label>
        <div className="finder-row">
          <label>
            Espaço livre: largura (m)
            <input inputMode="decimal" value={width} onChange={(e) => setWidth(e.target.value)} />
          </label>
          <label>
            Comprimento (m)
            <input inputMode="decimal" value={length} onChange={(e) => setLength(e.target.value)} />
          </label>
        </div>
      </div>
      <ul className="finder-results" aria-live="polite">
        {MODELS.map((m) => (
          <li key={m.id} className={ok.has(m.id) ? 'is-ok' : 'is-no'}>
            <SlideIcon shape={m.shape} />
            <div>
              <b>{m.name}</b>
              <span>{ok.has(m.id) ? `Cabe · a partir de ${m.price}` : `Precisa de ${m.minDepth.toLocaleString('pt-BR')} m de profundidade e ${m.area.map((n) => n.toLocaleString('pt-BR')).join(' × ')} m`}</span>
            </div>
            {ok.has(m.id) && (
              <button type="button" aria-pressed={choice === m.name} onClick={() => setChoice(choice === m.name ? '' : m.name)}>
                {choice === m.name ? 'Escolhido' : 'Escolher'}
              </button>
            )}
          </li>
        ))}
      </ul>
      <form className="finder-form" onSubmit={onSubmit} noValidate>
        <div className="finder-row">
          <label>
            Nome
            <input name="nome" autoComplete="name" required />
          </label>
          <label>
            WhatsApp com DDD
            <input name="telefone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(16) 90000-0000" required />
          </label>
        </div>
        <div className="finder-row">
          <label>
            Cidade
            <input name="cidade" placeholder="Ex.: Ribeirão Preto" />
          </label>
          <label>
            Local
            <select name="local" defaultValue="Casa">
              <option>Casa</option>
              <option>Condomínio</option>
              <option>Clube ou hotel</option>
              <option>Pousada ou chácara</option>
            </select>
          </label>
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        {sent && !error && (
          <p className="form-ok" role="status">
            Abrimos o WhatsApp com suas medidas. É só tocar em enviar.
          </p>
        )}
        <button type="submit" className="btn btn--sun">
          Pedir orçamento com essas medidas
        </button>
      </form>
    </div>
  )
}
