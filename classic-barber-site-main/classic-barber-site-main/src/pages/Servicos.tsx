import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

import barberImage from "@/assets/barba_img.jpg";
import haircutImage from "@/assets/navalhinha_img.jpg";
import completeImage from "@/assets/bigode_img.jpg";
import mustacheImage from "@/assets/tudo_img.jpg";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "BARBA COMPLETA",
    description:
      "A barba bem cuidada transforma o visual. No serviço de Barba Completa, faço o alinhamento dos fios, aparo no estilo desejado e finalizo com hidratação e acabamento preciso, garantindo conforto e um visual impecável.",
    image: barberImage,
  },
  {
    id: 2,
    title: "CORTE MASCULINO",
    description:
      "Corte moderno e personalizado para cada cliente. Utilizo técnicas atuais e clássicas para criar o visual perfeito que combina com seu estilo de vida, sempre com acabamento profissional e atenção aos detalhes.",
    image: haircutImage,
  },
  {
    id: 3,
    title: "CORTE + BARBA",
    description:
      "O combo completo para quem busca praticidade e estilo. Corte de cabelo moderno combinado com barba alinhada e bem cuidada. Um visual completo e harmonioso em um só atendimento.",
    image: completeImage,
  },
  {
    id: 4,
    title: "BIGODE ESTILIZADO",
    description:
      "Cuidado especializado para bigodes. Aparo, modelagem e finalização com produtos específicos. Seja clássico ou moderno, deixo seu bigode com o formato ideal e bem definido.",
    image: mustacheImage,
  },
];

export const ServiceSection: React.FC = () => {
  const [currentService, setCurrentService] = useState(0);

  const handlePrevious = () => {
    setCurrentService((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const current = services[currentService];

  return (
    <div className="relative min-h-screen bg-barbershop-concrete bg-gradient-to-br from-barbershop-concrete to-barbershop-dark overflow-hidden">
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Service indicators */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentService(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentService
                ? "bg-barbershop-accent scale-125"
                : "bg-barbershop-text-light/30 hover:bg-barbershop-text-light/50"
            }`}
          />
        ))}
      </div>

      {/* Animated Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current.id}-${currentService}`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Service image + Hover navigation */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative group w-80 h-80">
                <div
                  className="w-full h-full rounded-full overflow-hidden border-4 border-barbershop-text-light/20 shadow-2xl transition-all duration-500 group-hover:border-barbershop-text-light/40 group-hover:shadow-3xl group-hover:scale-105"
                  style={{
                    background: `url(${current.image}) center/cover`,
                  }}
                />

                {/* Left hover zone */}
                <div
                  onClick={handlePrevious}
                  className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-start pl-4 cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-barbershop-dark/60 rounded-full p-2"
                  >
                    <ChevronLeft className="w-6 h-6 text-barbershop-text-light" />
                  </motion.div>
                </div>

                {/* Right hover zone */}
                <div
                  onClick={handleNext}
                  className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-end pr-4 cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-barbershop-dark/60 rounded-full p-2"
                  >
                    <ChevronRight className="w-6 h-6 text-barbershop-text-light" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Service content */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-barbershop-text-light tracking-wider hover:text-barbershop-accent transition-colors duration-300">
                {current.title}
              </h1>

              <p className="text-lg lg:text-xl text-barbershop-text-light/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {current.description}
              </p>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="group bg-barbershop-dark/80 text-barbershop-text-light border border-barbershop-text-light/30 hover:bg-barbershop-text-light/10 hover:border-barbershop-text-light/50 px-12 py-3 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-barbershop-accent/20"
                >
                  <span className="group-hover:text-barbershop-accent transition-colors duration-300">
                    Agendar
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceSection;
