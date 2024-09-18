import AboutUsSlide from "../../components/AboutUs/AboutUs";
import CallButton from "../../components/CallButton/CallButton";
import ScrollTape from "../../components/ScrollTape/ScrollTape";

const AboutUs = () => {
  return (
    <div className="Home bg-LightBackgroundColor dark:bg-DarkBackgroundColor pt-[100px] border-b-2">
      <AboutUsSlide />
      <ScrollTape />
      <div className="text-LightTextColor dark:text-DarkTextColor flex flex-col md:flex-row justify-around gap-5 items-center border-t-2 py-5">
        <span className="text-2xl md:text-4xl font-extrabold">
          Are You still Thinking ?
        </span>
        <CallButton />
      </div>
    </div>
  );
};

export default AboutUs;
