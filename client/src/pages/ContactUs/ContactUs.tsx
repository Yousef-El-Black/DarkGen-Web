import { useState, useEffect, useRef } from "react";
import ScrollTape from "../../components/ScrollTape/ScrollTape";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);

  const formRef: any = useRef();

  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
    process.env;

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (name !== "" && email !== "" && message !== "" && subject !== "") {
      emailjs
        .sendForm(
          REACT_APP_SERVICE_ID!,
          REACT_APP_TEMPLATE_ID!,
          formRef.current!,
          {
            publicKey: REACT_APP_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setSent(true);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
          },
          (error: { text: string }) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      window.alert("You have to fill all Input to Send this Form!🙂");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSent(false);
    }, 5_000);
  }, [sent]);

  return (
    <div>
      <div className="w-screen h-[200px] md:h-[400px] overflow-hidden relative">
        <img
          src="/assets/images/contact.jpg"
          alt=""
          className="object-fit w-full absolute top-[50%] translate-y-[-50%] "
        />
        <div className="overlay bg-LightPrimaryColor dark:bg-DarkPrimaryColor absolute left-0 top-0 w-full h-full opacity-40 dark:opacity-70"></div>
        <h1 className="absolute left-[50%] translate-x-[-50%] bottom-[20px] md:bottom-[100px] text-center text-3xl md:text-4xl lg:text-7xl font-extrabold text-LightTextColor opacity-35 dark:text-DarkTextColor dark:opacity-50 select-none">
          Contact Us
        </h1>
      </div>
      <hr />
      <div className="container mx-auto bg-LightBackgroundColor dark:bg-DarkBackgroundColor text-LightTextColor dark:text-DarkTextColor pb-[100px]">
        <h2 className="text-center text-3xl lg:text-5xl py-4 lg:py-8">
          Get in Touch with Us
        </h2>
        <form
          className="rounded-xl border-2 min-w-[230px] w-[80%] max-w-[600px] mx-auto py-10 flex flex-col gap-5 px-5 shadow-LightBackgroundColor shadow-md relative"
          ref={formRef}
        >
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="name">Name</label>
            <input
              className="border-2 p-3 rounded bg-LightBackgroundColor dark:bg-DarkBackgroundColor"
              type="text"
              id="name"
              placeholder="Enter your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              className="border-2 p-3 rounded bg-LightBackgroundColor dark:bg-DarkBackgroundColor"
              type="email"
              id="email"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="subject">Subject</label>
            <input
              className="border-2 p-3 rounded bg-LightBackgroundColor dark:bg-DarkBackgroundColor"
              type="text"
              id="subject"
              placeholder="What's the subject you want talk about?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Feel free to write you want"
              className="border-2 p-3 rounded bg-LightBackgroundColor dark:bg-DarkBackgroundColor"
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="w-full border-2 border-LightPrimaryColor p-5 hover:bg-LightPrimaryColor text-LightPrimaryColor hover:text-LightBackgroundColor rounded"
            onClick={sendEmail}
          >
            Send Message
          </button>
          {sent && (
            <p className="absolute bottom-2 left-[50%] translate-x-[-50%] text-green-500">
              Your Message have Sent!
            </p>
          )}
        </form>
      </div>
      <ScrollTape />
      <hr />
    </div>
  );
};

export default ContactUs;
