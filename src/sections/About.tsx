import { useEffect, useRef } from 'react';
import { Target, Eye, Heart, Users, TrendingUp, Leaf } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Pasión',
    description: 'Amamos lo que hacemos y nos esforzamos cada día por ofrecer lo mejor.',
  },
  {
    icon: Target,
    title: 'Compromiso',
    description: 'Cumplimos con los más altos estándares de calidad e inocuidad.',
  },
  {
    icon: Users,
    title: 'Servicio',
    description: 'Atención personalizada y asesoría experta para cada cliente.',
  },
  {
    icon: TrendingUp,
    title: 'Mejora Continua',
    description: 'Innovamos constantemente para superar las expectativas.',
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad',
    description: 'Prácticas responsables con el medio ambiente y el bienestar animal.',
  },
];

const milestones = [
  { year: '2014', event: 'Fundación de PORC360 Cárnico' },
  { year: '2017', event: 'Expansión a restaurantes y hoteles' },
  { year: '2020', event: 'Certificación en inocuidad alimentaria' },
  { year: '2023', event: 'Lanzamiento de línea de exportación' },
];

export default function About() {
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
      id="nosotros"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8f928f] via-zinc-950 to-[#8a6e6e]" />
      <div className="absolute inset-0 industrial-pattern opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-800/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Sobre Nosotros
          </div>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6" style={{ animationDelay: '0.1s' }}>
            MÁS DE <span className="text-red-500">10 AÑOS</span> DE EXPERIENCIA
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Side */}
          <div className="reveal opacity-0 relative" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col items-center justify-center p-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mb-4">
                  <span className="text-white font-black text-2xl">P360</span>
                </div>
                <p className="text-gray-400 text-center mb-2">[ ESPACIO PARA FOTO ]</p>
                <p className="text-gray-500 text-center text-sm">
                  Instalaciones / Equipo / Granja
                </p>
              </div>
              
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-red-600/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-red-600/30 rounded-tl-xl" />
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-8 glass-effect rounded-xl p-4 shadow-xl hidden sm:block">
              <div className="text-center">
                <div className="text-3xl font-black text-red-500">10+</div>
                <div className="text-xs text-gray-400">Años de Experiencia</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="reveal opacity-0" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Producción Porcina de Principio a Fin
              </h3>
              <p className="text-gray-400 leading-relaxed">
                En <span className="text-red-500 font-semibold">PORC360 Cárnico</span> somos una empresa 
                dedicada a la producción y comercialización de carne de cerdo de la más alta calidad. 
                Controlamos todo el proceso productivo, desde la cría hasta la entrega final, 
                garantizando frescura, sabor y seguridad en cada corte.
              </p>
            </div>

            <div className="reveal opacity-0" style={{ animationDelay: '0.4s' }}>
              <p className="text-gray-400 leading-relaxed">
                Nuestra ubicación estratégica en <span className="text-white">Mahates</span> nos permite 
                atender eficientemente a clientes en toda la región, desde pequeños comercios hasta 
                grandes cadenas de restaurantes y supermercados.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="reveal opacity-0 grid sm:grid-cols-2 gap-4 pt-4" style={{ animationDelay: '0.5s' }}>
              <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                <Target className="w-8 h-8 text-red-500 mb-3" />
                <h4 className="text-white font-bold mb-2">Misión</h4>
                <p className="text-gray-400 text-sm">
                  Producir y distribuir carne de cerdo de excelente calidad, 
                  superando las expectativas de nuestros clientes.
                </p>
              </div>
              <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                <Eye className="w-8 h-8 text-red-500 mb-3" />
                <h4 className="text-white font-bold mb-2">Visión</h4>
                <p className="text-gray-400 text-sm">
                  Ser líderes regionales en la producción porcina, 
                  reconocidos por calidad, innovación y servicio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="reveal opacity-0 mb-20" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-xl font-bold text-white text-center mb-8">Nuestra Historia</h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border-2 border-red-600 mb-3 relative z-10">
                    <span className="text-red-500 font-bold text-sm">{milestone.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="reveal opacity-0 text-xl font-bold text-white text-center mb-8" style={{ animationDelay: '0.7s' }}>
            Nuestros Valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="reveal opacity-0 p-5 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-red-600/30 transition-all duration-300 group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <value.icon className="w-8 h-8 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
