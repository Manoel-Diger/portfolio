import { MapPin, Users, TrendingUp, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: '+20 anos de experiência',
      description: 'Sólida trajetória no setor de logística e transportes.',
    },
    {
      icon: MapPin,
      title: 'Gestão Multirregional',
      description: 'Experiência em equipes e operações em BA, MT e PA.',
    },
    {
      icon: Users,
      title: 'Otimização de Processos',
      description: 'Especialista em redução de custos e eficiência operacional.',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Profissional com sólida trajetória no setor de transportes, atuando como gerente 
                administrativo, gerente de operações e coordenador de unidades em diferentes estados 
                do Brasil (BA, MT e PA). Experiência em liderança de equipes, análise de indicadores 
                e desenvolvimento de Procedimentos Operacionais Padronizados (POPs), transformando 
                ambientes desorganizados em operações eficientes, auditáveis e orientadas a resultados. 
                Atualmente agregando competências em tecnologia e análise de dados para potencializar 
                decisões estratégicas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/1wodVAPdsF9TXfupbUbrhlWrJbgOuICV5/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Baixar Currículo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;