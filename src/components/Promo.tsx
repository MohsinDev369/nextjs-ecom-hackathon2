import Image from "next/image";

const Promo = () => {
  return (
    <section className="flex flex-col justify-center items-center p-4 gap-4">
      <span className="text-center text-xs font-bold text-[#0062f5] tracking-widest">
        PROMOTIONS
      </span>
      <h2 className="tracking-[.03em] font-bold text-[32px] text-[#212121]">
        Our Promotions Events
      </h2>
      <div className="flex gap-4 max-md:flex-col">
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center bg-[#d6d6d8] px-8 gap-2">
            <div className="">
              <h3 className="font-bold text-3xl">GET UP TO 60%</h3>
              <p className="text-lg">For the summer season</p>
            </div>
            <Image
              src="/assets/img/event1.webp"
              alt="event1"
              width={200}
              height={200}
              className=""
            />
          </div>
          <div className="flex justify-center items-center flex-col py-12 px-8 bg-[#212121] text-white">
            <h3 className="font-extrabold text-4xl mb-4 tracking-wider">
              GET 30% Off
            </h3>
            <p className="text-sm">USE PROMO CODE</p>
            <div className="font-bold text-lg tracking-[.25em] py-2 px-12 bg-[#474747] rounded-sm mt-2">
              MOHSIN369
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#efe1c7] relative">
            <div className="my-8 mx-4">
              <p className="">Flex Sweatshirt</p>
              <div className="flex gap-4">
                <del>$100.00</del>
                <span className="font-bold">$75.00</span>
              </div>
            </div>
            <Image
              src={"/assets/img/event2.webp"}
              alt="event4"
              width={250}
              height={250}
              className="md:absolute md:bottom-0"
            />
          </div>
          <div className="bg-[#d7d7d9] relative">
            <div className="my-8 mx-4">
              <p className="">Flex Sweatshirt</p>
              <div className="flex gap-4">
                <del>$225.00</del>
                <span className="font-bold">$190.00</span>
              </div>
            </div>
            <Image
              src={"/assets/img/event3.webp"}
              alt="event4"
              width={250}
              height={250}
              className="md:absolute md:bottom-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
