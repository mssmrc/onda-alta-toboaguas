import type { SlideModel } from '~/lib/slides'

/** Desenho simples de cada formato de toboágua, usado nas fichas dos modelos. */
export function SlideIcon({ shape }: { shape: SlideModel['shape'] }) {
  const paths: Record<SlideModel['shape'], string> = {
    reto: 'M12 14 L52 50',
    curvo: 'M10 12 C40 12 50 26 30 34 S28 54 54 52',
    caracol: 'M32 8 C52 8 54 26 36 28 C18 30 14 44 32 46 C46 47 52 52 56 54',
    tubo: 'M8 10 C30 10 56 14 44 28 C32 42 12 34 18 46 C22 54 44 54 56 54',
  }
  return (
    <svg viewBox="0 0 64 64" className="slide-icon" aria-hidden="true">
      <path d="M4 58 Q16 54 28 58 T52 58 T64 58" fill="none" stroke="var(--pool)" strokeWidth="3" strokeLinecap="round" />
      <path d={paths[shape]} fill="none" stroke="var(--coral)" strokeWidth={shape === 'tubo' ? 9 : 6} strokeLinecap="round" />
    </svg>
  )
}
