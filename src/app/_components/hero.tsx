import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.webp";
import catImg from "../../../public/cat-hero.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">
      <div>
        <Image
          src={dogImg}
          alt="foto do dogao"
          fill
          sizes="100vw"
          className="object-cover opacity-65 lg:hidden"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm md:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className=" space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="lg: text-lg">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <div>
              <a
                href="#"
                className="bg-green-500 px-2 py-2 rounded-md font-semibold flex items-center
                justify-center w-fit gap-2"
              >
                <WhatsappLogo className="w-5 h-5" />
                Contato via whatsApp
              </a>
            </div>

            <div className="mt-8">
              <a href="#">
                <p className="text-sm mb-4">
                  <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                  de desconto na primeira compra
                </p>

                <div className="flex mt-4">
                  <div className="w-32 hidden lg:block">
                    <Image
                      src={catImg}
                      alt="foto do gato"
                      quality={100}
                      className="object-fill"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* componente do cachorro */}
          <div className="hidden md:block h-full relative">
            <Image
              src={dogImg}
              alt="foto do cachorro"
              className="object-contain"
              fill
              sizes="(max-width: 768px) opx, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
