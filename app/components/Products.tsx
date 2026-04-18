const TAGS = [
  'ETBs (Elite Trainer Box)',
  'Blísters y boosters',
  'Colecciones especiales',
  'Cajas de coleccionista',
  'Sets de inicio',
  'Cartas individuales premium',
  'Lanzamientos exclusivos',
  'Promos limitadas',
  'Prismatic Evolutions',
  'Surging Sparks',
  'Preventa / Reservas',
];

export default function Products() {
  return (
    <section className="section products" id="productos">
      <h2 className="section__title">¿Qué productos rastreamos?</h2>
      <p className="section__sub">Todo lo que necesitas, sin que tengas que buscar.</p>
      <div className="tags">
        {TAGS.map((tag) => (
          <span key={tag} className="tag reveal">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
