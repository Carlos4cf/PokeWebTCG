import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ScrollReveal from './components/ScrollReveal';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PokeAlert ES – El bot que rastrea stock Pokémon TCG 24/7',
  description:
    'El único bot de España que rastrea stock de Pokémon TCG 24/7. Únete gratis a Telegram y gánale a los especuladores.',
  keywords: 'pokemon tcg, alertas stock pokemon, bot telegram pokemon, pokemon españa, pokémon cartas',
  openGraph: {
    title: 'PokeAlert ES – Alertas de stock Pokémon TCG 24/7',
    description:
      'Únete gratis a Telegram y sé el primero en conseguir tus cartas Pokémon favoritas.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
