import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="flex mt-8 mx-4 sm:justify-evenly max-sm:justify-between items-center gap-2">
      <div className="text-lg mr-4">LOGO</div>
      <nav className="max-sm:hidden">
        <ul className="flex gap-12 truncate ">
          <li>Male</li>
          <li>Femail</li>
          <li>Kids</li>
          <li>All Product</li>
        </ul>
      </nav>
      {/* <div className="mr-4">Search</div> */}
      <Input type="text" className="sm:w-1/4" placeholder="Search" />
      <div>Cart</div>
    </header>
  );
};

export default Header;
