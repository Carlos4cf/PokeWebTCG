const CARDS = [
  'https://images.pokemontcg.io/base1/4_hires.png',
  'https://images.pokemontcg.io/sv8pt5/161_hires.png',
  'https://images.pokemontcg.io/sv8/238_hires.png',
  'https://images.pokemontcg.io/base1/10_hires.png',
  'https://images.pokemontcg.io/sv3/223_hires.png',
  'https://images.pokemontcg.io/swsh7/218_hires.png',
  'https://images.pokemontcg.io/sv3pt5/199_hires.png',
  'https://images.pokemontcg.io/swsh7/215_hires.png',
  'https://images.pokemontcg.io/sv8pt5/156_hires.png',
  'https://images.pokemontcg.io/sv8pt5/167_hires.png',
];

const doubled = [...CARDS, ...CARDS];

export default function CardMarquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((src, i) => (
          <img key={i} src={src} alt="" className="mq-card" loading="lazy" />
        ))}
      </div>
    </div>
  );
}
