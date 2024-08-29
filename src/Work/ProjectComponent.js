import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Project = ({ title, description }) => (
    <div className="relative bg-gray-800 text-white p-4 rounded-md mb-4 h-auto w-[450px]">
        <div className="absolute top-0 left-0 transform -translate-x-full w-0 h-0 border-t-8 border-b-8 border-transparent border-r-8 border-white"></div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <ul className="mt-2 list-disc list-outside pl-5">
            {description.map((item, index) => (
                <li key={index} className="mt-1 pl-2">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ])).isRequired,
};

const ProjectComponent = () => {
    const { t } = useTranslation();

    const intershipDescription1 = [
        t("t1"),
        t("t2"),
        t("t3"),
        t("t4"),
        <span key="link-text">{t("t6")} <a href="https://www.plugandtel.com" className="text-green-500 underline">https://www.plugandtel.com</a></span>,
    ];

 
    return (
        <>
            <div className="text-white text-center pb-7">
                <h2 className="text-white text-4xl sm:text-1xl md:text-4xl font-bold mb-4 font-serif">
                    {t('Intership')}
                </h2>
                <p>{t("intershipdesc")}</p>
            </div>

            <div className="relative mx-auto flex items-center justify-center h-[2100px] text-custom-purple">
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-1 h-full"></div>
                <div className="relative w-full h-full flex flex-col items-center">

                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-4 border-white w-16 h-16 rounded-full bg-custom-card-gray">
                        <img className='rounded-full' src="/plug_logo.jpg" alt="Plug and Tel"></img>
                    </div>
                    <div className="absolute top-4 left-[-290px] text-custom-gray">
                        <h1 className="text-white text-1xl sm:text-1xl md:text-1xl font-bold mb-4 font-serif pb-7">
                            {t('IntershipDate1')}
                        </h1>
                    </div>
                    <div className="absolute top-[30px] left-[300px] transform -translate-x-1/2">
                        <Project title={t("Intershipname1")} description={intershipDescription1}></Project>
                    </div>

           

                </div>
            </div>
        </>
    );
}

export default ProjectComponent;
