import Image from "next/image";

const Promo = () => {
  return (
    <section className="flex flex-col justify-center items-center p-16 gap-4">
      <span className="text-center text-xs font-bold text-[#0062f5] tracking-widest">
        PROMOTIONS
      </span>
      <h2 className="tracking-[.03em] font-bold text-[32px] text-[#212121]">
        Our Promotions Events
      </h2>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center bg-[#d6d6d8] px-8 gap-2">
            <div className="">
              <h3 className="font-bold text-3xl">GET UP TO 60%</h3>
              <p className="text-lg">For the summer season</p>
            </div>
            <Image
              src="/assets/img/event1.webp"
              alt="event1"
              width={400}
              height={400}
            />
          </div>
          <div className="flex justify-center items-center flex-col py-12 px-8 bg-[#212121] text-white">
            <h3 className="font-extrabold text-4xl mb-4 tracking-wider">
              GET 30% Off
            </h3>
            <p className="text-sm">USE PROMO CODE</p>
            <div>Button:DINEWEEKENDSALE</div>
          </div>
        </div>
        <div className="flex gap-4">
          <div>car1</div>
          <div>car2</div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
