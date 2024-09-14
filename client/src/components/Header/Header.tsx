import { Link } from "react-router-dom";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Logo from "../Logo/Logo";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const openMenu = () => {
    setIsMenuOpened(true);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <header className="h-[100px] w-full absolute top-0 text-LightTextColor dark:text-DarkTextColor border-b-2 lg:border-none z-[998]">
      <div className="container flex justify-between lg:justify-center items-center h-full gap-8 mx-auto">
        <nav>
          <Navbar closeMenu={closeMenu} isMenuOpened={isMenuOpened} />
          <div className="cursor-pointer lg:hidden" onClick={openMenu}>
            <MenuIcon className="text-LightTextColor dark:text-DarkTextColor" />
          </div>
          <ul className="lg:flex border-b-[1px] border-gray-300 h-[60px] items-center hidden text-center">
            <Link
              to={"/"}
              className="hover:border-b-[3px] hover:m-0 mb-[3px] hover:border-gray-300 h-full py-2 px-3 hover:text-stroke-[0.5px] hover:text-stroke-[#000000] dark:hover:text-stroke-[#ffffff]"
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/aboutus"}
              className="hover:border-b-[3px] hover:m-0 mb-[3px] hover:border-gray-300 h-full py-2 px-3 hover:text-stroke-[0.5px] hover:text-stroke-[#000000] dark:hover:text-stroke-[#ffffff]"
            >
              <li>About Us</li>
            </Link>
            <Link
              to={"/services"}
              className="hover:border-b-[3px] hover:m-0 mb-[3px] hover:border-gray-300 h-full py-2 px-3 hover:text-stroke-[0.5px] hover:text-stroke-[#000000] dark:hover:text-stroke-[#ffffff]"
            >
              <li>Services</li>
            </Link>
            <Link
              to={"/portfolio"}
              className="hover:border-b-[3px] hover:m-0 mb-[3px] hover:border-gray-300 h-full py-2 px-3 hover:text-stroke-[0.5px] hover:text-stroke-[#000000] dark:hover:text-stroke-[#ffffff]"
            >
              <li>Portfolio</li>
            </Link>
            <Link
              to={"/copyright"}
              className="hover:border-b-[3px] hover:m-0 mb-[3px] hover:border-gray-300 h-full py-2 px-3 hover:text-stroke-[0.5px] hover:text-stroke-[#000000] dark:hover:text-stroke-[#ffffff]"
            >
              <li>Copyright</li>
            </Link>
            <Link
              to={"/contactus"}
              className="hover:border-b-[3px] hover:m-0 mb-[3px] hover:border-gray-300 h-full py-2 px-3 hover:text-stroke-[0.5px] hover:text-stroke-[#000000] dark:hover:text-stroke-[#ffffff]"
            >
              <li>Contact Us</li>
            </Link>
            <ToggleThemeBtn />
          </ul>
          <span className="pt-2 lg:block text-end hidden">
            Make Your <b>Business Up</b>
          </span>
        </nav>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
