/**
 * Élément graphique récurrent de la charte HORIZONS FEMMES :
 * silhouette de profil de femme avec foulard et boucle d'oreille.
 *
 * Utilise l'image officielle stockée dans /public/assets/hf/filigrane.png
 * Opacité par défaut : 10% (conforme à la charte)
 *
 * Props :
 *  - className : classes Tailwind pour le wrapper (taille, position...)
 *  - opacity   : par défaut 0.1 (10%), modifiable ponctuellement si besoin
 *  - color     : ignoré (l'image impose ses couleurs). Gardé pour
 *                rétro-compatibilité avec les appels existants.
 */
export default function SilhouetteFiligree({
  className = '',
  opacity = 0.1,
}) {
  return (
    <img
      src="/assets/hf/filigrane.png"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none object-contain ${className}`}
      style={{ opacity }}
      draggable={false}
    />
  )
}