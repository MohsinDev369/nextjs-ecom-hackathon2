import { Input } from "./ui/input";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex my-8 mx-4 sm:justify-between max-sm:justify-between items-center gap-2">
      <div className="text-lg mr-4">
        <Link href={"#"}>LOGO</Link>
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
      <Input type="text" className="sm:w-1/4" placeholder="Search" />
      <div className="">Cart</div>
      <div className="sm:hidden">Burger Menu</div>
    </header>
  );
};

export default Header;
