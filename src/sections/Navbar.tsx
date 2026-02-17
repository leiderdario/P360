import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Productos', href: '#productos' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar({ scrollY }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const isScrolled = scrollY > 50;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#404040]/95 backdrop-blur-md border-b border-red-600/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#inicio');
            }}
            className="flex items-center gap-3 group"
          >
            <img
  src="/newlogo.png"
  alt="PORC360 Logo"
  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
/>

            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg tracking-wide">PORC360</span>
              <span className="block text-red-500 text-xs tracking-widest uppercase">Cárnico</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-red-500 bg-red-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/573012448766"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25"
            >
              <Phone className="w-4 h-4" />
              <span>Hacer Pedido</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-red-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#404040]/98 backdrop-blur-lg border-b border-red-600/20 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-red-500 bg-red-500/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full mt-4 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Hacer Pedido</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
