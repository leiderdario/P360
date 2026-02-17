import { useEffect, useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Products from './sections/Products';
import About from './sections/About';
import Process from './sections/Process';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <Products />
        <About />
        <Process />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
