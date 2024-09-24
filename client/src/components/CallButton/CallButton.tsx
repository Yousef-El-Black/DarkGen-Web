import { Link } from "react-router-dom";

const CallButton = () => {
  return (
    <Link
      to={"https://calendly.com/yousefelblackdev/book-a-call"}
      target="_blank"
    >
      <button className="m-2 sm:m-5 py-2 sm:py-3 px-3 sm:px-5 border-2 bg-LightBackgroundColor dark:bg-DarkBackgroundColor hover:bg-LightPrimaryColor dark:hover:bg-DarkPrimaryColor font-bold border-LightTextColor dark:border-DarkTextColor rounded text-LightTextColor dark:text-DarkTextColor hover:text-LightBackgroundColor dark:hover:text-DarkBackgroundColor hover:border-LightPrimaryColor dark:hover:border-DarkPrimaryColor text-[16px] sm:text-xl">
        Book a call with Yousef
      </button>
    </Link>
  );
};

export default CallButton;
