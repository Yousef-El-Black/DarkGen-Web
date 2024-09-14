import { useSelector } from "react-redux";
import { testmonialsData } from "../../TestmonialsData";

const Testmonials = () => {
  const { dark } = useSelector(
    (state: { theme: { dark: boolean } }) => state.theme
  );

  return (
    <div className="relative bg-LightBackgroundColor dark:bg-DarkBackgroundColor">
      <div className="tilt-devider-top absolute top-0 translate-y-[-100%] w-screen rotate-[180deg]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill={dark ? "#8AB4F8" : "#1A73E8"}
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
        </svg>
      </div>
      <div className="h-[400px] relative mt-[100px] mb-[150px] bg-LightPrimaryColor dark:bg-DarkPrimaryColor overflow-x-hidden">
        <ul className="flex items-center justify-start gap-5 absolute px-[15px] top-[50%] left-[0] translate-y-[-50%] animate-slide text-LightTextColor dark:text-DarkTextColor">
          {testmonialsData.map(
            (
              t: { name: string; rate: number; text: string },
              index: number
            ) => {
              return (
                <li
                  key={index}
                  className="w-[220px] h-[350px] border-2 rounded-lg overflow-hidden bg-LightBackgroundColor dark:bg-DarkBackgroundColor"
                >
                  <div className="head flex gap-4 h-[50px] border-b-2 justify-between px-1 items-center">
                    <div className="name">{t.name}</div>
                    <div className="rate rounded-full p-3 ">{t.rate}/10</div>
                  </div>
                  <div className="content overflow-y-scroll h-[300px] p-2 indent-2">
                    <p>{t.text}</p>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div className="tilt-devider-bottom absolute bottom-0 translate-y-[100%] w-screen">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill={dark ? "#8AB4F8" : "#1A73E8"}
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Testmonials;
