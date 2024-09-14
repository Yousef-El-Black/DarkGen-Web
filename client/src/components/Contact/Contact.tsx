import CallButton from "../CallButton/CallButton";

const Contact = () => {
  return (
    <div className="contact bg-LightBackgroundColor dark:bg-DarkBackgroundColor pb-10 border-b-2">
      <div className="container text-LightTextColor dark:text-DarkTextColor text-center mx-auto">
        <div className="text text-4xl md:text-6xl font-extrabold mb-5 opacity-75">
          What are you Looking for ...
        </div>
        <CallButton />
      </div>
    </div>
  );
};

export default Contact;
