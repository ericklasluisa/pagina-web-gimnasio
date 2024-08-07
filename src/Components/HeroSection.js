import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ toggleModal }) => {
  return (
    <section
      id="home"
      className=" w-screen flex-1 bg-hero-pattern bg-cover bg-fixed bg-left max-sm:bg-center max-lg:bg-center"
    >
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          repeatDelay: 10,
          repeat: Infinity,
        }}
        className=" min-h-screen max-container font-semibold flex justify-center items-start flex-col padding-x overflow-x-hidden"
      >
        <div className=" my-12 text-8xl max-lg:text-7xl text-white max-w-[60%] max-xl:max-w-[70%] max-lg:max-w-[80%] max-md:max-w-[100%] max-sm:text-3xl">
          <h1>¡ALCANZA TUS METAS, SUPERA TUS LÍMITES!</h1>
        </div>

        <button
          className=" py-4 px-7 text-xl group relative text-white bg-[orangered] rounded-sm"
          onClick={toggleModal}
        >
          <div className=" buttonDiv"></div>
          <span className="buttonSpan">INSCRIBETE AHORA</span>
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
