import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    // A classe 'min-h-screen' foi removida para que o cabeçalho não seja empurrado
    // para fora da tela. O 'pt-20' garante um espaçamento adequado no topo.
    <section id="inicio" className="bg-hero pt-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Manoel Armenteiro</span>
                <br />
                <span className="text-gradient">Diger Neto</span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-primary font-semibold">
                Gestor em Logística e Transportes com mais de 20 anos de experiência
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Especialista em liderança de equipes, gestão multirregional e otimização de operações, 
                com foco em eficiência e resultados. Atualmente, unindo experiência de gestão com 
                competências em tecnologia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                asChild
              >
                <a href="#projetos" className="flex items-center gap-2">
                  Ver Projetos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#contato" className="flex items-center gap-2">
                  Contato
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src="/profile-photo.png"
                  alt="Manoel Armenteiro Diger Neto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;