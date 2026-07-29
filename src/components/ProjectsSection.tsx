import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Análise de Transporte',
      description: 'Análise completa de operações de transporte, controle de entregas, custos e gestão de fretes por transportadora.',
      iframe: 'https://app.powerbi.com/view?r=eyJrIjoiYmVlMjYwNGUtMjQyMC00YWRmLTliY2EtMTk5MmQ3ODk2ZDVlIiwidCI6IjAxOTZiNzIwLTk5MzMtNGI1Yi1iNzRiLTljMDU0YjFkNGI2YSJ9',
      type: 'dashboard'
    },
    {
      title: 'Análise de Performance Financeira (DRE)',
      description: 'Análise de Receitas, Custos e Lucratividade.',
      iframe: 'https://app.powerbi.com/view?r=eyJrIjoiYzRmZDM2ODUtZGNhOC00NGU1LTljYzQtOWI4YzA2N2E4NzRhIiwidCI6IjAxOTZiNzIwLTk5MzMtNGI1Yi1iNzRiLTljMDU0YjFkNGI2YSJ9',
      type: 'dashboard'
    },
    {
      title: 'Análise da Satisfação do Cliente',
      description: 'Análise da Satisfação do Cliente e Feedback para identificar oportunidades de melhoria.',
      iframe: 'https://app.powerbi.com/view?r=eyJrIjoiMzVhMTY4ZDUtYzQxMC00NzlkLWJmZmItZmZjZTMwZGJhNDY2IiwidCI6IjAxOTZiNzIwLTk5MzMtNGI1Yi1iNzRiLTljMDU0YjFkNGI2YSJ9',
      type: 'dashboard'
    },
    {
      title: 'Dashboard de RH em Power BI',
      description: 'Análise de perfil de colaboradores, custos de salários e distribuição por cargo e setor.',
      iframe: 'https://app.powerbi.com/view?r=eyJrIjoiZWFiMTEzZDUtOGQxNi00NzY3LWFlMzUtOGVlMzBhNzE2YWIzIiwidCI6IjAxOTZiNzIwLTk5MzMtNGI1Yi1iNzRiLTljMDU0YjFkNGI2YSJ9',
      type: 'dashboard'
    },
    {
      title: 'Loja Virtual Mdpizza (Full Stack)',
      description: 'Plataforma completa de e-commerce com carrinho de compras, sistema de pedidos e gerenciamento de banco de dados, demonstrando o ciclo completo de desenvolvimento web.',
      github: 'https://github.com/Manoel-Diger/Mdpizza.git',
      type: 'fullstack'
    },
    { 
      title: 'Gestão de Frota',
      description: 'Sistema completo de gestão de frotas, com dashboard dinâmico e módulos para cadastro de veículos, motoristas, manutenções e relatórios. Desenvolvido com React, TypeScript, Tailwind e Shadcn/UI, e integrado a um back-end responsável pelo armazenamento e tratamento dos dados. O projeto encontra-se em fase de desenvolvimento, com os últimos ajustes sendo realizados.',
      vercel: 'https://gestao-frota-chi.vercel.app/',
      github: 'https://github.com/Manoel-Diger/gestao-frota/',
      type: 'frontend'
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meus <span className="text-gradient">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 group overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="p-0">
                  {project.type === 'dashboard' && project.iframe ? (
                    <>
                      <div className="relative aspect-video bg-muted/50">
                        <iframe 
                          title={project.title}
                          width="100%" 
                          height="100%" 
                          src={project.iframe}
                          frameBorder="0" 
                          allowFullScreen
                          className="absolute inset-0"
                        />
                      </div>
                      <div className="p-6 pt-0">
                        <div className="flex gap-4">
                          <Button 
                            variant="outline"
                            size="sm"
                            className="border-primary/50 text-primary hover:bg-primary/10"
                            asChild
                          >
                            <a 
                              href={project.iframe} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Abrir Dashboard
                            </a>
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-6 pt-0">
                      <div className="flex gap-4">
                        {project.github && (
                          <Button 
                            variant="outline"
                            size="sm"
                            className="border-primary/50 text-primary hover:bg-primary/10"
                            asChild
                          >
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              GitHub
                            </a>
                          </Button>
                        )}
                        {project.vercel && (
                          <Button 
                            variant="outline"
                            size="sm"
                            className="border-primary/50 text-primary hover:bg-primary/10"
                            asChild
                          >
                            <a 
                              href={project.vercel} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Abrir Projeto
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;