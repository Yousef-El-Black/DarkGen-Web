import { Link } from "react-router-dom";
import CallButton from "../CallButton/CallButton";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-5 px-4 bg-LightBackgroundColor dark:bg-DarkBackgroundColor text-LightTextColor dark:text-DarkTextColor">
      <div className="left text-center lg:text-start flex-1 flex gap-4 lg:gap-10 justify-around lg:justify-start w-full lg:w-auto items-center">
        <div>
          <h5 className="text-LightAccentColor dark:text-DarkAccentColor text-xl uppercase font-bold">
            Quick Links
          </h5>
          <ul className="lg:ps-3 flex flex-col gap-3 py-3">
            <Link to={"/"} className="hover:opacity-50">
              <li>Home</li>
            </Link>
            <Link to={"/aboutus"} className="hover:opacity-50">
              <li>About Us</li>
            </Link>
            <Link to={"/services"} className="hover:opacity-50">
              <li>Services</li>
            </Link>
            <Link to={"/portfolio"} className="hover:opacity-50">
              <li>Portfolio</li>
            </Link>
            <Link to={"/copyright"} className="hover:opacity-50">
              <li>Copyrtght</li>
            </Link>
            <Link to={"/contactus"} className="hover:opacity-50">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div>
          <div>
            <h5 className="text-LightAccentColor dark:text-DarkAccentColor text-xl uppercase font-bold">
              Help
            </h5>
            <ul className="lg:ps-3 flex flex-col gap-3 py-3">
              <Link to={"/privacy-policy"} className="hover:opacity-50">
                <li>Privacy Policy</li>
              </Link>
              <Link to={"/refund-policy"} className="hover:opacity-50">
                <li>Refund Policy</li>
              </Link>
              <Link to={"/terms-of-services"} className="hover:opacity-50">
                <li>Terms of Sevices</li>
              </Link>
            </ul>
          </div>
          <div className="py-4">
            <h5 className="text-LightAccentColor dark:text-DarkAccentColor text-xl uppercase font-bold">
              Operating Hours
            </h5>
            <p className="lg:indent-3 py-2">24 X 7, Send Us A Message</p>
          </div>
        </div>
      </div>
      <div className="center flex-1 hidden lg:flex flex-col justify-center items-center gap-5 px-10">
        <Logo full={true} />
        <span className="text-2xl font-light text-center block">
          A Highly Converting Website Design for your Real Estate Business.
        </span>
        <CallButton />
      </div>
      <div className="right flex-1 flex flex-wrap lg:flex-col justify-around w-full lg:w-auto  lg:justify-center items-start lg:ps-10 px-5 py-10 text-center sm:text-start">
        <div className="contact-ul">
          <h5 className="text-LightAccentColor dark:text-DarkAccentColor text-xl uppercase font-bold">
            Contact
          </h5>
          <ul className="ps-3 flex flex-col gap-3 py-3 mb-5">
            <li>
              Email: <span>darkgen.web.agency@gmail.com</span>
            </li>
            <li>
              Phone: <span>+201003758787</span>
            </li>
          </ul>
        </div>
        <div className="social-media-ul">
          <h5 className="text-LightAccentColor dark:text-DarkAccentColor text-xl uppercase font-bold">
            Social Media
          </h5>
          <ul className="flex gap-5 justify-around flex-wrap mt-5">
            <Link to={"https://elblackdev.vercel.app/"}>
              <li>
                <LanguageIcon
                  fontSize={"large"}
                  className="hover:text-LightPrimaryColor hover:dark:text-DarkPrimaryColor duration-300"
                />
              </li>
            </Link>
            <Link to={"https://www.facebook.com/elblackdev"}>
              <li>
                <FacebookIcon
                  fontSize={"large"}
                  className="hover:text-LightPrimaryColor hover:dark:text-DarkPrimaryColor duration-300"
                />
              </li>
            </Link>
            <Link to={"https://www.instagram.com/yousefaboalata/"}>
              <li>
                <InstagramIcon
                  fontSize={"large"}
                  className="hover:text-LightPrimaryColor hover:dark:text-DarkPrimaryColor duration-300"
                />
              </li>
            </Link>
            <Link to={"https://wa.me/201003758787"}>
              <li>
                <WhatsAppIcon
                  fontSize={"large"}
                  className="hover:text-LightPrimaryColor hover:dark:text-DarkPrimaryColor duration-300"
                />
              </li>
            </Link>
            <Link to={"mailto:yousefelblackdev@gmail.com"}>
              <li>
                <EmailIcon
                  fontSize={"large"}
                  className="hover:text-LightPrimaryColor hover:dark:text-DarkPrimaryColor duration-300"
                />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
