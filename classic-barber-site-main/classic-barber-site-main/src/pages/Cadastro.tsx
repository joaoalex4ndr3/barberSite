import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import logoBlurBg from "@/assets/logo-blur-bg.png";
import logoImage from "@/assets/logo.png";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.cpf || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Bem-vindo ao Gabriel Rocha Barbearia. Agora você pode fazer login.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      cpf: "",
      phone: ""
    });
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url(${logoBlurBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <Card className="w-full max-w-md relative z-10 bg-white/20 border border-white/30 backdrop-blur-md rounded-xl shadow-lg">
  <CardHeader className="text-center space-y-2">
    <div className="flex justify-center">
      <img src={logoImage} alt="Gabriel Rocha" className="h-16 w-auto" />
    </div>
    <CardTitle className="text-xl font-semibold">Cadastre-se conosco!</CardTitle>
  </CardHeader>

  <CardContent className="space-y-4">
    <form className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Nome:</Label>
        <Input id="name" type="text" placeholder="John Doe" className="bg-white/80 rounded-md" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">E-mail:</Label>
        <Input id="email" type="email" placeholder="johndoe@gmail.com" className="bg-white/80 rounded-md" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="cpf">Cpf:</Label>
        <Input id="cpf" type="text" placeholder="123.456.789-00" className="bg-white/80 rounded-md" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="telefone">Telefone:</Label>
        <Input id="telefone" type="text" placeholder="(99)00000-0000" className="bg-white/80 rounded-md" />
      </div>

      <Button type="submit" className="w-full bg-gradient-gold text-black font-semibold shadow-gold">
        Cadastrar
      </Button>
    </form>

    <div className="text-center text-sm text-white/80">
      Já tem cadastro?{" "}
      <Link to="/login" className="text-white font-medium hover:underline">
        Faça login
      </Link>
    </div>
  </CardContent>
</Card>


      {/* Botão voltar para home */}
      <div className="relative z-10 mt-6">
  <Button
    asChild
    className="px-6 py-2 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
  >
    <Link to="/" className="flex items-center gap-2">
      <span className="text-lg">⬅</span>
      Voltar para Home
    </Link>
  </Button>
</div>

    </div>
  );
};

export default Cadastro;
