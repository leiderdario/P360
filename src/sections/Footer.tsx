import { Instagram, MessageCircle, Phone, MapPin, Mail, ExternalLink } from 'lucide-react';

const footerLinks = {
  navegacion: [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos', href: '#productos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
  ],
  productos: [
    { name: 'Cerdo Entero', href: '#productos' },
    { name: 'Media Canal', href: '#productos' },
    { name: 'Cortes Premium', href: '#productos' },
    { name: 'Cortes Populares', href: '#productos' },
    { name: 'Carne Molida', href: '#productos' },
  ],
  legal: [
    { name: 'Términos y Condiciones', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Política de Calidad', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/porc360', color: 'hover:text-pink-500' },
  { name: 'TikTok', icon: MessageCircle, href: 'https://tiktok.com/@porc360', color: 'hover:text-cyan-500' },
  { name: 'WhatsApp', icon: Phone, href: 'https://wa.me/573001234567', color: 'hover:text-green-500' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }} className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <img
  src="/newlogo.png"
  alt="PORC360 Logo"
  className="h-14 w-auto object-contain"
/>

                <div>
                  <span className="block text-white font-bold text-xl tracking-wide">PORC360</span>
                  <span className="block text-red-500 text-sm tracking-widest uppercase">Cárnico</span>
                </div>
              </div>
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Producción porcina de principio a fin. Calidad garantizada para 
              restaurantes, carnicerías, supermercados y hogares en Mahates y región.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-zinc-800`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-bold mb-5">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-white font-bold mb-5">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Mahates, Bolívar, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:+573001234567" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                  +57 301 244 8766
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="mailto:ventas@porc360.com" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                  ventas@porc360.com
                </a>
              </li>
            </ul>

            {/* Quick CTA */}
            <a
              href="https://wa.me/573012448766"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Pedir por WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} PORC360 Cárnico. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-400 text-xs transition-colors flex items-center gap-1"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
