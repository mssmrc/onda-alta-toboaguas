/**
 * Divisória curva entre seções (assinatura do site). Cada transição usa um formato:
 *  - wave: onda larga · slide: rampa de toboágua · ripple: marola miúda
 * `from` é a cor da seção de cima e `to` a de baixo (use as variáveis de base.css).
 */
const PATHS = {
  wave: 'M0 46 C240 96 480 6 720 46 S1200 96 1440 46 V100 H0Z',
  slide: 'M0 100 C420 100 760 10 1440 6 V100 H0Z',
  ripple:
    'M0 60 Q90 34 180 60 T360 60 T540 60 T720 60 T900 60 T1080 60 T1260 60 T1440 60 V100 H0Z',
} as const

export function Curve({
  from,
  to,
  shape = 'wave',
  flip = false,
}: {
  from: string
  to: string
  shape?: keyof typeof PATHS
  flip?: boolean
}) {
  return (
    <svg
      className={`curve curve--${shape}${flip ? ' curve--flip' : ''}`}
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ background: from }}
    >
      <path d={PATHS[shape]} fill={to} />
    </svg>
  )
}
