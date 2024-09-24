import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen justify-center items-center flex text-4xl font-bold text-LightPrimaryColor dark:text-DarkPrimaryColor bg-LightBackgroundColor dark:bg-DarkBackgroundColor gap-8 text-center flex-col">
      404 | Not Found
      <Link
        to={"/"}
        className="border-2 px-4 py-3 rounded-lg border-LightPrimaryColor dark:border-DarkPrimaryColor hover:bg-LightPrimaryColor dark:hover:bg-DarkPrimaryColor hover:text-LightBackgroundColor dark:hover:text-DarkBackgroundColor"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
