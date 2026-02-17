import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono / WhatsApp',
    content: '+57 301 244 8766',
    action: 'tel:+573012448766',
    actionText: 'Llamar Ahora',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    content: 'Mahates, Bolívar, Colombia',
    action: 'https://maps.google.com/?q=Mahates,Bolivar,Colombia',
    actionText: 'Ver en Mapa',
  },
  {
    icon: Clock,
    title: 'Horario de Atención',
    content: 'Lun - Vie: 6:00 AM - 6:00 PM\nSáb: 6:00 AM - 2:00 PM',
    action: null,
    actionText: null,
  },
  {
    icon: Mail,
    title: 'Correo Electrónico',
    content: 'ventas@porc360.com',
    action: 'mailto:ventas@porc360.com',
    actionText: 'Enviar Correo',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 industrial-pattern opacity-30" />
      
      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Contáctanos
          </div>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6" style={{ animationDelay: '0.1s' }}>
            HAZ TU <span className="text-red-500">PEDIDO</span> HOY
          </h2>
          <p className="reveal opacity-0 text-gray-400 text-lg max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Estamos listos para atenderte. Contáctanos por WhatsApp, teléfono o 
            completa el formulario y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="reveal opacity-0 grid sm:grid-cols-2 gap-4" style={{ animationDelay: '0.3s' }}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-5 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-red-600/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                    <info.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{info.title}</h3>
                  <p className="text-gray-400 text-sm whitespace-pre-line mb-3">{info.content}</p>
                  {info.action && (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
                    >
                      {info.actionText}
                      <Send className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="reveal opacity-0 p-6 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-xl border border-red-600/30" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 animate-pulse-red">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">¿Prefieres WhatsApp?</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Escríbenos directamente para una respuesta más rápida
                  </p>
                  <a
                    href="https://wa.me/573012448766"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Abrir WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="p-6 lg:p-8 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-gray-400">
                    Te contactaremos pronto. Gracias por escribirnos.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Nombre Completo <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-600 focus:ring-red-600/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">
                        Teléfono <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="300 123 4567"
                        className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-600 focus:ring-red-600/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Correo Electrónico
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-600 focus:ring-red-600/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Mensaje <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos qué necesitas..."
                      rows={4}
                      className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-600 focus:ring-red-600/20 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 h-auto transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
