import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Services } from "./_components/service";
import { Testimonils } from "./_components/testimonils";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonils />
      <Footer />
    </main>
  );
}
