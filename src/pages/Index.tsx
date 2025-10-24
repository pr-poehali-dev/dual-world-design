import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeWorld, setActiveWorld] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const maxScroll = documentHeight - windowHeight;
      const progress = Math.min(scrollPosition / maxScroll, 1);
      
      setScrollProgress(progress);
      setActiveWorld(progress > 0.5 ? 'dark' : 'light');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWorld = (world: 'light' | 'dark') => {
    const targetScroll = world === 'dark' ? document.documentElement.scrollHeight : 0;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <Button
          onClick={() => scrollToWorld('light')}
          variant={activeWorld === 'light' ? 'default' : 'outline'}
          className="bg-light-world text-dark-world hover:bg-light-world/90 border-2 border-dark-world font-montserrat font-bold"
        >
          СВІТЛИЙ СВІТ
        </Button>
        <div className="w-12 h-12 relative">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-light-world to-dark-world rounded-full"
            style={{
              clipPath: `polygon(0 0, 100% 0, 100% ${scrollProgress * 100}%, 0 ${scrollProgress * 100}%)`
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-2xl animate-pulse-glow">
            ☯
          </div>
        </div>
        <Button
          onClick={() => scrollToWorld('dark')}
          variant={activeWorld === 'dark' ? 'default' : 'outline'}
          className="bg-dark-world text-light-world hover:bg-dark-world/90 border-2 border-light-world font-montserrat font-bold"
        >
          ТЕМНИЙ СВІТ
        </Button>
      </div>

      <section className="min-h-screen bg-light-world text-dark-world flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vibrant-red rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-8xl md:text-9xl font-montserrat font-black mb-8 tracking-tighter">
            СВІТЛО
          </h1>
          <p className="text-2xl md:text-3xl font-roboto mb-12 max-w-2xl mx-auto leading-relaxed">
            Тут панує порядок, ясність і гармонія. Світ, де кожна деталь на своєму місці.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 border-4 border-dark-world transition-transform hover:scale-105">
              <Icon name="Sun" size={48} className="mx-auto mb-4 text-vibrant-red" />
              <h3 className="text-2xl font-montserrat font-bold mb-2">Енергія</h3>
              <p className="font-roboto">Безмежна сила створення</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 border-4 border-dark-world transition-transform hover:scale-105">
              <Icon name="Lightbulb" size={48} className="mx-auto mb-4 text-electric-cyan" />
              <h3 className="text-2xl font-montserrat font-bold mb-2">Ідеї</h3>
              <p className="font-roboto">Народження нового</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 border-4 border-dark-world transition-transform hover:scale-105">
              <Icon name="Zap" size={48} className="mx-auto mb-4 text-vibrant-red" />
              <h3 className="text-2xl font-montserrat font-bold mb-2">Дія</h3>
              <p className="font-roboto">Рух вперед без зупинок</p>
            </div>
          </div>

          <div className="mt-16">
            <Button
              onClick={() => scrollToWorld('dark')}
              className="bg-dark-world text-light-world hover:bg-dark-world/90 px-12 py-6 text-xl font-montserrat font-bold border-4 border-dark-world"
            >
              ВІДКРИТИ ТЕМНИЙ СВІТ
              <Icon name="ArrowDown" className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <div className="h-screen bg-gradient-to-b from-light-world to-dark-world relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-9xl animate-pulse-glow">☯</div>
        </div>
      </div>

      <section className="min-h-screen bg-dark-world text-light-world flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-vibrant-red rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-electric-cyan rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-8xl md:text-9xl font-montserrat font-black mb-8 tracking-tighter">
            ТІНЬ
          </h1>
          <p className="text-2xl md:text-3xl font-roboto mb-12 max-w-2xl mx-auto leading-relaxed">
            Глибина, таємниця і спокій. Місце, де народжуються мрії та інтуїція.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-black/80 backdrop-blur-sm p-8 border-4 border-light-world transition-transform hover:scale-105">
              <Icon name="Moon" size={48} className="mx-auto mb-4 text-electric-cyan" />
              <h3 className="text-2xl font-montserrat font-bold mb-2">Спокій</h3>
              <p className="font-roboto">Тиша для роздумів</p>
            </div>

            <div className="bg-black/80 backdrop-blur-sm p-8 border-4 border-light-world transition-transform hover:scale-105">
              <Icon name="Eye" size={48} className="mx-auto mb-4 text-vibrant-red" />
              <h3 className="text-2xl font-montserrat font-bold mb-2">Інтуїція</h3>
              <p className="font-roboto">Внутрішнє знання</p>
            </div>

            <div className="bg-black/80 backdrop-blur-sm p-8 border-4 border-light-world transition-transform hover:scale-105">
              <Icon name="Brain" size={48} className="mx-auto mb-4 text-electric-cyan" />
              <h3 className="text-2xl font-montserrat font-bold mb-2">Мудрість</h3>
              <p className="font-roboto">Глибоке розуміння</p>
            </div>
          </div>

          <div className="mt-16">
            <Button
              onClick={() => scrollToWorld('light')}
              className="bg-light-world text-dark-world hover:bg-light-world/90 px-12 py-6 text-xl font-montserrat font-bold border-4 border-light-world"
            >
              ПОВЕРНУТИСЬ ДО СВІТЛА
              <Icon name="ArrowUp" className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-light-world via-gray-500 to-dark-world py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">☯</div>
          <h2 className="text-3xl font-montserrat font-bold mb-4 bg-gradient-to-r from-dark-world to-light-world bg-clip-text text-transparent">
            ПАРАЛЛЕЛЬНІ СВІТИ
          </h2>
          <p className="font-roboto text-lg text-gray-700">
            Баланс протилежностей — ключ до гармонії
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
