const STATS = [
  { num: '25+',   label: 'Tiendas monitorizadas' },
  { num: '24/7',  label: 'Rastreo continuo'      },
  { num: '<60s',  label: 'Tiempo de alerta'       },
  { num: '0€',    label: 'Precio para ti'         },
];

export default function Stats() {
  return (
    <section className="stats-wrap">
      <div className="stats__grid">
        {STATS.map((s) => (
          <div key={s.label} className="stat reveal">
            <span className="stat__num">{s.num}</span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
