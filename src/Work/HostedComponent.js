import React from "react";
import { useTranslation } from 'react-i18next';

const Project = ({ title, description, url }) => {
    const handleClick = () => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <div
            onClick={handleClick}
            className="relative bg-custom-hberged text-white p-4 rounded-md mb-4 h-[470px] w-[300px] cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg select-none"
        >
            <div className="flex flex-wrap justify-center gap-4">
                <img
                    src="/collab.jpg"
                    className="rounded w-[300px] h-[200px] flex"
                    alt="Project"
                />
            </div>
            <h3 className="text-xl font-semibold text-left py-4">{title}</h3>
            <p className="text-[15px] text-custom-text text-left pb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
                <p className="text-blue-700">#Reactjs</p>
                <p className="text-green-700">#ExpressJs</p>
                <p className="text-red-500">#NodeJs</p>
                <p className="text-white mt-auto">#MongoDB</p>
            </div>
        </div>
    );
};

const ProjectComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-center mt-[100px]">
            <div className="text-white text-center pb-7 w-[1000px]">
                <h2 className="text-white text-4xl sm:text-1xl md:text-4xl font-bold font-serif">
                    {t('hosted')}
                </h2>
                <p className="text-custom-text-gray text-lg sm:text-md md:text-lg mb-6 font-light pt-6 leading-[1.75]">
                    {t("hosteddesc")}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Project
                        title="Collabhub"
                        description={t("collab")}
                        url="https://collabhub-esprit.onrender.com"
                    />
                    {/* Ajoutez d'autres projets ici si nécessaire */}
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;
