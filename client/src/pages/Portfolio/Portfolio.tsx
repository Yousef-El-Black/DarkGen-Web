import { Link } from "react-router-dom";
import { PortfolioData } from "../../PortfolioData";
import CallButton from "../../components/CallButton/CallButton";
import ScrollTape from "../../components/ScrollTape/ScrollTape";

const PortfolioPage = () => {
  return (
    <div className="portfolio bg-LightBackgroundColor dark:bg-DarkBackgroundColor">
      <div className="container pt-[100px] pb-[50px]">
        <div className="heading py-5 text-center">
          <h2 className="text-5xl lg:text-8xl font-extrabold opacity-20 text-LightTextColor dark:text-DarkTextColor">
            Portfolio
          </h2>
          <span className="font-semibold translate-y-[-20px] lg:translate-y-[-30px] block text-LightTextColor dark:text-DarkTextColor">
            We're Good at All
          </span>
        </div>
        <ul className="content flex flex-wrap justify-around gap-5">
          {PortfolioData.map(
            (
              item: { name: string; link: string; image: string },
              index: number
            ) => {
              return (
                <Link
                  to={item.link}
                  key={index}
                  className="w-[230px] h-[150px] overflow-hidden bg-LightPrimaryColor dark:bg-DarkPrimaryColor relative"
                >
                  <li>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
                    />
                  </li>
                </Link>
              );
            }
          )}
        </ul>
      </div>
      <hr />
      <div className="container mx-auto flex flex-col lg:flex-row gap-5 justify-around items-center py-8">
        <h2 className="md:text-4xl text-center uppercase text-LightTextColor dark:text-DarkTextColor">
          We are EVERYWHERE. That's <br /> your CHANCE.
        </h2>
        <CallButton />
      </div>
      <hr />
      <ScrollTape />
    </div>
  );
};

export default PortfolioPage;

/*

We Will have a lot of Projects and Demos 

Some Stories


*/
