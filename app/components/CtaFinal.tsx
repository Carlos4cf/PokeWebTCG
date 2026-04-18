const TELEGRAM_URL = 'https://t.me/TU_CANAL_AQUI';

export default function CtaFinal() {
  return (
    <section className="cta-final">
      <div className="cta-final__box reveal">
        <h2>
          Únete ahora.<br />
          Es gratis. Siempre lo será.
        </h2>
        <p>
          Más de 25 tiendas vigiladas para que tú solo tengas que hacer clic en{' '}
          <em>Comprar</em>.
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
        </div>
        <p className="coming-soon">
          📲 Canal de WhatsApp — <strong>próximamente</strong>
        </p>
      </div>
    </section>
  );
}
