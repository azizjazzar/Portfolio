import React from "react";
import { useTranslation } from 'react-i18next';
import ProjectComponent from "./ProjectComponent";
import HostedComponent from "./HostedComponent";
import SkillsComponent from "./SkillsComponent";
import Experience from './Experience';
import Contact from './Contact';
import Skills from "./Skills";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-custom-dark w-full min-h-screen flex flex-col pt-2 relative">
      {/* Main Section with Background Image */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        
        <img
          src="/background.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 px-4 mx-auto max-w-5xl text-left">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-serif">
            {t("welcome")}{" "}
            <span className="text-custom-purple text-3xl sm:text-4xl md:text-5xl font-extrabold">
              {t("devlp")}
            </span>
          </h1>
          <p className="text-white text-xl sm:text-2xl md:text-2xl mb-6 font-normal mt-6">
            {t("descdev")}
          </p>
          <div className="flex items-center justify-center pt-[50px]">
            <button className="gradient-button w-[400px]">
              {t("3dbutton")}
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="relative z-10 px-4 py-24 mx-auto max-w-5xl text-center">

        <h2 className="text-white text-4xl sm:text-1xl md:text-4xl font-bold mb-4 font-serif">
          {t('about')}
        </h2>
        <h2 className="text-custom-text-gray text-1xl sm:text-1xl md:text-1xl font-bold mb-4 font-serif">
          {t('aboutme')}
        </h2>
        <p className="text-custom-text-gray text-sm sm:text-base md:text-lg mb-6 font-light pt-6 leading-[1.75]">
          {t('aboutDesc')}
        </p>
      </div>

      <div id="project">
      <Experience></Experience>

      </div>
      <div id="hosted">
      <HostedComponent />

      </div>
      <div id="skills">
      <Skills></Skills>
      </div>
      <div className="text-white text-center pt-28">
        <h2 className="text-white text-3xl sm:text-3xl md:text-3xl font-bold mb-4 font-serif">
          Contact
        </h2>
      </div>
      <div id="contact">
      <Contact></Contact>
      </div>

    </div>

  );
};

export default Portfolio;
