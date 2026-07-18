import ServicesPreview from "@/components/sections/ServicesPreview";
import Projects from "@/components/sections/Projects";
import ImageShowcase from "@/components/sections/ImageShowcase";
import Brands from "@/components/sections/Brands";
import Customers from "@/components/sections/Customers";
import Awards from "@/components/sections/Awards";
import GoogleReviews from "@/components/sections/GoogleReviews";
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
      <Projects />
      <Awards />
      <GoogleReviews />
      <Testimonials />
      <FindUs />
    </>
  );
}
