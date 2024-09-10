import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <hr />
      <div className="heading py-5 text-center">
        <h2 className="text-5xl lg:text-8xl font-extrabold opacity-20 text-LightTextColor dark:text-DarkTextColor">
          Portfolio
        </h2>
        <span className="font-semibold translate-y-[-20px] lg:translate-y-[-30px] block text-LightTextColor dark:text-DarkTextColor">
          We're Good at All
        </span>
      </div>
      <div className="content p-5">
        <ul className="flex flex-wrap justify-around gap-[10px]">
          <Link to={"/"}>
            <li className="w-[250px] h-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-hidden relative">
              <img
                src="/assets/images/text.jpg"
                alt=""
                className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
              />
            </li>
          </Link>
          <Link to={"/"}>
            <li className="w-[250px] h-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-hidden relative">
              <img
                src="/assets/images/text.jpg"
                alt=""
                className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
              />
            </li>
          </Link>
          <Link to={"/"}>
            <li className="w-[250px] h-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-hidden relative">
              <img
                src="/assets/images/text.jpg"
                alt=""
                className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
              />
            </li>
          </Link>
          <Link to={"/"}>
            <li className="w-[250px] h-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-hidden relative">
              <img
                src="/assets/images/text.jpg"
                alt=""
                className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
              />
            </li>
          </Link>
          <Link to={"/"}>
            <li className="w-[250px] h-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-hidden relative">
              <img
                src="/assets/images/text.jpg"
                alt=""
                className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
              />
            </li>
          </Link>
          <Link to={"/"}>
            <li className="w-[250px] h-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-hidden relative">
              <img
                src="/assets/images/text.jpg"
                alt=""
                className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
              />
            </li>
          </Link>
          <Link to={"/"}>
            <li className="w-[250px] h-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-hidden relative">
              <img
                src="/assets/images/text.jpg"
                alt=""
                className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
              />
            </li>
          </Link>
          <Link to={"/"}>
            <li className="w-[250px] h-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-hidden relative">
              <img
                src="/assets/images/text.jpg"
                alt=""
                className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
              />
            </li>
          </Link>
          <Link to={"/"}>
            <li className="w-[250px] h-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-hidden relative">
              <img
                src="/assets/images/text.jpg"
                alt=""
                className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
              />
            </li>
          </Link>
          <Link to={"/"}>
            <li className="w-[250px] h-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-hidden relative">
              <img
                src="/assets/images/text.jpg"
                alt=""
                className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
              />
            </li>
          </Link>
          <Link to={"/"}>
            <li className="w-[250px] h-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-hidden relative">
              <img
                src="/assets/images/text.jpg"
                alt=""
                className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
              />
            </li>
          </Link>
          <Link to={"/"}>
            <li className="w-[250px] h-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-hidden relative">
              <img
                src="/assets/images/text.jpg"
                alt=""
                className="object-cover w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-150 hover:opacity-70 duration-700"
              />
            </li>
          </Link>
        </ul>
        <Link
          to={"/portfolio"}
          className="underline text-LightTextColor dark:text-DarkTextColor text-4xl text-center py-5 w-full block hover:text-LightPrimaryColor dark:hover:text-DarkPrimaryColor"
        >
          +99 Worked Designs and More
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
