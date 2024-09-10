import { useSelector } from "react-redux";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const faqs = [
  {
    question: "What makes you the Best Choice?",
    answer:
      "We are an Agency specialized in Real State. We know it well and study its developments. NO Chance for Distraction",
  },
  {
    question: "How do I secure my money?",
    answer:
      "We take our full money after the work is done and you make the purchase decision. It is up to you to buy or not, we bear the full risk. NOTHING to Lose.",
  },
  {
    question: "How can I Gaurentee Results?",
    answer: "We have Real Experience, with Real Results.",
  },
  {
    question: "Who is responsible for designing the website?",
    answer:
      "We are not a Single Developer or Designer, We are A Whole Team Working on one Project. To prevent any Mistake, we have our Reputation and we want to save it.",
  },
];

const FAQ = () => {
  const { dark } = useSelector(
    (state: { theme: { dark: boolean } }) => state.theme
  );

  return (
    <div>
      <div className="devider-top rotate-[180deg] w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill={dark ? "#8AB4F8" : "#1A73E8"}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
      <div className="myContainer px-10 bg-LightPrimaryColor dark:bg-DarkPrimaryColor py-5 relative">
        <div className="heading">
          <h2 className="hidden lg:block text-[450px] font-extrabold absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-LightBackgroundColor dark:text-DarkBackgroundColor opacity-70">
            FAQ
          </h2>
        </div>
        <div className="content flex flex-col gap-5">
          {faqs.map(
            (faq: { question: string; answer: string }, index: number) => {
              return (
                <div
                  className={`box w-full md:w-[80%] relative rounded-lg bg-LightBackgroundColor dark:bg-DarkBackgroundColor text-LightTextColor dark:text-DarkTextColor dark:shadow-lg shadow-LightBackgroundColor dark:shadow-DarkBackgroundColor ${
                    index % 2 ? "self-start" : "self-end"
                  }`}
                >
                  <div className="question p-5 flex items-center gap-3">
                    <HelpOutlineIcon />
                    {faq.question}
                  </div>
                  <hr />
                  <div className="answer p-5 text-center md:text-start">
                    {faq.answer}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="devider-bottom w-full">
        <svg
          data-name="Layer 1"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill={dark ? "#8AB4F8" : "#1A73E8"}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default FAQ;
