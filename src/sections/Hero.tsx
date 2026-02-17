import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Truck, Award, Shield } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Años de Experiencia' },
  { value: '500+', label: 'Clientes Satisfechos' },
  { value: '50K+', label: 'Kg Procesados/Mes' },
];

const features = [
  { icon: Truck, text: 'Entrega a Domicilio' },
  { icon: Award, text: 'Calidad Premium' },
  { icon: Shield, text: '100% Garantizado' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 industrial-pattern opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a]/95 to-red-950/20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-800/10 rounded-full blur-3xl" />
      
      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500 to-transparent" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500 to-transparent" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="reveal opacity-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 text-sm font-medium">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Producción Porcina de Principio a Fin
              </span>
            </div>

            {/* Headline */}
            <div className="reveal opacity-0" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="text-white">CALIDAD</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  SIN LÍMITES
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <div className="reveal opacity-0" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
                Proveemos cerdo de la más alta calidad para consumo directo y reventa. 
                Atendemos restaurantes, carnicerías, supermercados y hogares en Mahates 
                y toda la región.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="reveal opacity-0 flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => scrollToSection('#productos')}
                className="group flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-red-600/25 hover:-translate-y-1"
              >
                Ver Productos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('#proceso')}
                className="group flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-700 hover:border-red-600 text-white font-bold rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Play className="w-5 h-5" />
                Conoce el Proceso
              </button>
            </div>

            {/* Features */}
            <div className="reveal opacity-0 flex flex-wrap gap-6 pt-4" style={{ animationDelay: '0.4s' }}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-400">
                  <feature.icon className="w-5 h-5 text-red-500" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="reveal opacity-0 relative" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-red-600/20 shadow-2xl shadow-red-900/20">
                {/* Placeholder for Hero Image */}
                <div className="aspect-square bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mb-6 animate-float">
                    <span className="text-white font-black text-3xl">P360</span>
                  </div>
                  <p className="text-gray-400 text-center text-sm mb-4">
                    [ ESPACIO PARA IMAGEN PRINCIPAL ]
                  </p>
                  <p className="text-gray-500 text-center text-xs">
                    Agrega aquí tu foto de producto destacado<br />o instalaciones
                  </p>
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 glass-effect rounded-xl p-4 shadow-xl">
                <div className="flex gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-black text-red-500">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-red-600/30 rounded-tr-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-red-600/30 rounded-bl-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
