import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { Scissors, Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import barberHero from "@/assets/gabriel.png";
import bgImage from "@/assets/cimento.jpg";   

const Home = () => {
  const services = [
    { name: "Barba Completa", price: "R$ 45", description: "Aparar e desenhar a barba" },
    { name: "Corte Degradê", price: "R$ 55", description: "Corte moderno e estiloso" },
    { name: "Corte Social", price: "R$ 35", description: "Corte clássico e elegante" },
    { name: "Corte + Barba", price: "R$ 90", description: "Combo completo para você" },
    { name: "Design de Sobrancelha", price: "R$ 15", description: "Design perfeito para seu rosto" },
    { name: "Pezinho", price: "R$ 15", description: "Acabamento preciso na nuca" },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }} // 👈 usa a variável importada
    >
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative flex items-end justify-center min-h-screen">
  <img 
    src={barberHero} 
    alt="Gabriel Rocha - Barbeiro Profissional" 
    className="max-h-[80vh] w-full object-contain"
  />
</section>





      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha o serviço perfeito para você. Todos os cortes são feitos 
              com técnica, precisão e produtos de qualidade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-gold transition-all duration-300 animate-fade-in border-border bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <span className="text-xl font-bold text-primary">{service.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-gold text-black font-semibold shadow-gold">
              <Link to="/agendamento">Agendar Agora</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-dark/90 backdrop-blur-sm rounded-2xl mx-4 mb-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">
            Pronto para um <span className="text-primary">Novo Visual?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Agende seu horário online de forma rápida e prática. 
            Escolha o melhor dia e horário para você.
          </p>
          <Button asChild size="lg" className="bg-gradient-gold text-black font-semibold shadow-gold">
            <Link to="/agendamento">Fazer Agendamento</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
