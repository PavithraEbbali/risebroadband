import Image, { type StaticImageData } from 'next/image';
import styles from './HeroBackground.module.css';

/**
 * Hero backdrop.
 *
 * §4 removes what used to live here: the animated mesh-gradient wash, the
 * pointer-parallax plate, the Ken Burns drift, the scattered glowing dots and
 * the network-node clusters. All of them were continuous main-thread or
 * compositor work sitting directly behind the LCP element, and several
 * (pointer parallax, ping-pulse dots) are named bans.
 *
 * What remains is the photograph, a contrast scrim, and a static grain plate.
 * There is no client JavaScript in this component at all — it is a server
 * component, so the hero's largest paint is a plain <img> with `priority` and
 * nothing competing with it.
 *
 * The scrim is not decoration and must not be removed: without it the headline
 * measures 1.2:1 against the bright window in the upper-left of the artwork.
 * It holds 0.78 opacity out to 62% because that is where the headline ends.
 */
export default function HeroBackground({
  image,
  alt = '',
}: {
  image: StaticImageData;
  /** Empty by default — the hero's meaning is carried by the H1, not the art. */
  alt?: string;
}) {
  return (
    <div className={styles.wrap} aria-hidden={alt === '' ? true : undefined}>
      <Image
        src={image}
        alt={alt}
        fill
        // LCP element: eager, high priority, and sized for the full viewport.
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={82}
        placeholder="blur"
        className={styles.photo}
      />
      <div className={styles.scrim} />
      <div className={styles.grain} />
    </div>
  );
}
