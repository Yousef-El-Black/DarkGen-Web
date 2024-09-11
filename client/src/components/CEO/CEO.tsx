import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const CEO = () => {
  return (
    <div className="ceo min-h-screen relative flex justify-center items-center">
      <div className="container flex flex-row-reverse items-center">
        <div className="right flex justify-center items-center flex-col gap-5">
          <div className="image rounded-lg overflow-hidden w-[250px] aspect-square">
            <img
              src="/assets/images/yousef.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <h2 className="text-center">The Owner of DarkGen Web Agency</h2>
          <ul className="flex justify-center items-center">
            <Link to={"https://elblackdev.vercel.app/"}>
              <li>
                <LanguageIcon />
              </li>
            </Link>
            <Link to={"https://www.facebook.com/elblackdev"}>
              <li>
                <FacebookIcon />
              </li>
            </Link>
            <Link to={"https://www.instagram.com/yousefaboalata/"}>
              <li>
                <InstagramIcon />
              </li>
            </Link>
            <Link to={"https://wa.me/201003758787"}>
              <li>
                <WhatsAppIcon />
              </li>
            </Link>
            <Link to={"mailto:yousefelblackdev@gmail.com"}>
              <li>
                <EmailIcon />
              </li>
            </Link>
          </ul>
        </div>
        <div className="text indent-2 leading-8 flex flex-col gap-5">
          <p>
            Hello, I'm <span>Yousef Aboalata</span>. Not just the local man
            running around real estate indstry. But the Proud Owner of DarkGen
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
          <h6>That's not just a claim, it's my promise.</h6>
          <p>
            Let's connect and explore how we can transform your vision into a
            thriving reality, and ho I can keep my promise to the real estate
            industry.
          </p>
          <Link to={"/"}>
            <button className="m-2 sm:m-5 py-2 sm:py-3 px-3 sm:px-5 border-2 bg-LightBackgroundColor dark:bg-DarkBackgroundColor hover:bg-LightPrimaryColor dark:hover:bg-DarkPrimaryColor font-bold border-LightTextColor dark:border-DarkTextColor rounded text-LightTextColor dark:text-DarkTextColor hover:text-LightBackgroundColor dark:hover:text-DarkBackgroundColor hover:border-LightPrimaryColor dark:hover:border-DarkPrimaryColor text-[16px] sm:text-xl">
              Book a call with Yousef
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CEO;
