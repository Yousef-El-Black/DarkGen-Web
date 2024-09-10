import AboutUs from "../../components/AboutUs/AboutUs";
import FAQ from "../../components/FAQ/FAQ";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import ScrollTape from "../../components/ScrollTape/ScrollTape";

const Home = () => {
  return (
    <div className="Home bg-LightBackgroundColor dark:bg-DarkBackgroundColor">
      <Hero />
      <ScrollTape />
      <AboutUs />
      <Portfolio />
      <FAQ />
    </div>
  );
};

export default Home;
