const AboutUs = () => {
  return (
    <div className="AboutUs mb-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center py-5 text-center md:text-start">
          <div className="left flex-1 md:me-10 rounded-lg overflow-hidden">
            {/* FIXME: An Image have a House and DarkGen Web Sign on */}
            {/* <img src="/assets/images/dark-hero-shape.png" alt="" /> */}
            <img src="/assets/images/about-1.png" alt="" />
          </div>
          <div className="right flex-1 p-5 text-sm sm:text-lg text-LightTextColor dark:text-DarkTextColor">
            <p>
              DarkGen Web is the right place to achive successfull Stories, We
              support Everyone want to work in real state field to make a lot of
              money and build a strong community and more clients. We're not a
              single developer, We Are A whole team Work For your success from
              ZERO to The Top.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row items-center py-5 text-center md:text-start">
          <div className="left flex-1 p-5 text-sm sm:text-lg text-LightTextColor dark:text-DarkTextColor">
            <h3 className="text-3xl md:text-4xl pt-3 pb-5">
              You have no idea what is waiting for you!
            </h3>
            <p>
              We specialize in crafting visually stunning and functionally
              robust websites tailored to the unique needs of the real estate
              industry. Our team of experienced designers and developers
              leverages cutting-edge technology to create websites that not only
              showcase your properties but also engage potential buyers and
              drive conversions. From property listings and virtual tours to
              advanced search features and lead generation tools, we provide
              comprehensive solutions to help you stand out in today's
              competitive market.
            </p>
          </div>
          <div className="right flex-1 md:me-10 rounded-lg overflow-hidden">
            {/* FIXME: An Image have a Laptop opened on a Real State website with high Income $ */}
            {/* <img src="/assets/images/dark-hero-shape.png" alt="" /> */}
            <img src="/assets/images/about-2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
