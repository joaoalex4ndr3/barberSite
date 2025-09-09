import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Loja", href: "/" },
    { name: "Agendamento", href: "/agendamento" },
    { name: "Serviços", href: "/servicos" },
    { name: "Sobre Mim", href: "/sobre" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const firstPart = navItems.slice(0, 2);
  const secondPart = navItems.slice(2);

  // Detecta scroll
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-card border-b border-border fixed w-full top-0 left-0 transition-transform duration-300 z-50 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8 w-full justify-center">
            {firstPart.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Logo no meio */}
            <Link to="/" className="flex-shrink-0 mx-4">
              <img className="h-20 w-auto" src={logoImage} alt="Gabriel Rocha" />
            </Link>

            {secondPart.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botão Entrar no desktop */}
          <div className="hidden md:flex items-center ml-auto">
            <Link to="/login">
              <Button
                size="sm"
                className="border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-colors"
              >
                Entrar
              </Button>
            </Link>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden flex items-center ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary bg-secondary"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Botão Entrar no mobile */}
            <Link to="/login">
              <Button className="w-full mt-2 border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-colors">
                Entrar
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
