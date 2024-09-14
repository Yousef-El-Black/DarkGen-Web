import AboutUs from "../../components/AboutUs/AboutUs";
import CEO from "../../components/CEO/CEO";
import Contact from "../../components/Contact/Contact";
import FAQ from "../../components/FAQ/FAQ";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import ScrollTape from "../../components/ScrollTape/ScrollTape";
import Testmonials from "../../components/Testmonials/Testmonials";

const Home = () => {
  return (
    <div className="Home bg-LightBackgroundColor dark:bg-DarkBackgroundColor">
      <Hero />
      <ScrollTape />
      <AboutUs />
      <Portfolio />
      <FAQ />
      <CEO />
      <Testmonials />
      <Contact />
      <ScrollTape />
    </div>
  );
};

export default Home;
