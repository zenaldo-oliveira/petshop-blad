"use client";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";
import { PawPrint, WhatsappLogo } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Banho & Tosa",
    description:
      "Higienização completa com produtos específicos para cada tipo de pelagem e pele. Inclui corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    price: "R$ 250,00",
    duration: "1h 30min",
    icon: <Scissors className="w-8 h-8 text-white" data-aos="flip-up" />,
  },
  {
    title: "Consulta Veterinária",
    description:
      "Atendimento clínico especializado para avaliação da saúde do seu pet. Inclui diagnóstico, prescrição de tratamentos e aplicação de vacinas obrigatórias.",
    price: "R$ 300,00",
    duration: "45min",
    icon: <Syringe className="w-8 h-8 text-white" data-aos="flip-up" />,
  },
  {
    title: "Táxi Pet",
    description:
      "Transporte seguro e confortável para levar e buscar seu pet em petshops, clínicas veterinárias ou qualquer outro local necessário.",
    price: "R$ 150,00",
    duration: "1h",
    icon: <CarTaxiFront className="w-8 h-8 text-white" data-aos="flip-up" />,
  },
  {
    title: "Hospedagem Pet",
    description:
      "Ambiente seguro, aconchegante e monitorado para seu pet. Serviço completo com alimentação, atividades recreativas e acompanhamento veterinário.",
    price: "R$ 200,00",
    duration: "Diária",
    icon: <Hotel className="w-8 h-8 text-white" data-aos="flip-up" />,
  },
  {
    title: "Adestramento Profissional",
    description:
      "Treinamento personalizado com técnicas avançadas para reforço positivo e correção de comportamentos. Sessões individuais adaptadas às necessidades do seu pet.",
    price: "R$ 1.200,00",
    duration: "1h por sessão",
    icon: <PawPrint className="w-8 h-8 text-white" data-aos="flip-up" />,
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4" data-aos="fade-right">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative" data-aos="fade-right">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3"
                >
                  <article
                    className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col"
                    data-aos="fade-left"
                  >
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-3xl my-1">
                            {item.title}
                          </h3>
                          <p
                            className="text-gray-400 text-sm select-none"
                            data-aos="fade-left"
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-600 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-5 h-5" />
                        <span>{item.duration}</span>
                      </div>

                      <a
                        target="_blank"
                        href={`https://wa.me/5565992832458?text=Olá vim pelo site e gostaria de mais inforções sobre ${item.title}`}
                        className="flex items-center justify-center gap-2 hover:bg-red-600 border-solid m-1 px-4 py-1 rounded-md duration-300"
                      >
                        <WhatsappLogo className="w-5 h-5 text-green-400" />
                        Entrar em Contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
            aria-label="Voltar"
            title="Voltar"
          >
            <ChevronLeft className="w-6 h-6 text-gray-400" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
            aria-label="Avançar"
            title="Avançar"
          >
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
