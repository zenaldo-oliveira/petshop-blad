import Image from "next/image"; // Importando do Next.js
import golden from "../../../public/golden.png";
import royal from "../../../public/royal.png";
import primier from "../../../public/primier.png";
import whiskas from "../../../public/whiskas.png";
import natural from "../../../public/natural.png";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Golden", logo: golden },
  { name: "Royal", logo: royal },
  { name: "Primier", logo: primier },
  { name: "Whiskas", logo: whiskas },
  { name: "Natural", logo: natural },
  { name: "Golden", logo: golden },
];

export function Footer() {
  return (
    <section className="bg-[#E84c3d] py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Seção de marcas */}
        <div className="border-b border-white border-opacity-10 pb-8 mb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            data-aos="flip-up"
          >
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={`Logo da marca ${item.name}`}
                  title={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé */}
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação
            </p>

            {/* Botão WhatsApp */}
            <a
              target="_blank"
              href={`https://wa.me/5565992832458?text=Olá vim pelo site e gostaria de mais inforções`}
              rel="noopener noreferrer" // Adicionado para segurança
              className="bg-green-500 px-4 py-2 rounded-md mt-4"
              title="Entre em contato via WhatsApp" // Adicionado para acessibilidade
            >
              Contato Via WhatsApp
            </a>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: seucontatoaqui.com</p>
            <p>Telefone: (xx) 0000-0000</p>
            <p>Rua x, quadra Y, Cuiaba mato grosso | MT (xx) 12345678</p>
          </div>

          <div
            className="flex justify-center items-center gap-8 animate-fadeIn"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex gap-6">
              <a
                href="https://pt-br.facebook.com/login/device-based/regular/login/"
                target="_blank"
                rel="noopener noreferrer" // Adicionado para segurança
                title="Visite nossa página no Facebook" // Adicionado para acessibilidade
              >
                <FacebookLogo
                  className="w-8 h-8 hover:scale-110 transition-all duration-300"
                  data-aos="fade-right"
                />
              </a>

              <a
                href="https://www.instagram.com/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer" // Adicionado para segurança
                title="Siga-nos no Instagram" // Adicionado para acessibilidade
              >
                <InstagramLogo
                  className="w-8 h-8 hover:scale-110 transition-all duration-300"
                  data-aos="fade-right"
                />
              </a>

              <a
                href="https://www.youtube.com/watch?v=cw3SdONYcTA"
                target="_blank"
                rel="noopener noreferrer" // Adicionado para segurança
                title="Assista nossos vídeos no YouTube" // Adicionado para acessibilidade
              >
                <YoutubeLogo
                  className="w-8 h-8 hover:scale-110 transition-all duration-300"
                  data-aos="fade-right"
                />
              </a>
            </div>
          </div>
        </footer>

        {/* Rodapé com direitos reservados e desenvolvedor */}
        <div className="mt-10 border-t border-white border-opacity-20 pt-4 text-center">
          <p className="text-sm">
            &copy; 2025 Todos os direitos reservados | Desenvolvido por{" "}
            <span className="font-semibold">Zenaldo</span>
          </p>
        </div>
      </div>
    </section>
  );
}
