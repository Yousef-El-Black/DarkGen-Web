import HomeIcon from "@mui/icons-material/Home";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MoodIcon from "@mui/icons-material/Mood";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import PaidIcon from "@mui/icons-material/Paid";
import Groups2Icon from "@mui/icons-material/Groups2";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";

import { Link } from "react-router-dom";

/*
Stages to Choose Us

You have Real State Company?

You Try To Sell  with the Traditional Way

You Don't Reach A lot of Client 

You Are looking for a solution 

And Here We found an idea

You're not just solve your problem, also we add our features

We are a Real State Web Design Agency,

Why Real State ? Because it's What we knows 

We have been created +94 Website for Our Clients

There's a positive Feedback form our costumers

## Testmonials

We don't create an amazing Website, We Select what you need and make one with your recommendations

and to know what you need you will have a call with CEO (Yousef Aboalata)

## Yousef Aboalata

## Frequent Questions


*/

// <Tagname>Content</Tagname>

const AboutUs1 = () => {
  return (
    <div className="aboutus flex py-5">
      <div className="left border-r-2 px-5">
        <h1 className="text-8xl font-extralight pb-4">
          Trun your Idea into a Real Business
        </h1>
        <p className="indent-3 text-xl">
          We specialize in crafting visually stunning and functionally robust
          websites tailored to the unique needs of the real estate industry. Our
          team of experienced designers and developers leverages cutting-edge
          technology to create websites that not only showcase your properties
          but also engage potential buyers and drive conversions. From property
          listings and virtual tours to advanced search features and lead
          generation tools, we provide comprehensive solutions to help you stand
          out in today's competitive market.
        </p>
        <ul className="faq py-5">
          <li className="mb-5">
            <h4 className="text-2xl font-semibold mb-2 uppercase">
              What's <span className="capitalize">DarkWeb Gen</span> Agency?✌️
            </h4>
            <p className="text-lg capitalize">
              We're an Ageny work for the Business Men in Real State Field to
              make thier business Up
            </p>
          </li>
          <li className="mb-5">
            <h4 className="text-2xl font-semibold mb-2 uppercase">
              Why <span className="capitalize">DarkWeb Gen</span> Agency?🤔
            </h4>
            <p className="text-lg capitalize">
              We're not a single Developer, We're A Whole Team Working on One
              Project to Get the Best Results, We Find out exactly what you need
              and start working.
            </p>
          </li>
          <li className="mb-5">
            <h4 className="text-2xl font-semibold mb-2 uppercase">
              How can i trust You? 🤨
            </h4>
            <p className="text-lg capitalize">
              We do not take the cost of the website until the project is on the
              ground.
            </p>
          </li>
          <li className="mb-5">
            <h4 className="text-2xl font-semibold mb-2 uppercase">
              What does make me sure that i will get the best Result? 🙂
            </h4>
            <p className="text-lg capitalize">
              We set up an interview for you with the team leader to discuss
              what you want, what your ideas are about the project, who you are
              targeting and everything in between. Based on our experience, we
              suggest the best advice that will take your business to the next
              level.
            </p>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="developerCard w-[350px] px-3 rounded-t-lg overflow-hidden">
          <div className="head flex flex-col justify-center text-center rounded-t-lg border-2 pb-4">
            <div className="photo">
              <img src="/assets/images/yousef.png" alt="" />
            </div>
            <div>
              <h3 className="text-xl">Yousef Aboalata</h3>
              <span className="text-sm">
                Full-Stack Web Engineer & DarkGen Web - CEO
              </span>
            </div>
          </div>
          <div className="body py-3 px-2">
            <div>
              <span className="text-LightSecondaryColor">
                # I’m not your normal developer
              </span>
              <ul>
                <li>
                  <h4>Performance</h4>
                  <p>
                    I've excelled in building scalable applications with
                    proficiency in MongoDB, Express.js, React, and Node.js. My
                    track record showcases timely project completion,
                    high-quality code, adept problem-solving, and a commitment
                    to continuous learning, ensuring adaptability and growth in
                    a rapidly evolving tech landscape. I provide Smallest file
                    possible, and It works on all types of browsers.
                  </p>
                </li>
                <li>
                  <h4>Coding</h4>
                  <p>
                    In coding, my strength lies in crafting robust, scalable
                    applications using the MERN Stack—leveraging MongoDB,
                    Express.js, React, and Node.js. I ensure high-quality code,
                    prompt issue resolution, and a commitment to ongoing
                    learning, fostering adaptability in a dynamic coding
                    landscape.
                  </p>
                </li>
                <li>
                  <h4>Dalivary</h4>
                  <p>
                    I excel by leveraging my expertise in the MERN
                    Stack—utilizing MongoDB, Express.js, React, and Node.js—to
                    consistently produce robust, scalable applications. My track
                    record showcases on-time project completion, high-quality
                    code, rapid issue resolution, and a dedication to continual
                    learning, ensuring adaptable solutions in a dynamic delivery
                    environment.
                  </p>
                </li>
                <li>
                  <h4>Skilling</h4>
                  <p>
                    I've honed expertise across the MERN Stack—embracing
                    MongoDB, Express.js, React, and Node.js—to construct
                    adaptable, scalable applications. My focus on continual
                    learning ensures I swiftly tackle challenges, produce
                    high-quality code, and evolve adeptly, staying at the
                    forefront of tech advancements in skill development.
                  </p>
                </li>
              </ul>
              <div className="Deleted">
                <HomeIcon fontSize="large" />
                <EmojiPeopleIcon fontSize="large" />
                <LaptopMacIcon fontSize="large" />
                <TrendingUpIcon fontSize="large" />
                <MoodIcon fontSize="large" />
                <PsychologyAltIcon fontSize="large" />
                <PaidIcon fontSize="large" />
                <Groups2Icon fontSize="large" />
                <ThumbUpAltIcon fontSize="large" />
                <RedoIcon fontSize="large" />
                <UndoIcon
                  fontSize="large"
                  style={{ transform: "rotate(180deg)" }}
                />
              </div>
              <ul>
                <Link to={"/"}>
                  <li>
                    <div className="icon"></div>
                    <span></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li>
                    <div className="icon"></div>
                    <span></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li>
                    <div className="icon"></div>
                    <span></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li>
                    <div className="icon"></div>
                    <span></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li>
                    <div className="icon"></div>
                    <span></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li>
                    <div className="icon"></div>
                    <span></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li>
                    <div className="icon"></div>
                    <span></span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs1;
