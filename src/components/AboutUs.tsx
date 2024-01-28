import React from "react";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <section
      id="about-us"
      className=" h-screen justify-center items-start gap-2 md:gap-5 mt-[200px] flex px-3 "
    >
      {/* Moon Card */}
      <div className="bg-[#0a2a43]/90 border text-white border-white/50 p-3 md:p-8 rounded-lg shadow-md mt-5 md:mt-10 md:max-w-[600px] ">
        <img src="/images/moon.jpeg" className=" rounded-xl" />
        <h2 className="text-2xl font-bold md:before:mb-4">Moon</h2>
        <p className="text-gray-200">Description about the Moon...</p>
      </div>

      {/* Light Card */}
      <div className="bg-[#0a2a43]/90 border text-white border-white/50 p-3 md:p-8 rounded-lg shadow-md mt-5 md:mt-10 md:max-w-[600px]   ">
        <img src="/images/light.jpeg" className=" rounded-xl" />
        <h2 className="text-2xl font-bold md:mb-4">Light</h2>
        <p className="text-gray-200">Description about the Light...</p>
      </div>
    </section>
  );
};

export default AboutUs;
