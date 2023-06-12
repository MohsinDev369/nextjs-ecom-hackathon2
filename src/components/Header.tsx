import { Input } from "./ui/input";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex my-8 mx-4 sm:justify-between max-sm:justify-between items-center gap-2">
      <div className="mr-4">
        <Link href={"#"} className="text-xl font-extrabold">
          Mohsin E Shop
        </Link>
      </div>
      <nav className="max-sm:hidden">
        <ul className="flex gap-12 truncate ">
          <Link href={"#"}>
            <li>Male</li>
          </Link>
          <Link href={"#"}>
            <li>Femail</li>
          </Link>
          <Link href={"#"}>
            <li>Kids</li>
          </Link>
          <Link href={"#"}>
            <li>All Products</li>
          </Link>
        </ul>
      </nav>
      <Input
        type="text"
        className="sm:w-1/3 min-w-[6em]"
        placeholder="Search"
      />
      <div className="relative">
        <Link href={"#"}>
          {/* Red ping animation start */}
          <div className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1 animate-ping"></div>
          <div className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></div>{" "}
          {/* Red ping animation close */}
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </Link>
      </div>
      <div className="sm:hidden">
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
