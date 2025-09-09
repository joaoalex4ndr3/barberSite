import { useState } from "react"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Agendamento = () => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const { toast } = useToast();
  const formatPhone = (value: string) => {
      const numbers = value.replace(/\D/g, "");

  // Aplica máscara (xx) xxxxx-xxxx
  if (numbers.length <= 2) {
    return numbers;
  } else if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  } else if (numbers.length <= 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  } else {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  }
};

  const services = [
    { id: "barba", name: "Barba Completa", price: 45 },
    { id: "degrade", name: "Corte Degradê", price: 55 },
    { id: "social", name: "Corte Social", price: 35 },
    { id: "combo", name: "Corte + Barba", price: 90 },
    { id: "sobrancelha", name: "Design de Sobrancelha", price: 15 },
    { id: "pezinho", name: "Pezinho", price: 15 },
  ];

  const timeSlots = ["09:30", "11:00", "14:30", "15:00", "15:30"];

  const handleNext = () => {
    if (step === 1 && selectedServices.length === 0) {
      toast({
        title: "Selecione pelo menos um serviço",
        description: "Por favor, escolha os serviços desejados.",
        variant: "destructive",
      });
      return;
    }
    if (step === 2 && (!selectedDate || !selectedTime)) {
      toast({
        title: "Selecione data e horário",
        description: "Por favor, escolha uma data e horário.",
        variant: "destructive",
      });
      return;
    }
    if (step === 4 && (!userName || !phone)) {
      toast({
        title: "Preencha seus dados",
        description: "Nome e telefone são obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    setStep(step + 1);
  };

  const handleConfirm = () => {
    const appointmentData = {
      name: userName,
      phone,
      notes,
      services: selectedServices,
      date: selectedDate,
      time: selectedTime,
      total: totalPrice,
    };

    // 🔔 Aqui você vai integrar com seu back depois
    // Pode salvar o agendamento no banco e já agendar um job
    // que dispare SMS/email 30 minutos antes.
    console.log("Dados do agendamento:", appointmentData);

    toast({
      title: "Agendamento confirmado!",
      description:
        "Seu horário foi agendado com sucesso. Você receberá uma confirmação.",
    });

    // Reset form
    setStep(1);
    setSelectedServices([]);
    setSelectedDate(undefined);
    setSelectedTime("");
    setUserName("");
    setPhone("");
    setNotes("");
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const selectedServicesData = services.filter((s) =>
    selectedServices.includes(s.id)
  );
  const totalPrice = selectedServicesData.reduce((acc, s) => acc + s.price, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary">Agendamento</span> Online
          </h1>
          <p className="text-xl text-muted-foreground">
            Reserve seu horário em apenas 4 passos simples
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNum
                      ? "bg-primary text-black"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {step > stepNum ? <Check size={20} /> : stepNum}
                </div>
                {stepNum < 4 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step > stepNum ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="border-border shadow-dark">
          <CardHeader className="bg-gradient-dark">
            <CardTitle className="text-2xl text-center text-foreground">
              {step === 1 && "Escolha o Serviço"}
              {step === 2 && "Escolha a Data e Horário"}
              {step === 3 && "Resumo"}
              {step === 4 && "Seus Dados"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Step 1: Services */}
            {step === 1 && (
              <div className="space-y-4">
                {services.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => {
                        if (isChecked) {
                          setSelectedServices(
                            selectedServices.filter((id) => id !== service.id)
                          );
                        } else {
                          setSelectedServices([...selectedServices, service.id]);
                        }
                      }}
                      className={`w-full flex items-center justify-between p-4 border rounded-lg transition-colors cursor-pointer
                        ${isChecked ? "bg-secondary border-primary" : "hover:bg-secondary"}`}
                    >
                      <div className="flex items-center space-x-3">
                        <Checkbox checked={isChecked} />
                        <span className="font-medium">{service.name}</span>
                      </div>
                      <span className="text-primary font-bold">R$ {service.price}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Selecione a Data</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border border-border"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Selecione o Horário</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                        className="h-12"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Summary */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="text-sm text-muted-foreground">
                    {selectedDate
                      ? formatDate(selectedDate)
                      : "16 de setembro de 2025"}
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">Horário: {selectedTime}</div>
                    <div className="text-lg font-semibold">Atendimentos:</div>
                    <ul className="space-y-1">
                      {selectedServicesData.map((s) => (
                        <li key={s.id}>
                          {s.name} -{" "}
                          <span className="text-primary font-bold">R$ {s.price}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-primary mt-4">
                      Total: R$ {totalPrice}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: User Data */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Seu Nome</Label>
                  <input
                    id="name"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full mt-2 p-3 border rounded-lg bg-background text-foreground"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div>
  <Label htmlFor="phone">Telefone</Label>
  <input
    id="phone"
    type="tel"
    value={phone}
    onChange={(e) => setPhone(formatPhone(e.target.value))}
    maxLength={15} // garante que não passe do limite
    className="w-full mt-2 p-3 border rounded-lg bg-background text-foreground"
    placeholder="(11) 98765-4321"
  />
</div>

                <div>
                  <Label htmlFor="notes">Observações</Label>
                  <textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full mt-2 p-3 border rounded-lg bg-background text-foreground min-h-[100px]"
                    placeholder="Ex: Prefiro cabelo bem curto nas laterais..."
                  />
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
              >
                <ChevronLeft size={20} className="mr-2" />
                Voltar
              </Button>

              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  className="bg-gradient-gold text-black font-semibold"
                >
                  Próximo
                  <ChevronRight size={20} className="ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleConfirm}
                  className="bg-gradient-gold text-black font-semibold"
                >
                  Confirmar Agendamento
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Agendamento;
