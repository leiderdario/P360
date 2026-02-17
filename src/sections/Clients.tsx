import { useEffect, useRef } from 'react';
import { Building2, Store, Home, Utensils, Quote, Star } from 'lucide-react';

const clientTypes = [
  {
    icon: Utensils,
    title: 'Restaurantes',
    description: 'Cortes premium para menús de alta calidad. Entregas programadas según tus necesidades.',
    benefits: ['Precios especiales', 'Entregas diarias', 'Cortes personalizados'],
  },
  {
    icon: Store,
    title: 'Carnicerías',
    description: 'Mayoristas y minoristas. Productos frescos todos los días para tu negocio.',
    benefits: ['Mayoreo', 'Crédito disponible', 'Atención prioritaria'],
  },
  {
    icon: Building2,
    title: 'Supermercados',
    description: 'Suministro constante con estándares de calidad y presentación para retail.',
    benefits: ['Volumen garantizado', 'Empaque especial', 'Trazabilidad'],
  },
  {
    icon: Home,
    title: 'Hogares',
    description: 'Compra directa para tu familia. La misma calidad que los restaurantes en tu casa.',
    benefits: ['Compra mínima baja', 'Entrega a domicilio', 'Asesoría de cortes'],
  },
];

const testimonials = [
  {
    name: 'Carlos Martínez',
    role: 'Dueño de Restaurante',
    content: 'La calidad de la carne de PORC360 es excepcional. Nuestros clientes siempre elogian los cortes de cerdo. El servicio de entrega es puntual y confiable.',
    rating: 5,
  },
  {
    name: 'María González',
    role: 'Carnicería La Familia',
    content: 'Llevamos 3 años trabajando con ellos. Siempre cumplen con la calidad y los tiempos de entrega. Son nuestro proveedor principal de cerdo.',
    rating: 5,
  },
  {
    name: 'Juan Pérez',
    role: 'Chef Ejecutivo',
    content: 'Como chef, valoro mucho la consistencia en la calidad. PORC360 nunca me ha decepcionado. Sus cortes premium son de nivel internacional.',
    rating: 5,
  },
];

const stats = [
  { value: '500+', label: 'Clientes Activos' },
  { value: '98%', label: 'Satisfacción' },
  { value: '24h', label: 'Tiempo de Entrega' },
  { value: '100%', label: 'Producto Fresco' },
];

export default function Clients() {
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
      id="clientes"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6a6b6a] via-gray-900 to-[#646363]" />
      <div className="absolute inset-0 industrial-pattern opacity-20" />
      
      {/* Decorative */}
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Nuestros Clientes
          </div>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6" style={{ animationDelay: '0.1s' }}>
            ATENDEMOS A <span className="text-red-500">TODO TIPO</span> DE NEGOCIOS
          </h2>
          <p className="reveal opacity-0 text-gray-400 text-lg max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Desde pequeños hogares hasta grandes cadenas, tenemos la solución 
            perfecta para tus necesidades de carne de cerdo.
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {clientTypes.map((type, index) => (
            <div
              key={index}
              className="reveal opacity-0 group p-6 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center mb-5 group-hover:bg-red-600/20 transition-colors">
                <type.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{type.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-center gap-2 text-gray-500 text-xs">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="reveal opacity-0 grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20" style={{ animationDelay: '0.4s' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-zinc-900/30 rounded-xl border border-zinc-800"
            >
              <div className="text-3xl lg:text-4xl font-black text-red-500 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="reveal opacity-0 text-xl font-bold text-white text-center mb-8" style={{ animationDelay: '0.5s' }}>
            Lo que Dicen Nuestros Clientes
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="reveal opacity-0 p-6 bg-zinc-900/50 rounded-xl border border-zinc-800 relative"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-red-600/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-red-500 fill-red-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
