import { Building, BarChart3, FileText, Monitor, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    {
      icon: Building,
      title: 'Gestão de Unidades e Operações',
      description: 'Liderança, planejamento estratégico, coordenação administrativa e logística.',
    },
    {
      icon: BarChart3,
      title: 'Indicadores de Performance',
      description: 'Criação, análise e acompanhamento de KPIs para tomada de decisão.',
    },
    {
      icon: FileText,
      title: 'Padronização de Processos',
      description: 'Desenvolvimento e implantação de POPs em diversas áreas (operacional, frota, RH, administrativo).',
    },
    {
      icon: Monitor,
      title: 'Excel & Power BI',
      description: 'Suporte estratégico em relatórios gerenciais e dashboards para otimização da gestão.',
    },
    {
      icon: Code,
      title: 'Programação Full Stack',
      description: 'Integração tecnológica aplicada à logística.',
    },
  ];

  return (
    <section id="habilidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Minhas <span className="text-gradient">Habilidades</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-4">
                     <div>
                        <h3 className="text-xl font-semibold mb-2 text-primary">
                          {skill.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;