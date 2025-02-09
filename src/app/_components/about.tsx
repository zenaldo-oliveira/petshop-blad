import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPinIcon } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-5 mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              className="relative w-full h-[400px] rounded-3xl overflow-hidden"
              data-aos="fade-right"
            >
              <Image
                src={about1Img}
                alt="foto do cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>

            <div
              className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white"
              data-aos="fade-up-left"
            >
              <Image
                src={about2Img}
                alt="foto do gato"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left">
            <h2 className="text-4xl font-bold">Sobre</h2>
            <p data-aos="fade-up-left">
              Até que alguém ame um animal, parte de sua alma permanece
              adormecida. Acreditamos nisso e acreditamos no acesso fácil a
              coisas que fazem bem à nossa mente, corpo e espírito. Com uma
              oferta inteligente, excelente suporte e checkout seguro, você está
              em boas mãos.
            </p>

            {/* Lista unificada */}
            <ul className="space-y-4" data-aos="flip-left">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2004.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            {/* Botões melhorados */}
            <div className="flex gap-4">
              <a
                target="_blank"
                href={`https://wa.me/5565992832458?text=Olá vim pelo site e gostaria de mais inforções`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit
                gap-2 px-4 py-2 border-4 rounded-md transition hover:bg-red-600"
              >
                <WhatsappLogo className="w-5 h-5 text-green-400" />
                Contato via WhatsApp
              </a>

              <a
                target="_blank"
                href={`https://www.google.com/maps?q=Cuiabá,+Mato+Grosso,+Brasil`}
                className="text-black flex items-center justify-center w-fit
                gap-2 px-4 py-2 border-4 rounded-md transition hover:opacity-100"
              >
                <MapPinIcon className="w-5 h-5 text-blue-800" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
