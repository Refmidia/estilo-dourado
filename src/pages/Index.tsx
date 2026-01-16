import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Modules } from "@/components/Modules";
import { ForWho } from "@/components/ForWho";
import { Testimonials } from "@/components/Testimonials";
import { Professor } from "@/components/Professor";
import { Offer } from "@/components/Offer";
import { Bonuses } from "@/components/Bonuses";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Categories />
        <WhyChooseUs />
        <Modules />
        <ForWho />
        <Testimonials />
        <Professor />
        <Offer />
        <Bonuses />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
};

export default Index;
