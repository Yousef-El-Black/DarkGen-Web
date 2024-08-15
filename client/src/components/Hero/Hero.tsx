import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const { dark } = useSelector(
    (state: { theme: { dark: boolean } }) => state.theme
  );

  return (
    <div className="h-screen bg-lightBackgroudColor dark:bg-DarkBackgroundColor">
      <div className="container h-full flex justify-between text-center xl:text-start items-center">
        <div className="left flex-[2]">
          <h1 className="text-2xl sm:text-4xl md:text-5xl text-wrap text-LightTextColor dark:text-DarkTextColor">
            I design the most{" "}
            <strong className=" text-LightPrimaryColor dark:text-DarkPrimaryColor">
              Trusted Real Estate
            </strong>{" "}
            Websites & Brands
          </h1>
          <ul className="flex flex-wrap sm:flex-nowrap gap-5 py-5 justify-center xl:justify-start text-sm md:text-lg">
            <li className="flex gap-2 items-center">
              <div className="icon text-LightAccentColor dark:text-DarkAccentColor">
                <GroupsIcon fontSize="large" />
              </div>
              <span className="text-LightTextColor dark:text-DarkTextColor">
                More Traffic
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <div className="icon text-LightAccentColor dark:text-DarkAccentColor">
                <LeaderboardIcon fontSize="large" />
              </div>
              <span className="text-LightTextColor dark:text-DarkTextColor">
                Better Lead Quality
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <div className="icon text-LightAccentColor dark:text-DarkAccentColor">
                <MonetizationOnIcon fontSize="large" />
              </div>
              <span className="text-LightTextColor dark:text-DarkTextColor">
                Sell More
              </span>
            </li>
          </ul>
          <div className="moneyback justify-center xl:justify-start flex gap-2 sm:gap-4 items-center md:text-xl animate-pulse my-4 text-[18px]">
            <div className="icon text-LightAccentColor dark:text-DarkAccentColor">
              <CurrencyExchangeIcon fontSize="large" />
            </div>
            <span className=" text-LightSecondaryColor dark:text-DarkSecondaryColor text-sm sm:text-lg">
              100% Money Back guarantee
            </span>
          </div>
          <Link to={"/"}>
            <button className="m-2 sm:m-5 py-2 sm:py-3 px-3 sm:px-5 border-2 bg-LightBackgroundColor dark:bg-DarkBackgroundColor hover:bg-LightPrimaryColor dark:hover:bg-DarkPrimaryColor font-bold border-LightTextColor dark:border-DarkTextColor rounded text-LightTextColor dark:text-DarkTextColor hover:text-LightBackgroundColor dark:hover:text-DarkBackgroundColor hover:border-LightPrimaryColor dark:hover:border-DarkPrimaryColor text-[16px] sm:text-xl">
              Book a call with Yousef
            </button>
          </Link>
        </div>
        <div className="right flex-[3] hidden xl:flex justify-end items-center h-screen animate-updown">
          {!dark ? (
            <img
              src="/assets/images/hero-shape.svg"
              alt="Hero Shape"
              className="h-full translate-x-[20%]"
            />
          ) : (
            <img
              src="/assets/images/dark-hero-shape.png"
              alt="Hero Shape"
              className="h-[80%] translate-x-[20%]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
