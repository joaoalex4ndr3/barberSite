import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import logoBlurBg from "@/assets/logo-blur-bg.png";
import logoImage from "@/assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Login realizado com sucesso!",
      description: "Bem-vindo de volta ao Gabriel Rocha Barbearia.",
    });
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url(${logoBlurBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <Card className="w-full max-w-md relative z-10 bg-white/20 border border-white/30 backdrop-blur-md rounded-xl shadow-lg">
  <CardHeader className="text-center space-y-4">
    <div className="flex justify-center">
      <img 
        src={logoImage} 
        alt="Gabriel Rocha" 
        className="h-16 w-auto"
      />
    </div>
    <CardTitle className="text-2xl font-semibold">Faça já o seu login!</CardTitle>
  </CardHeader>
  
  <CardContent className="space-y-6">
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">E-mail:</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu.email@exemplo.com"
          className="bg-white/80 rounded-md"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Senha:</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sua senha"
          className="bg-white/80 rounded-md"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gradient-gold text-black font-semibold shadow-gold"
      >
        Entrar
      </Button>
    </form>
    
    <div className="text-center text-sm text-white/80">
      Não tem cadastro?{" "}
      <Link 
        to="/cadastro" 
        className="text-white font-medium hover:underline"
      >
        Cadastre-se
      </Link>
    </div>
  </CardContent>
</Card>

    </div>
  );
};

export default Login;
