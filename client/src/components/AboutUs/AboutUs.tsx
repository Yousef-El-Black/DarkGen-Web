import { motion } from "framer-motion";

const AboutUs = () => {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.5 },
    },
  };

  const childVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="AboutUs mb-5">
      <div className="container mx-auto" id="#aboutus">
        <div className="flex flex-col md:flex-row items-center py-5 text-center md:text-start">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            className="left flex-1 md:me-10 rounded-lg overflow-hidden"
          >
            {/* FIXME: An Image have a House and DarkGen Web Sign on */}
            {/* <img src="/assets/images/dark-hero-shape.png" alt="" /> */}
            <img loading="lazy" src="/assets/images/about-1.png" alt="" />
          </motion.div>
          <div className="right flex-1 p-5 text-sm sm:text-lg text-LightTextColor dark:text-DarkTextColor">
            <motion.p
              initial={{ x: 50, y: 50, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              DarkGen Web is the right place to achive successfull Stories, We
              support Everyone want to work in real state field to make a lot of
              money and build a strong community and more clients. We're not a
              single developer, We Are A whole team Work For your success from
              ZERO to The Top.
            </motion.p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row items-center py-5 text-center md:text-start">
          <motion.div
            initial="initial"
            animate="animate"
            variants={containerVariants}
            className="left flex-1 p-5 text-sm sm:text-lg text-LightTextColor dark:text-DarkTextColor"
          >
            <motion.h3
              variants={childVariants}
              className="text-3xl md:text-4xl pt-3 pb-5"
            >
              You have no idea what is waiting for you!
            </motion.h3>
            <motion.p variants={childVariants}>
              We specialize in crafting visually stunning and functionally
              robust websites tailored to the unique needs of the real estate
              industry. Our team of experienced designers and developers
              leverages cutting-edge technology to create websites that not only
              showcase your properties but also engage potential buyers and
              drive conversions. From property listings and virtual tours to
              advanced search features and lead generation tools, we provide
              comprehensive solutions to help you stand out in today's
              competitive market.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileInView={{ opacity: 1 }}
            className="right flex-1 md:me-10 rounded-lg overflow-hidden"
          >
            {/* FIXME: An Image have a Laptop opened on a Real State website with high Income $ */}
            {/* <img src="/assets/images/dark-hero-shape.png" alt="" /> */}
            <img loading="lazy" src="/assets/images/about-2.jpg" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
