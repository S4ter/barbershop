import { Link } from "react-scroll";
import logo from "./images/barberlogo.png";

function Header() {
  return (
    <>
      <header className="py-2 w-full bg-orange">
        <div className="max-w-[1280px] flex flex-row justify-evenly items-center mx-auto">
          <img src={logo} className="h-15" />
          <nav className="flex flex-row gap-5">
            <Link to="" smooth={true} duration={500} className="">
              Home
            </Link>
            <Link to="" smooth={true} duration={500} className="">
              Usługi
            </Link>
            <Link to="" smooth={true} duration={500} className="">
              Galeria
            </Link>
            <Link to="" smooth={true} duration={500} className="">
              O nas
            </Link>
            <a href="/">Umów się</a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
