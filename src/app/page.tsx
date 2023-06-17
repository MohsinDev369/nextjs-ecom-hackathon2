import BrandFeautres from "@/components/BrandFeautres";
import Feature_Products from "@/components/Feature_Products";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import Promo from "@/components/Promo";



export default function Home() {
  return (
    <div>
      <Hero />
      <Promo />
      <Feature_Products />
      <BrandFeautres />
      <NewsLetter />
    </div>
  );
}
