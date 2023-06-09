import { Button } from "./ui/button";
const Hero = () => {
  return (
    <section className="flex mx-4 gap-2 justify-between mt-32">
      <div className="w-2/4">
        <span className="text-[blue] bg-[#e1edff] px-4 py-2 rounded-lg font-bold">
          Sale 70%
        </span>
        <h1 className="font-bold my-12 text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="w-2/3 my-12">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="font-bold">Start Shopping</Button>
      </div>
      <div>left</div>
    </section>
  );
}

export default Hero