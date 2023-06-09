import { Button } from "./ui/button";
const Hero = () => {
  return (
    <section className="flex mx-4 gap-4 justify-between mt-32">
      <div className="w-2/4 space-y-12">
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
        <div>
          Brands Brands Brands Brands Brands Brands Brands Brands Brands
        </div>
      </div>
      <div className="w-2/4">
        {" "}
        {/* Hero-Right Section*/}
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <path
            d="M163.1 83.6c9.8 26 2.7 61.6-17.1 74.9-19.9 13.3-52.5 4.3-78-14.3-25.6-18.6-44.1-46.8-37.6-68.3 6.5-21.4 38-36.2 67.2-35.4 29.1.8 55.8 17.1 65.5 43.1z"
            fill="#F06"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero