import Slider from '@/components/ui/slider'

const Feature_Products = () => {
  return (
    <section className="flex flex-col justify-center items-center p-8 gap-4">
      <span className="text-center text-xs font-bold text-[#0062f5] tracking-widest">
        PRODUCTS
      </span>
      <h2 className="tracking-[.03em] font-bold text-[32px] text-[#212121]">
        Check What We Have
      </h2>
      <Slider />
    </section>
  );
};

export default Feature_Products;
