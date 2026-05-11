/**
 * Élément graphique récurrent de la charte HORIZONS FEMMES :
 * silhouette de profil de femme avec foulard.
 * Placeholder en attendant le SVG officiel.
 */
export default function Silhouettefiligree({
  className = '',
  color = 'currentColor',
  opacity = 0.15,
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      <g fill={color}>
        <path d="M210 60 C 150 60, 110 90, 95 140 C 85 175, 100 210, 130 230 L 130 235 C 95 215, 70 175, 75 130 C 80 75, 130 40, 200 35 C 235 33, 265 45, 285 65 C 270 60, 245 58, 210 60 Z" />
        <path d="M95 145 C 70 130, 45 125, 25 130 C 50 135, 75 145, 90 160 Z" />
        <path d="M88 175 C 60 175, 35 185, 15 200 C 45 195, 75 195, 95 200 Z" />
        <path d="M92 210 C 65 220, 40 240, 25 265 C 55 250, 80 240, 100 235 Z" />
        <path d="M210 95 C 240 95, 265 115, 270 150 C 273 180, 265 210, 250 235 C 240 250, 235 265, 240 280 C 245 290, 240 295, 230 295 L 220 295 L 220 285 C 215 275, 215 265, 220 255 C 200 255, 185 245, 180 225 C 175 200, 175 175, 185 150 C 192 120, 200 100, 210 95 Z" />
        <circle cx="218" cy="215" r="14" fill="none" stroke={color} strokeWidth="4" />
        <path d="M225 295 C 250 305, 285 320, 320 345 L 320 400 L 130 400 L 130 360 C 160 335, 195 315, 225 295 Z" />
      </g>
    </svg>
  )
}