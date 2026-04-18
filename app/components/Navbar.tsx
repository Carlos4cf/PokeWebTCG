'use client';

import { useEffect, useState } from 'react';

const TELEGRAM_URL = 'https://t.me/TU_CANAL_AQUI';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__logo">
          <span className="navbar__logo-icon">⚡</span>
          <span>PokeAlert<span className="navbar__logo-accent">ES</span></span>
        </a>

        <div className="navbar__links">
          <a href="#como-funciona" className="navbar__link">Cómo funciona</a>
          <a href="#funciones" className="navbar__link">Funciones</a>
          <a href="#cartas" className="navbar__link">Cartas</a>
        </div>

        <a
          href={TELEGRAM_URL}
          className="btn btn--sm btn--primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/telegram.svg" alt="" width={16} height={16} />
          Únete gratis
        </a>
      </div>
    </nav>
  );
}
