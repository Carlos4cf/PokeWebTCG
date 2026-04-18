const TELEGRAM_URL = 'https://t.me/TU_CANAL_AQUI';

export default function Footer() {
  return (
    <footer className="footer">
      <p>PokeAlert ES · Bot independiente · No afiliado a The Pokémon Company</p>
      <p className="footer__links">
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
          Telegram
        </a>
        {' · '}
        <a href="mailto:contacto@pokealert.es">Contacto</a>
      </p>
    </footer>
  );
}
