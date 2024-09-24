import CallIcon from "@mui/icons-material/Call";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import CodeIcon from "@mui/icons-material/Code";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import CallButton from "../../components/CallButton/CallButton";
import ScrollTape from "../../components/ScrollTape/ScrollTape";
import { animate, motion, stagger } from "framer-motion";

const ProcessStepCard = ({
  icon,
  text,
  title,
  color,
}: {
  icon: ReactElement;
  text: string;
  title: string;
  color: {
    body: { light: string; dark: string };
    text: { light: string; dark: string };
  };
}) => {
  const { dark } = useSelector(
    (state: { theme: { dark: boolean } }) => state.theme
  );

  useEffect(() => {
    animate(
      ".process-step-card",
      { opacity: 1, x: 0, y: 0 },
      { delay: stagger(0.5), duration: 0.5 }
    );
  }, []);

  return (
    <div className="process-step-card group w-[240px] h-[240px] relative overflow-hidden rounded-lg border-2 text-center opacity-0 translate-x-4 translate-y-5">
      <div
        className="absolute w-full h-full flex justify-center items-center group-hover:translate-y-[-100%] transition-all duration-500"
        style={
          dark
            ? { backgroundColor: color.body.dark, color: color.text.dark }
            : { backgroundColor: color.body.light, color: color.text.light }
        }
      >
        {icon}
      </div>
      <div className="flex flex-col gap-4 justify-center items-center h-[240px] p-2 text-LightTextColor dark:text-DarkTextColor">
        <h5 className="text-xl">{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services bg-LightBackgroundColor dark:bg-DarkBackgroundColor">
      <div className="container pt-[110px] pb-[50px]">
        <div className="flex flex-col-reverse lg:flex-row text-center lg:text-start items-center gap-8">
          <div className="text flex-[2] text-LightTextColor dark:text-DarkTextColor">
            <h2 className="text-2xl lg:text-4xl py-4">
              Welcome to DarkGen Web Agency – The Real Estate Web Design Experts
            </h2>
            <p className="leading-6 lg:leading-8 indent-3">
              You've found the right place if you're looking for a professional,
              high-quality real estate website that perfectly meets your needs.
              At DarkGen Web Agency, we specialize in creating websites
              exclusively for the real estate industry. Our deep understanding
              of the real estate market ensures that your website will not only
              look great but also work flawlessly to help you attract clients,
              showcase properties, and close deals.
            </p>
          </div>
          <motion.div
            className="image flex-1 rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ daley: 0.3, duration: 0.7 }}
          >
            <img src="/assets/images/service-1.jpg" alt="" />
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 pb-5 pt-4">
          <motion.div
            className="image flex-1 rounded-lg overflow-hidden"
            transition={{ daley: 1, duration: 0.7 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <img src="/assets/images/service-2.jpg" alt="" />
          </motion.div>
          <div className="text flex-[2] text-LightTextColor dark:text-DarkTextColor">
            <h2 className="text-4xl py-4 text-center lg:text-start">
              Everyone have the chance to be The BOSS.
            </h2>
            <ul className="">
              <h5 className="py-4">What sets us apart:</h5>
              <li className="ps-4 pb-4">
                <span className="font-semibold">Focused Expertise:</span>
                We don’t just design websites – we build tailored online
                experiences for real estate professionals like you.
              </li>
              <li className="ps-4 pb-4">
                <span className="font-semibold">Client-Centered Approach:</span>
                We take the time to meet with you online to fully understand
                your goals and vision. Your website will be crafted to meet your
                specific needs, whether you're a realtor, property manager, or
                developer.
              </li>
              <li className="ps-4 pb-4">
                <span className="font-semibold">Proven Results:</span>
                With our experience and dedication to the real estate market, we
                know what works and how to help you stand out.
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="py-4 text-LightTextColor dark:text-DarkTextColor">
          <h3 className="text-center text-4xl py-5">Our Process</h3>
          <p className="text-sm md:text-xl">
            We follow a step-by-step approach to ensure your real estate website
            is built with precision and meets all your expectations:
          </p>
          <div className="cards py-4 flex flex-wrap gap-5 justify-center">
            <ProcessStepCard
              icon={<CallIcon fontSize="large" />}
              text="Schedule a meeting with us to discuss your project details, goals, and vision."
              title="Book a Call"
              color={{
                body: { light: "#E3F2FD", dark: "#0D47A1" },
                text: { light: "#1565C0", dark: "#BBDEFB" },
              }}
            />
            <ProcessStepCard
              icon={<AssignmentIcon fontSize="large" />}
              text="We create a comprehensive plan outlining the features and structure of your website to ensure it fits your business needs."
              title="Planning"
              color={{
                body: { light: "#FFF3E0", dark: "#E65100" },
                text: { light: "#EF6C00", dark: "#FFE0B2" },
              }}
            />
            <ProcessStepCard
              icon={<ScreenshotMonitorIcon fontSize="large" />}
              text="Our expert designers craft a user-friendly and visually appealing design that resonates with your audience and showcases your brand."
              title="UI/UX Design"
              color={{
                body: { light: "#E8F5E9", dark: "#FFEBEE" },
                text: { light: "#2E7D32", dark: "#C62828" },
              }}
            />
            <ProcessStepCard
              icon={<CodeIcon fontSize="large" />}
              text="We bring the design to life by coding a fast, responsive, and reliable website that performs across all devices."
              title="Website Development"
              color={{
                body: { light: "#FFEBEE", dark: "#B71C1C" },
                text: { light: "#C62828", dark: "#FFCDD2" },
              }}
            />
            <ProcessStepCard
              icon={<WifiTetheringIcon fontSize="large" />}
              text="We host your website on a secure platform and make it live for the world to see."
              title="Hosting & Launch"
              color={{
                body: { light: "#F3E5F5", dark: "#4A148C" },
                text: { light: "#6A1B9A", dark: "#E1BEE7 " },
              }}
            />
            <ProcessStepCard
              icon={<AssuredWorkloadIcon fontSize="large" />}
              text="Your website will not only be functional but also an asset to grow your business, attract clients, and showcase properties."
              title="Turning It into a Real Business Tool"
              color={{
                body: { light: "#FFF9C4", dark: "#F57F17" },
                text: { light: "#FBC02D", dark: "#FFF176" },
              }}
            />
            <ProcessStepCard
              icon={<LocalLibraryIcon fontSize="large" />}
              text="We guide you through the admin panel, ensuring you’re confident managing your site. We also provide detailed documentation for ongoing usage and processes."
              title="Admin Training & Documentation"
              color={{
                body: { light: "#ECEFF1", dark: "#263238" },
                text: { light: "#37474F", dark: "#CFD8DC" },
              }}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-5 text-center lg:flex-row items-center justify-around p-4">
        <h3 className="text-4xl text-LightTextColor dark:text-DarkTextColor">
          That's your Time to Be The FUTURE
        </h3>
        <CallButton />
      </div>
      <ScrollTape />
      <hr />
    </div>
  );
};

export default Services;
