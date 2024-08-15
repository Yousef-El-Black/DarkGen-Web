import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";

const Navbar = ({
  isMenuOpened,
  closeMenu,
}: {
  isMenuOpened: boolean;
  closeMenu: Function;
}) => {
  return (
    <div
      className={`fixed top-0 w-screen h-screen  duration-500 ${
        isMenuOpened ? "left-0" : "delay-1000 left-[-100%]"
      }`}
    >
      <div
        className={`overlay h-screen w-screen absolute top-0 left-0 dark:bg-LightBackgroundColor bg-DarkBackgroundColor z-[998] cursor-pointer duration-500 ${
          isMenuOpened ? "opacity-70" : "opacity-0 delay-500"
        }`}
        onClick={() => closeMenu()}
      ></div>
      <div
        className={`bg-LightBackgroundColor dark:bg-DarkBackgroundColor shadow-lg shadow-DarkBackgroundColor h-screen w-[80%] px-4 z-[999] absolute top-0 left-0 ${
          isMenuOpened ? "left-0" : "left-[-100%]"
        }`}
      >
        <div
          className="icon cursor-pointer w-full flex justify-center items-center py-5 border-b-2 mb-5"
          onClick={() => closeMenu()}
        >
          <CloseIcon />
        </div>
        <ul className="flex flex-col gap-5">
          <Link
            to={"/"}
            className=" mb-[3px] hover:border-gray-300 h-full py-2 px-3 hover:text-stroke-[0.5px] hover:text-stroke-[#000000] dark:hover:text-stroke-[#ffffff] hover:translate-x-[10px]"
          >
            <li>Home</li>
          </Link>
          <Link
            to={"/aboutus"}
            className=" hover:translate-x-[10px] mb-[3px] hover:border-gray-300 h-full py-2 px-3 hover:text-stroke-[0.5px] hover:text-stroke-[#000000] dark:hover:text-stroke-[#ffffff]"
          >
            <li>About Us</li>
          </Link>
          <Link
            to={"/services"}
            className=" hover:translate-x-[10px] mb-[3px] hover:border-gray-300 h-full py-2 px-3 hover:text-stroke-[0.5px] hover:text-stroke-[#000000] dark:hover:text-stroke-[#ffffff]"
          >
            <li>Services</li>
          </Link>
          <Link
            to={"/portfolio"}
            className=" hover:translate-x-[10px] mb-[3px] hover:border-gray-300 h-full py-2 px-3 hover:text-stroke-[0.5px] hover:text-stroke-[#000000] dark:hover:text-stroke-[#ffffff]"
          >
            <li>Portfolio</li>
          </Link>
          <Link
            to={"/copyright"}
            className=" hover:translate-x-[10px] mb-[3px] hover:border-gray-300 h-full py-2 px-3 hover:text-stroke-[0.5px] hover:text-stroke-[#000000] dark:hover:text-stroke-[#ffffff]"
          >
            <li>Copyright</li>
          </Link>
          <Link
            to={"/contactus"}
            className=" hover:translate-x-[10px] mb-[3px] hover:border-gray-300 h-full py-2 px-3 hover:text-stroke-[0.5px] hover:text-stroke-[#000000] dark:hover:text-stroke-[#ffffff]"
          >
            <li>Contact Us</li>
          </Link>
        </ul>
        <div className="my-5 w-full flex justify-center items-center h-[100px] border-t-2">
          <ToggleThemeBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
