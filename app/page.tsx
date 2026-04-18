import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardMarquee from './components/CardMarquee';
import FeaturedCards from './components/FeaturedCards';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Stats from './components/Stats';
import Products from './components/Products';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CardMarquee />
        <FeaturedCards />
        <HowItWorks />
        <Features />
        <Stats />
        <Products />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
