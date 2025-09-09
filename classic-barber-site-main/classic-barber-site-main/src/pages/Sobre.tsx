import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Award, Users, Clock, Scissors, Shield, Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import barberHero from "@/assets/barber-hero.jpg";

const Sobre = () => {
  const achievements = [
    {
      icon: Award,
      title: "Certificações",
      items: [
        "Técnico em Barbearia",
        "Curso de Cortes Modernos",
        "Workshop de Barbas e Bigodes",
      ],
    },
    {
      icon: Users,
      title: "Experiência",
      items: [
        "8+ anos de experiência",
        "Mais de 2000 clientes atendidos",
        "Especialista em cortes masculinos",
      ],
    },
    {
      icon: Star,
      title: "Reconhecimento",
      items: ["Avaliação 4.9/5", "Barbeiro do Ano 2023", "Melhor Atendimento da Região"],
    },
  ];

  const values = [
    {
      icon: Scissors,
      title: "Precisão",
      description: "Cada corte é executado com técnica apurada e atenção aos detalhes",
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "Ambiente seguro e higiênico, seguindo todos os protocolos de saúde",
    },
    {
      icon: Heart,
      title: "Paixão",
      description: "Amor genuíno pela arte da barbearia e satisfação do cliente",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-dark py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl lg:text-7xl font-black leading-none tracking-tight">
              Sobre{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-yellow-400 bg-clip-text">
                Mim
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                Meu nome é <span className="text-foreground font-semibold">Gabriel Rocha</span>, tenho 29 anos, sou barbeiro e pai de um filho incrível de 7 anos. Além de cuidar da minha família, sou proprietário da minha própria barbearia, onde recebo clientes todos os dias e busco oferecer cortes de cabelo e barba com qualidade e dedicação.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comecei a cortar cabelo aos 14 anos, inspirado pelo meu pai, que também era barbeiro. Desde aquele momento, percebi que a barbearia era minha verdadeira paixão, e desde então não parei mais de aprender, praticar e aperfeiçoar minhas técnicas para proporcionar a melhor experiência a cada cliente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-gold text-black font-bold shadow-2xl hover:shadow-gold/50 hover:scale-105 transition-all duration-300 rounded-xl px-8 py-4"
              >
                <Link to="/agendamento">Agendar Comigo</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/10 transition-all duration-300 rounded-xl px-8 py-4"
              >
                Ver Portfólio
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-yellow-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative">
              <img
                src={barberHero}
                alt="Gabriel Rocha - Barbeiro Profissional"
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto border-2 border-primary/20 hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute -top-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">Avaliação</div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meus <span className="text-primary">Valores</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam cada corte e cada atendimento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl hover:bg-card/50 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Minha <span className="text-primary">Trajetória</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ao longo dos anos, me dediquei a aperfeiçoar minha técnica e oferecer
              sempre o melhor serviço para meus clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group border-border/50 bg-gradient-to-br from-card/70 to-background/30 hover:from-card/70 hover:to-background/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 rounded-3xl overflow-hidden hover:scale-105"
              >
                <CardContent className="p-8 text-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-yellow-400"></div>

                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">
                    {achievement.title}
                  </h3>

                  <ul className="space-y-3">
                    {achievement.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-center justify-center">
                        <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
