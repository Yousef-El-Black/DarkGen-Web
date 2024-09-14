import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallButton from "../CallButton/CallButton";

const CEO = () => {
  return (
    <div className="ceo min-h-screen relative flex justify-center items-center">
      <div className="container flex gap-10 flex-col md:flex-row-reverse items-center my-5">
        <div className="right flex justify-center items-center flex-col gap-5">
          <div className="image rounded-lg overflow-hidden w-[250px] aspect-square">
            <img
              src="/assets/images/yousef.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <h2 className="text-center text-LightTextColor dark:text-DarkTextColor">
            The Owner of DarkGen Web Agency
          </h2>
          <ul className="flex gap-5 justify-center items-center flex-wrap text-LightTextColor dark:text-DarkTextColor">
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
        <div className="text indent-2 leading-8 flex flex-col gap-5 md:border-r-2 pe-5 text-LightTextColor dark:text-DarkTextColor text-center md:text-start">
          <p>
            Hello, I'm <span>Yousef Aboalata</span>. Not just the local man
            running around real estate industry. But the Proud Owner of DarkGen
            Web Agency. I've had the privilege of collaborating with more than
            99 Real Estate Companies. But here's the real kicker...
          </p>
          <p>
            I haven't just sat behind a screen. I've immersed myself in the real
            estate world, attending conferences, crisscrossing states to meet
            clients, even crushing on their couches. I'm not just knowledgeable;
            I'm a poineer always on the pulse of the latest trends and best
            practices to keep you at the top of the field and make your business
            up.
          </p>
          <p>
            To scratch that. I don't just create websites. I take real estate
            bussinesses to new heights. From the first brainstorming call to the
            website launch, my focus is on delivering the best results in the
            industry.
          </p>
          <h6 className="text-lg">That's not just a claim, it's my promise.</h6>
          <p>
            Let's connect and explore how we can transform your vision into a
            thriving reality, and ho I can keep my promise to the real estate
            industry.
          </p>
          <CallButton />
        </div>
      </div>
    </div>
  );
};

export default CEO;
