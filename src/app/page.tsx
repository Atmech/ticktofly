import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyTickToFly from "@/components/WhyTickToFly";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import Values from "@/components/Values";
import WhyChooseUs from "@/components/WhyChooseUs";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyTickToFly />
        <Services />
        <Expertise />
        <Destinations />
        <Values />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
