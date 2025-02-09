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
import tutor1 from "../../../public/tutor2.jpg";
import tutor2 from "../../../public/tutor1.png";
import tutor3 from "../../../public/tutor3.jpg";
import tutor4 from "../../../public/tutor4.jpg";
import tutor5 from "../../../public/tutor5.jpg";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor1,
  },
  {
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    author: "Rafael",
    role: "Tutor do Thor (Bulldog Francês)",
    image: tutor2,
  },
  {
    content:
      "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Camila Fernandes",
    role: "Tutora da Mel e do Max",
    image: tutor3,
  },
  {
    content:
      "Levei meu coelho para uma consulta veterinária e fui surpreendida pelo atendimento excepcional. A veterinária foi muito atenciosa, explicou tudo com paciência e tirou todas as minhas dúvidas. Com certeza voltarei!",
    author: "Beatriz Lima",
    role: "Tutora do Pipoca (Coelho)",
    image: tutor4,
  },
  {
    content:
      "Adorei o serviço de adestramento! Meu cachorro aprendeu comandos básicos rapidamente e melhorou muito o comportamento dentro de casa. A equipe é muito profissional e usa técnicas respeitosas com os animais. Valeu cada centavo!",
    author: "Carlos Mendes",
    role: "Tutor do Rex (Pastor Alemão)",
    image: tutor5,
  },
];

export default testimonials;

export function Testimonils() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="bg-[#FFD449] py-16">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-12 text-center"
          data-aos="fade-left"
        >
          Depoimentos dos nossos clientes
        </h2>

        <div className="relative max-w-4xl mx-auto" data-aos="flip-up">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w px-3">
                  <article
                    className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex 
                  flex-col"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes="96px"
                          className="object-cover rounded-full"
                        />
                      </div>

                      <p className="text-gray-200">{item.content}</p>

                      <div>
                        <p className="font-bold">{item.author}</p>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
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
