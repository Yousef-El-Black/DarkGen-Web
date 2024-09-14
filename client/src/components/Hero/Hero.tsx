import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useSelector } from "react-redux";
import CallButton from "../CallButton/CallButton";
import { motion } from "framer-motion";

const Hero = () => {
  const { dark } = useSelector(
    (state: { theme: { dark: boolean } }) => state.theme
  );

  const contentVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
      y: 20,
      x: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };
  return (
    <div className="h-screen bg-lightBackgroudColor dark:bg-DarkBackgroundColor">
      <div className="container mx-auto h-full flex justify-between text-center xl:text-start items-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.3 }}
          variants={contentVariants}
          className="left flex-[2]"
        >
          <motion.h1
            variants={childVariants}
            className="text-2xl sm:text-4xl md:text-5xl text-wrap text-LightTextColor dark:text-DarkTextColor"
          >
            I design the most{" "}
            <strong className=" text-LightPrimaryColor dark:text-DarkPrimaryColor">
              Trusted Real Estate
            </strong>{" "}
            Websites & Brands
          </motion.h1>
          <motion.ul
            variants={childVariants}
            className="flex flex-wrap sm:flex-nowrap gap-5 py-5 justify-center xl:justify-start text-sm md:text-lg"
          >
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
          </motion.ul>
          <motion.div
            variants={childVariants}
            className="moneyback justify-center xl:justify-start flex gap-2 sm:gap-4 items-center md:text-xl animate-pulse my-4 text-[18px]"
          >
            <div className="icon text-LightAccentColor dark:text-DarkAccentColor">
              <CurrencyExchangeIcon fontSize="large" />
            </div>
            <span className=" text-LightSecondaryColor dark:text-DarkSecondaryColor text-sm sm:text-lg">
              100% Money Back guarantee
            </span>
          </motion.div>
          <CallButton />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="right flex-[3] hidden xl:flex justify-end items-center h-screen animate-updown"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
