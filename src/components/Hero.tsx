import Image from "next/image";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <section className="flex mx-4 gap-4 justify-between mt-32">
      <div className="sm:w-2/4 space-y-12">
        {" "}
        {/* Hero-leftside div*/}
        <span className="text-[blue] bg-[#e1edff] px-4 py-2 rounded-lg font-bold">
          Sale 70%
        </span>
        <h1 className="font-bold text-5xl">An Industrial Take on Streetwear</h1>
        <p className="w-2/3">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          Start Shopping
        </Button>
        <div className="flex gap-4">
          <Image src="/assets/brandsLogo/Featured1.webp" alt="brandlogo"  width={100} height={35}/>
          <Image src="/assets/brandsLogo/Featured2.webp" alt="brandlogo"  width={100} height={35}/>
          <Image src="/assets/brandsLogo/Featured3.webp" alt="brandlogo"  width={100} height={35}/>
          <Image src="/assets/brandsLogo/Featured4.webp" alt="brandlogo"  width={100} height={35}/>
        </div>
      </div>
      <div className="w-2/4 max-sm:hidden relative">
        {" "}
        {/* Hero-Right Section*/}
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <path
            fill="#FF0066"
            d="M42.7,-72.9C54.7,-67,63.4,-54.3,71.2,-41C78.9,-27.7,85.8,-13.9,86.3,0.3C86.9,14.5,81.1,29,72.6,41.1C64.2,53.1,53,62.8,40.4,71.2C27.9,79.6,13.9,86.7,0.5,85.9C-13,85.1,-26.1,76.4,-39,68.2C-51.8,60,-64.6,52.3,-72.8,41C-81.1,29.8,-84.9,14.9,-85.1,-0.1C-85.2,-15.1,-81.7,-30.1,-74,-42.3C-66.3,-54.6,-54.3,-64,-41.3,-69.3C-28.2,-74.6,-14.1,-75.8,0.6,-76.8C15.3,-77.9,30.7,-78.8,42.7,-72.9Z"
            transform="translate(100 100)"
          />
        </svg>
        <Image
          src="/assets/img/header.webp"
          alt="katon-image"
          width={900}
          height={900}
          className="absolute -top-14 right-0"
        />
      </div>
    </section>
  );
}

export default Hero