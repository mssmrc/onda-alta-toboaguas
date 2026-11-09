import { FAQ, HIGHLIGHTS, HOME, PROJECTS, SITE, STEPS } from '~/content/site'
import { whatsappLink } from '~/lib/whatsapp'
import { Curve } from '../Curve'
import { Faq } from '../Faq'
import { FitFinder } from '../FitFinder'
import { ModelCarousel } from '../ModelCarousel'
import { Photo } from '../Photo'

/** Onda periódica (período 1440) desenhada em 2880 px para rolar sem emenda. */
const WAVE =
  'M0 60 C240 100 480 100 720 60 C960 20 1200 20 1440 60 C1680 100 1920 100 2160 60 C2400 20 2640 20 2880 60 V120 H0Z'

export function HomePage() {
  const { hero } = HOME
  return (
    <>
      <section className="hero">
        <div className="hero-photo">
          <Photo k="hero" eager />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="wrap hero-content">
          <p className="hero-kicker">{hero.kicker}</p>
          <h1>{hero.title}</h1>
          <p className="hero-lead">{hero.lead}</p>
          <div className="ctas">
            <a href="#qual-cabe" className="btn btn--sun btn--lg">
              {hero.primary}
            </a>
            <a href="#modelos" className="btn btn--glass btn--lg">
              {hero.secondary}
            </a>
          </div>
        </div>
        <div className="hero-waves" aria-hidden="true">
          <svg className="wave-back" viewBox="0 0 2880 120" preserveAspectRatio="none">
            <path d={WAVE} />
          </svg>
          <svg className="wave-front" viewBox="0 0 2880 120" preserveAspectRatio="none">
            <path d={WAVE} />
          </svg>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <ul className="highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h.value}>
                <b>{h.value}</b>
                <span>{h.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--foam" id="modelos">
        <div className="wrap">
          <header className="section-head section-head--row">
            <div>
              <p className="kicker">Modelos</p>
              <h2 className="h2">{HOME.models.title}</h2>
              <p className="lead">{HOME.models.lead}</p>
            </div>
          </header>
          <ModelCarousel />
        </div>
      </section>

      <Curve from="var(--foam)" to="var(--pool)" shape="slide" />
      <section className="section section--deep" id="qual-cabe">
        <div className="wrap">
          <header className="section-head">
            <p className="kicker">Ferramenta</p>
            <h2 className="h2">{HOME.finder.title}</h2>
            <p className="lead">{HOME.finder.lead}</p>
          </header>
          <FitFinder />
        </div>
      </section>
      <Curve from="var(--deep)" to="var(--foam)" shape="ripple" />

      <section className="section section--foam" id="instalacao">
        <div className="wrap">
          <header className="section-head section-head--center">
            <p className="kicker">Instalação</p>
            <h2 className="h2">{HOME.steps.title}</h2>
            <p className="lead">{HOME.steps.lead}</p>
          </header>
          <div className="route">
            <svg className="route-path" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 70 C60 70 100 40 150 40 S300 4 450 40 S600 76 750 40 S900 4 1050 40 S1150 70 1200 70" />
            </svg>
            <ol className="route-steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="buoy" aria-hidden="true">
                    <span>{i + 1}</span>
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="route-photos">
            <div className="route-photo route-photo--wide">
              <Photo k="instalacao" />
            </div>
            <div className="route-photo route-photo--blob">
              <Photo k="detalhe" />
            </div>
          </div>
        </div>
      </section>

      <Curve from="var(--foam)" to="var(--lagoon)" shape="wave" />
      <section className="section section--lagoon" id="projetos">
        <div className="wrap">
          <header className="section-head">
            <p className="kicker">Galeria</p>
            <h2 className="h2">{HOME.projects.title}</h2>
            <p className="lead">{HOME.projects.lead}</p>
          </header>
          <div className="gallery">
            {PROJECTS.map((p) => (
              <figure key={p.title}>
                <Photo k={p.image} />
                <figcaption>
                  <b>{p.title}</b>
                  <span>{p.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Curve from="var(--lagoon)" to="var(--sand)" shape="slide" flip />
      <section className="section section--sand" id="duvidas">
        <div className="wrap faq-wrap">
          <div className="faq-side">
            <p className="kicker">Antes de pular</p>
            <h2 className="h2">{HOME.faq.title}</h2>
            <p className="lead">
              {HOME.faq.lead} <a href={`tel:${SITE.phone.replace(/\D/g, '')}`}>{SITE.phone}</a>
            </p>
            <div className="faq-photo">
              <Photo k="crianca" />
            </div>
          </div>
          <Faq items={FAQ} />
        </div>

        <div className="wrap">
          <div className="cta-band">
            <svg className="cta-swirl" viewBox="0 0 400 200" aria-hidden="true">
              <path d="M-10 40 C120 40 200 70 150 120 S160 200 410 170" />
            </svg>
            <div>
              <h2 className="h2">{HOME.cta.title}</h2>
              <p>{HOME.cta.text}</p>
            </div>
            <div className="ctas">
              <a
                className="btn btn--sun btn--lg"
                href={whatsappLink(SITE.whatsappNumber, `Olá! Quero marcar uma visita técnica com a ${SITE.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {HOME.cta.primary}
              </a>
              <a className="btn btn--glass btn--lg" href="#qual-cabe">
                {HOME.cta.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
