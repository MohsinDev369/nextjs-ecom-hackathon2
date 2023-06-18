import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-2">
      <div>
        <div
          id="logo"
          className="flex flex-col justify-between md:w-[80%] max-lg:gap-8 w-full"
        >
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
        <div id="company">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
