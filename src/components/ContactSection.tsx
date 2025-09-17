import { MessageCircle, Mail, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '(73) 99183-6588',
      href: 'https://wa.me/5573991836588',
      color: 'text-green-400',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'armenteiromanoel@gmail.com',
      href: 'mailto:armenteiromanoel@gmail.com',
      color: 'text-blue-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'manoel-diger', // Alteração opcional, mas recomendada
      href: 'https://www.linkedin.com/in/manoel-diger', // <-- URL atualizada aqui
      color: 'text-blue-600',
    },
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Estou disponível para oportunidades. Entre em contato para conversarmos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-primary group-hover:shadow-glow transition-all duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {method.label}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {method.value}
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      Entrar em contato
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Vamos trabalhar juntos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Estou sempre aberto a discutir novas oportunidades, projetos interessantes 
                e parcerias estratégicas. Entre em contato e vamos conversar!
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/5573991836588" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Conversar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;