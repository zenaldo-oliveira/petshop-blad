import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Services } from "./_components/service";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
}
