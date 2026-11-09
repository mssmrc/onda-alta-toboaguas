import { Link } from '@tanstack/react-router'
import { DEMO_NOTICE, DEV_CREDIT, NAV, SITE } from '~/content/site'
import { whatsappLink } from '~/lib/whatsapp'

/** Rodapé: o "fundo da piscina", com uma onda no topo que cobre o fim da seção anterior. */
export function Footer() {
  return (
    <footer className="footer">
      <svg className="footer-wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 30 C240 60 480 0 720 30 S1200 60 1440 30 V60 H0Z" />
      </svg>
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">Onda Alta</p>
          <p>{SITE.tagline}</p>
        </div>
        <nav aria-label="Seções do rodapé">
          {NAV.map((n) => (
            <a key={n.href} href={`/${n.href}`}>
              {n.label}
            </a>
          ))}
          <Link to="/privacidade">Privacidade</Link>
        </nav>
        <div>
          <a href={whatsappLink(SITE.whatsappNumber)} target="_blank" rel="noopener noreferrer">
            WhatsApp {SITE.whatsapp}
          </a>
          <a href={`tel:${SITE.phone.replace(/\D/g, '')}`}>Telefone {SITE.phone}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>{SITE.hours}</span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {SITE.name} · CNPJ {SITE.cnpj} · {SITE.city}. {DEMO_NOTICE}
        </p>
        <p className="credit">
          {DEV_CREDIT.text}{' '}
          <a href={DEV_CREDIT.url} target="_blank" rel="noopener">
            {DEV_CREDIT.name}
          </a>
        </p>
      </div>
    </footer>
  )
}
