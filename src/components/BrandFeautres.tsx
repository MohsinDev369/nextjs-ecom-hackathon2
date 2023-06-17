import Image from "next/image";
import { Button } from "./ui/button";

const BrandFeautres = () => {
  return (
    <section className="mt-24 mb-24">
      <div className="flex justify-center mb-12">
        <div id="title" className="flex lg:justify-end  sm:p-8">
          <h1 className="font-bold text-[2.75rem] leading-[55px] tracking-[0.03em] sm:w-[80%] xl:w-[45%] text-[#212121]">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
      </div>
      <div id="content" className="grid xl:grid-cols-2">
        <div
          id="right"
          className="grid grid-cols-2 justify-center items-center relative gap-8 mb-12"
        >
          <div className="absolute font-extrabold text-8xl text-[#212121] opacity-[0.07]">
            Different from others
          </div>
          <div className="">
            <h3 className="font-semibold text-lg mb-4">
              Using Good Quality Materials
            </h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
          </div>
          <div className="">
            <h3 className="font-semibold text-lg mb-4">
              100% Handmade Products
            </h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
          </div>
          <div className="">
            <h3 className="font-semibold text-lg mb-4">
              Modern Fashion Design
            </h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
          </div>
          <div className="">
            <h3 className="font-semibold text-lg mb-4">
              Discount for Bulk Orders
            </h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
          </div>
        </div>
        <div id="right" className="flex justify-center items-center gap-10 max-sm:flex-col">
          <Image
            src={"/assets/img_slider/slider_img7.png"}
            alt="image of hood girl"
            width={400}
            height={400}
          />
          <div className="flex flex-col gap-8">
            <p className="text-justify">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Button className="w-1/2" >See All Products</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandFeautres;
