import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsLetter = () => {
  return (
    <section
      id="NewsLetter"
      className="max-sm:my-24 max-sm:mx-8 flex flex-col justify-center items-center text-center relative z-[1]"
    >
      <div className="font-extrabold absolute text-8xl text-[#f2f3f7] -z-[1] max-sm:text-[3rem]">
        Newsletter
      </div>
      <h1 className="mb-4 font-bold text-4xl tracking-[0.03em] text-[#212121]">
        Subscribe Our Newsletter
      </h1>
      <p className="mb-8 font-light text-base text-[#212121]">
        Get the latest information and promo offers directly
      </p>
      <div className="flex">
        <Input placeholder="Email" className="mb-4" />
        <Button className="ml-4 truncate px-8 py-4">Get Started</Button>
      </div>
    </section>
  );
};

export default NewsLetter;
