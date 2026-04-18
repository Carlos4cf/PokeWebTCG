'use client';

import { useRef, type MouseEvent } from 'react';

const CARDS = [
  {
    src: 'https://images.pokemontcg.io/sv8pt5/161_hires.png',
    name: 'Umbreon ex',
    set: 'Prismatic Evolutions · SIR',
    price: '~500–900€',
    alt: 'Umbreon ex SIR – Prismatic Evolutions',
  },
  {
    src: 'https://images.pokemontcg.io/sv3/223_hires.png',
    name: 'Charizard ex',
    set: 'Obsidian Flames · SIR',
    price: '~60–120€',
    alt: 'Charizard ex SIR – Obsidian Flames',
  },
  {
    src: 'https://images.pokemontcg.io/sv8/238_hires.png',
    name: 'Pikachu ex',
    set: 'Surging Sparks · SIR',
    price: '~80–200€',
    alt: 'Pikachu ex SIR – Surging Sparks',
  },
  {
    src: 'https://images.pokemontcg.io/sv3pt5/199_hires.png',
    name: 'Charizard ex',
    set: 'Pokémon 151 · SIR',
    price: '~50–90€',
    alt: 'Charizard ex SIR – 151',
  },
  {
    src: 'https://images.pokemontcg.io/base1/4_hires.png',
    name: 'Charizard',
    set: 'Base Set · 1999 · Holo',
    price: '~300–1.000€+',
    alt: 'Charizard Holo – Base Set 1999',
  },
  {
    src: 'https://images.pokemontcg.io/swsh7/218_hires.png',
    name: 'Rayquaza VMAX',
    set: 'Evolving Skies · Rainbow',
    price: '~30–60€',
    alt: 'Rayquaza VMAX – Evolving Skies',
  },
] as const;

function TiltCard({ card }: { card: (typeof CARDS)[number] }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    el.style.transition = 'transform 0.08s ease';
    el.style.transform = `perspective(620px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) scale(1.03)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.5s ease';
    el.style.transform = 'perspective(620px) rotateY(0deg) rotateX(0deg) scale(1)';
  };

  return (
    <div
      ref={ref}
      className="featured-card reveal"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="featured-card__img-wrap">
        <img src={card.src} alt={card.alt} loading="lazy" />
        <div className="featured-card__shine" />
      </div>
      <div className="featured-card__info">
        <span className="featured-card__name">{card.name}</span>
        <span className="featured-card__set">{card.set}</span>
        <span className="featured-card__price">{card.price}</span>
      </div>
    </div>
  );
}

export default function FeaturedCards() {
  return (
    <section className="section featured-section" id="cartas">
      <h2 className="section__title">Las cartas más buscadas de España</h2>
      <p className="section__sub">Alertas activas para estas y cientos de cartas y productos más</p>
      <div className="featured-grid">
        {CARDS.map((card) => (
          <TiltCard key={card.alt} card={card} />
        ))}
      </div>
    </section>
  );
}
