import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { NAV, SITE } from '~/content/site'

/** Cabeçalho em forma de "boia": uma pílula que flutua sobre a foto do topo e acompanha a rolagem. */
export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="header">
        <div className="header-pill">
          <Link to="/" onClick={close} className="logo" aria-label={`${SITE.name}, início`}>
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <rect width="40" height="40" rx="12" fill="var(--pool)" />
              <path d="M8 8c14 0 4 12 16 14s8 10 8 10" fill="none" stroke="var(--coral)" strokeWidth="5" strokeLinecap="round" />
              <path d="M6 33c4-3 8 3 12 0s8 3 12 0" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span>
              Onda Alta<small>toboáguas</small>
            </span>
          </Link>
          <nav className={`nav${open ? ' open' : ''}`} id="nav" aria-label="Seções">
            {NAV.map((n) => (
              <a key={n.href} href={`/${n.href}`} onClick={close}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href="/#qual-cabe" className="btn btn--sun header-cta">
            Orçamento
          </a>
          <button
            className="burger"
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="nav"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>
    </>
  )
}
