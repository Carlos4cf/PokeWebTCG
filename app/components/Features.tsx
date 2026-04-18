const FEATURES = [
  {
    icon: '🔍',
    title: '25+ tiendas',
    desc: 'Las mejores webs TCG de España: MisterTCG, Zacatrus, Fnac, Game, El Corte Inglés y muchas más.',
  },
  {
    icon: '⚡',
    title: 'Alertas instantáneas',
    desc: 'Detección de stock en menos de 60 segundos desde que aparece en la web.',
  },
  {
    icon: '🏷️',
    title: 'Ofertas y chollos',
    desc: 'Te avisamos cuando baja el precio o hay promoción especial.',
  },
  {
    icon: '📅',
    title: 'Reservas y preventa',
    desc: 'Sé el primero en reservar las novedades antes de que abran al público general.',
  },
  {
    icon: '🆓',
    title: '100% gratuito',
    desc: 'Sin suscripción, sin anuncios invasivos, sin trampas. Solo alertas útiles.',
  },
  {
    icon: '📱',
    title: 'Telegram + WhatsApp',
    desc: 'Canal de Telegram activo ahora. Canal de WhatsApp llegará muy pronto.',
  },
];

export default function Features() {
  return (
    <section className="section features" id="funciones">
      <h2 className="section__title">Todo lo que necesitas</h2>
      <p className="section__sub" style={{ marginBottom: 60 }}>Sin complicaciones, sin costes ocultos.</p>
      <div className="feature-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="feature-card reveal">
            <div className="feature-card__icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
