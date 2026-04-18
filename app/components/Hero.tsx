const TELEGRAM_URL = 'https://t.me/TU_CANAL_AQUI';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      {/* Floating cards — left */}
      <div className="hero__cards hero__cards--left" aria-hidden="true">
        <div className="card-float card-float--1">
          <img
            src="https://images.pokemontcg.io/sv8pt5/161_hires.png"
            alt=""
            className="tcg-card"
          />
        </div>
        <div className="card-float card-float--2">
          <img
            src="https://images.pokemontcg.io/base1/4_hires.png"
            alt=""
            className="tcg-card"
          />
        </div>
      </div>

      {/* Central content */}
      <div className="hero__content">
        <div className="hero__badge">
          <span className="badge__dot" />
          Bot activo · 25+ tiendas monitorizadas
        </div>

        <h1 className="hero__title">
          El único bot de España que rastrea<br />
          stock de <span className="accent">Pokémon TCG</span> 24/7
        </h1>

        <p className="hero__sub">
          Únete gratis a Telegram y gánale a los especuladores.<br />
          Alertas instantáneas de stock, ofertas y reservas antes que nadie.
        </p>

        <div className="hero__cta-group">
          <a
            href={TELEGRAM_URL}
            className="btn btn--primary btn--lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/telegram.svg" alt="" className="btn__icon" />
            Unirme gratis en Telegram
          </a>
          <span className="cta-note">📲 WhatsApp próximamente</span>
        </div>

        <div className="hero__social-proof">
          <span>⚡ Alertas en &lt;60 segundos</span>
          <span>🆓 100% gratuito</span>
          <span>🇪🇸 Solo tiendas españolas</span>
        </div>
      </div>

      {/* Floating cards — right */}
      <div className="hero__cards hero__cards--right" aria-hidden="true">
        <div className="card-float card-float--3">
          <img
            src="https://images.pokemontcg.io/sv8/238_hires.png"
            alt=""
            className="tcg-card"
          />
        </div>
        <div className="card-float card-float--4">
          <img
            src="https://images.pokemontcg.io/sv3/223_hires.png"
            alt=""
            className="tcg-card"
          />
        </div>
      </div>
    </section>
  );
}
