import ServicesPreview from "@/components/sections/ServicesPreview";
import ImageShowcase from "@/components/sections/ImageShowcase";
import Brands from "@/components/sections/Brands";
import Customers from "@/components/sections/Customers";
import Awards from "@/components/sections/Awards";
import Testimonials from "@/components/sections/Testimonials";
import FindUs from "@/components/sections/FindUs";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
      <ImageShowcase />
      <Brands />
      <Customers />
      <Awards />
      <Testimonials />
      <FindUs />
    </>
  );
}
