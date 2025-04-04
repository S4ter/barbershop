import { Link } from "react-scroll";
// import icons from "./images/icons.svg";
// import logo from "./images/barberlogo.png";
import logowhite from "./images/barberlogowhite.png";
// import logotransp from "./images/barberlogotransp.png";

function Header() {
  return (
    <>
      <header className="py-3 w-full bg-orange">
        <div className="max-w-[1280px] px-5 flex flex-row justify-between items-center mx-auto">
          <img src={logowhite} className="h-15" />
          <nav className="flex flex-row gap-5 font-roboto text-xl text-maingray-3 font-bold items-center">
            <Link
              to="header"
              smooth={true}
              duration={500}
              className="hover:underline underline-offset-3 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to=""
              smooth={true}
              duration={500}
              className="hover:underline underline-offset-3 cursor-pointer"
            >
              Usługi
            </Link>
            <Link
              to=""
              smooth={true}
              duration={500}
              className="hover:underline underline-offset-3 cursor-pointer"
            >
              Galeria
            </Link>
            <Link
              to=""
              smooth={true}
              duration={500}
              className="hover:underline underline-offset-3 cursor-pointer"
            >
              O nas
            </Link>
            <a
              href="/"
              className="w-fit p-3 rounded-2xl bg-maingray-3 text-orange flex flex-row justify-evenly items-center gap-3 hover:underline underline-offset-3"
            >
              Zarezerwuj termin
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
