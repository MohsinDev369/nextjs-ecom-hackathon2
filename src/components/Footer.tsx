import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="">
      <div className="grid grid-cols-4 mt-24 max-md:grid-cols-1 space-y-8">
        <div id="logo" className="flex flex-col justify-between w-[80%]">
          <div className="mr-4">
            <Link href={"/"} className="text-xl font-extrabold">
              Mohsin E Shop
            </Link>
          </div>
          <p className="font-normal text-base text-[#666]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum
            doloremque placeat explicabo
          </p>
          <div id="icon-container" className="flex gap-4">
            <div className="p-3 bg-[#f1f1f1] cursor-pointer rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
            <div className="p-3 bg-[#f1f1f1] cursor-pointer rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
            <div className="p-3 bg-[#f1f1f1] cursor-pointer rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div id="company" className="">
          <h3 className="font-bold text-xl text-[#666] mb-4">Company</h3>
          <ul className="space-y-4">
            <li className="text-[#666]">About</li>
            <li className="text-[#666]">Terms of Use</li>
            <li className="text-[#666]">Privacy Policy</li>
            <li className="text-[#666]">How it Works</li>
            <li className="text-[#666]">Contact Us</li>
          </ul>
        </div>

        <div id="Support" className="">
          <h3 className="font-bold text-xl text-[#666] mb-4">Support</h3>
          <ul className="space-y-4">
            <li className="text-[#666]">Support Carrer</li>
            <li className="text-[#666]">24h Service</li>
            <li className="text-[#666]">Quick Chat</li>
          </ul>
        </div>
        <div id="Contact" className="">
          <h3 className="font-bold text-xl text-[#666] mb-4">Contact</h3>
          <ul className="space-y-4">
            <li className="text-[#666]">Whatsapp</li>
            <li className="text-[#666]">Support 24h</li>
          </ul>
        </div>
      </div>
      <div
        id="copyright"
        className="mt-12 grid sm:grid-cols-2 border-t border-[#666]"
      >
        Copyright
      </div>
    </footer>
  );
};
