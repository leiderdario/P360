import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, ShoppingCart } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickMessages = [
    { label: 'Cotizar Productos', message: 'Hola, quisiera cotizar algunos productos.' },
    { label: 'Hacer un Pedido', message: 'Hola, quisiera hacer un pedido.' },
    { label: 'Información General', message: 'Hola, tengo algunas preguntas sobre sus productos.' },
  ];

  const handleQuickMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/573012448766?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Actions Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 animate-fadeIn">
          <div className="bg-zinc-900 rounded-xl shadow-xl border border-zinc-800 overflow-hidden min-w-[200px]">
            <div className="p-3 bg-gradient-to-r from-green-600 to-green-700">
              <p className="text-white text-sm font-medium">¿En qué podemos ayudarte?</p>
            </div>
            <div className="p-2 space-y-1">
              {quickMessages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickMessage(item.message)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-300 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors text-sm"
                >
                  {index === 0 && <ShoppingCart className="w-4 h-4" />}
                  {index === 1 && <MessageCircle className="w-4 h-4" />}
                  {index === 2 && <Phone className="w-4 h-4" />}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-zinc-800 rotate-45' 
            : 'bg-green-500 hover:bg-green-600 animate-pulse-red'
        }`}
        aria-label="WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
        
        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-zinc-800">
            Chatea con nosotros
            <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-900 border-r border-b border-zinc-800 rotate-[-45deg]" />
          </span>
        )}
      </button>
    </div>
  );
}
