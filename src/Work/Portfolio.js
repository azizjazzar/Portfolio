import React from "react";
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-custom-dark w-full min-h-screen flex flex-col pt-28 relative">
      <img 
        src="/background.png" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-50" 
      />
      <div className="relative z-10 text-left px-4 py-8 mx-auto max-w-5xl">
        <h1 className="text-white text-6xl font-bold mb-4 font-serif" >
          {t("welcome")}{" "}
          <span className="text-custom-purple text-6xl font-bold">
            {t("devlp")}
          </span>
        </h1>
        <p className="text-white text-2xl mb-6">
          {t("descdev")}
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
