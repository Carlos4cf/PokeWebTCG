const STEPS = [
  {
    num: 1,
    title: 'Únete al canal',
    desc: 'Accede a Telegram y pulsa Unirse. Listo. Gratis para siempre.',
  },
  {
    num: 2,
    title: 'El bot rastrea 24/7',
    desc: 'Monitorizamos más de 25 webs españolas de TCG Pokémon sin parar, día y noche.',
  },
  {
    num: 3,
    title: 'Tú recibes la alerta',
    desc: 'En cuanto hay stock nuevo, oferta o reserva abierta, te lo mandamos al instante.',
  },
  {
    num: 4,
    title: 'Compra antes que nadie',
    desc: 'Llega al checkout antes de que los especuladores vacíen la tienda.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section how" id="como-funciona">
      <h2 className="section__title">¿Cómo funciona?</h2>
      <p className="section__sub">Simple. Rápido. Sin cuotas.</p>
      <div className="steps">
        {STEPS.map((step) => (
          <div key={step.num} className="step reveal">
            <div className="step__num">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
