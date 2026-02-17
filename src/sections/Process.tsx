import { useEffect, useRef } from 'react';
import { CheckCircle2, ClipboardCheck, Truck, Factory, Wheat, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Wheat,
    title: 'Alimentación',
    description: 'Nuestros cerdos reciben una dieta balanceada y nutritiva, formulada por expertos en nutrición animal para garantizar su salud y desarrollo óptimo.',
    features: ['Dietas balanceadas', 'Sin hormonas artificiales', 'Control nutricional'],
  },
  {
    number: '02',
    icon: Factory,
    title: 'Crianza',
    description: 'Contamos con instalaciones modernas diseñadas para el bienestar animal, con control de temperatura, ventilación y espacios adecuados.',
    features: ['Instalaciones modernas', 'Bienestar animal', 'Monitoreo 24/7'],
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Control de Calidad',
    description: 'Cada animal pasa por rigurosos controles veterinarios y de calidad antes del procesamiento, garantizando productos seguros y saludables.',
    features: ['Veterinario permanente', 'Controles diarios', 'Trazabilidad total'],
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Procesamiento',
    description: 'Nuestra planta de procesamiento cumple con todas las normativas sanitarias. Utilizamos tecnología moderna para garantizar la inocuidad.',
    features: ['Planta certificada', 'Tecnología moderna', 'Higiene garantizada'],
  },
  {
    number: '05',
    icon: Truck,
    title: 'Distribución',
    description: 'Contamos con vehículos refrigerados que garantizan la cadena de frío desde nuestras instalaciones hasta tu negocio o hogar.',
    features: ['Vehículos refrigerados', 'Cadena de frío', 'Entrega puntual'],
  },
];

const certifications = [
  'Invima',
  'BPM (Buenas Prácticas de Manufactura)',
  'Certificación en Inocuidad Alimentaria',
  'Registro ICA',
];

export default function Process() {
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
      id="proceso"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 industrial-pattern opacity-30" />
      
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 text-sm font-medium mb-6">
            <Factory className="w-4 h-4" />
            Nuestro Proceso
          </div>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6" style={{ animationDelay: '0.1s' }}>
            DE LA GRANJA A <span className="text-red-500">TU MESA</span>
          </h2>
          <p className="reveal opacity-0 text-gray-400 text-lg max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Controlamos cada etapa del proceso productivo para garantizar 
            la máxima calidad e inocuidad en nuestros productos.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`reveal opacity-0 relative ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-black text-red-600/20">{step.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-900 text-gray-400 text-sm rounded-full border border-zinc-800"
                      >
                        <CheckCircle2 className="w-3 h-3 text-red-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col items-center justify-center p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent" />
                    <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                      <step.icon className="w-10 h-10 text-red-500/50" />
                    </div>
                    <p className="text-gray-500 text-sm text-center">
                      [ IMAGEN: {step.title.toUpperCase()} ]
                    </p>
                    <p className="text-gray-600 text-xs text-center mt-1">
                      Agrega tu foto aquí
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex justify-center py-8">
                  <div className="w-px h-12 bg-gradient-to-b from-red-600/50 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal opacity-0 mt-20" style={{ animationDelay: '0.6s' }}>
          <div className="glass-effect rounded-2xl p-8 border border-red-600/20">
            <h3 className="text-xl font-bold text-white text-center mb-6">
              Certificaciones y Regulaciones
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg"
                >
                  <ShieldCheck className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
