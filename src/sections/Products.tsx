import { useEffect, useRef } from 'react';
import { ShoppingCart, ChevronRight, Info } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Cerdo Entero',
    description: 'Cerdo completo para procesamiento. Ideal para carnicerías y mayoristas.',
    price: 'Desde $8.500/kg',
    category: 'Mayorista',
    image: 'placeholder',
    badge: 'Más Vendido',
  },
  {
    id: 2,
    name: 'Media Canal',
    description: 'Media canal de cerdo fresca. Perfecta para restaurantes y hoteles.',
    price: 'Desde $9.000/kg',
    category: 'Mayorista',
    image: 'placeholder',
    badge: null,
  },
  {
    id: 3,
    name: 'Pierna de Cerdo',
    description: 'Pierna fresca deshuesada o con hueso. Excelente para asados.',
    price: 'Desde $12.000/kg',
    category: 'Corte Premium',
    image: 'placeholder',
    badge: 'Premium',
  },
  {
    id: 4,
    name: 'Costillas de Cerdo',
    description: 'Costillas frescas, tiernas y jugosas. Listas para la parrilla.',
    price: 'Desde $14.000/kg',
    category: 'Corte Premium',
    image: 'placeholder',
    badge: null,
  },
  {
    id: 5,
    name: 'Lomo de Cerdo',
    description: 'Corte magro y tierno. Ideal para chuletas y filetes.',
    price: 'Desde $15.000/kg',
    category: 'Corte Premium',
    image: 'placeholder',
    badge: 'Recomendado',
  },
  {
    id: 6,
    name: 'Chuleta de Cerdo',
    description: 'Chuletas frescas cortadas a la medida. Listas para cocinar.',
    price: 'Desde $13.500/kg',
    category: 'Corte Popular',
    image: 'placeholder',
    badge: null,
  },
  {
    id: 7,
    name: 'Panceta / Tocino',
    description: 'Panceta fresca con la perfecta proporción de carne y grasa.',
    price: 'Desde $11.000/kg',
    category: 'Corte Popular',
    image: 'placeholder',
    badge: null,
  },
  {
    id: 8,
    name: 'Carne Molida',
    description: 'Carne molida fresca diariamente. Perfecta para albóndigas y más.',
    price: 'Desde $10.000/kg',
    category: 'Procesado',
    image: 'placeholder',
    badge: null,
  },
];

const categories = ['Todos', 'Mayorista', 'Corte Premium', 'Corte Popular', 'Procesado'];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 industrial-pattern opacity-30" />
      
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-red-600/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 text-sm font-medium mb-6">
            <ShoppingCart className="w-4 h-4" />
            Nuestros Productos
          </div>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6" style={{ animationDelay: '0.1s' }}>
            CORTES DE <span className="text-red-500">PRIMERA CALIDAD</span>
          </h2>
          <p className="reveal opacity-0 text-gray-400 text-lg max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Ofrecemos una amplia variedad de cortes de cerdo frescos, procesados bajo 
            los más altos estándares de calidad e inocuidad alimentaria.
          </p>
        </div>

        {/* Category Filter */}
        <div className="reveal opacity-0 flex flex-wrap justify-center gap-3 mb-12" style={{ animationDelay: '0.3s' }}>
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                  : 'bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="reveal opacity-0 group relative bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-900/10"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                  {product.badge}
                </div>
              )}

              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent" />
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-red-500 font-bold text-lg">P360</span>
                </div>
                <p className="text-gray-500 text-xs text-center">
                  [ IMAGEN: {product.name.toUpperCase()} ]
                </p>
                <p className="text-gray-600 text-[10px] text-center mt-1">
                  Agrega tu foto aquí
                </p>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-red-500 font-medium">{product.category}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">{product.price}</span>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
                  >
                    Pedir
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="reveal opacity-0 mt-12 flex items-start gap-3 justify-center" style={{ animationDelay: '0.5s' }}>
          <Info className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-gray-400 text-sm text-center">
            Los precios pueden variar según la temporada y disponibilidad. 
            Contáctanos para cotizaciones al por mayor y precios especiales para distribuidores.
          </p>
        </div>
      </div>
    </section>
  );
}
