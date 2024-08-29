import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Project = ({ title, description }) => (
    <div className="relative bg-gray-800 text-white p-4 rounded-md mb-4 h-auto w-[450px]">
        {/* Flèche */}
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

// PropType validation for the Project component
Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.node).isRequired,
};

const ProjectComponent = () => {
    const { t } = useTranslation();

    const intershipDescription1 = [
        t("t1"),
        t("t2"),
        t("t3"),
        t("t4"),
        <span key="link1">{t("t6")} <a href="https://www.plugandtel.com" className="text-green-500 underline">https://www.plugandtel.com</a></span>,
    ];

    const intershipDescription2 = [
        t("t31"),
        t("t32"),
        t("t33"),
        t("t34"),
        <span key="link2">{t("t6")} <a href="https://github.com/azizjazzar/CollabhubFrontEnd" className="text-green-500 underline">https://github.com/azizjazzar/CollabhubFrontEnd</a></span>,
    ];

    const intershipDescription3 = [
        t("t21"),
        t("t22"),
        t("t23"),
        t("t24"),
        <span key="link3">{t("t6")} <a href="https://github.com/azizjazzar/ELectrigo" className="text-green-500 underline">https://github.com/azizjazzar/ELectrigo</a></span>,
    ];

    const intershipDescription4 = [
        t("t41"),
        t("t42"),
        t("t43"),
        <span key="link4">{t("t6")} <a href="https://www.wifakbank.com" className="text-green-500 underline">https://www.wifakbank.com</a></span>,
    ];

    return (
        <>
        {/* Projects Section */}
        <div className="text-white text-center pb-7">
            <h2 className="text-white text-4xl sm:text-1xl md:text-4xl font-bold mb-4 font-serif">
                {t('Intership')}
            </h2>
            <p>{t("intershipdesc")}</p>
        </div>

        {/* InternShip */}
        <div className="relative mx-auto flex items-center justify-center h-[2100px] text-custom-purple">
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-1 h-full"></div>
            <div className="relative w-full h-full flex flex-col items-center">
                {/*1 project */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-4 border-white w-16 h-16 rounded-full bg-custom-card-gray">
                    <img className='rounded-full' src="/plug_logo.jpg" ></img>
                </div>
                <div className="absolute top-4 left-[-290px] text-custom-gray">
                    <h1 className="text-white text-1xl sm:text-1xl md:text-1xl font-bold mb-4 font-serif pb-7">
                        {t('IntershipDate1')}
                    </h1>
                </div>
                <div className="absolute top-[30px] left-[300px] transform -translate-x-1/2">
                    <Project title={t("Intershipname1")} description={intershipDescription1}></Project>
                </div>
                {/*2 project */}
                <div className="absolute top-[530px] left-1/2 transform -translate-x-1/2 border-4 border-white w-16 h-16 rounded-full bg-custom-card-gray">
                    <img className='rounded-full' src="/770.jpg" ></img>
                </div>
                <div className="absolute left-[50px] top-[545px] text-custom-gray w-[300px]">
                    <h1 className="text-white text-1xl sm:text-1xl md:text-1xl font-bold mb-4 font-serif pb-7">
                        {t('IntershipDate2')}
                    </h1>
                </div>
                <div className="absolute top-[580px] right-[-150px] transform -translate-x-1/2">
                    <Project title={t("Intershipname3")} description={intershipDescription2}></Project>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-4 border-white w-16 h-16 rounded-full bg-custom-card-gray"></div>

                {/*3 project */}
                <div className="absolute top-[1050px] left-1/2 transform -translate-x-1/2 border-4 border-white w-16 h-16 rounded-full bg-custom-card-gray">
                    <img className='rounded-full' src="/images.jpg" ></img>
                </div>
                <div className="absolute top-[1070px] right-[-100px] text-custom-gray w-[400px]">
                    <h1 className="text-white text-1xl sm:text-1xl md:text-1xl font-bold mb-4 font-serif pb-7">
                        {t('IntershipDate2')}
                    </h1>
                </div>
                <div className="absolute top-[1100px] left-[300px] transform -translate-x-1/2">
                    <Project title={t("Intershipname2")} description={intershipDescription3}></Project>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-4 border-white w-16 h-16 rounded-full bg-custom-card-gray"></div>

            </div>
              {/*4 project */}
                <div className="absolute top-[1580px] left-1/2 transform -translate-x-1/2 border-4 border-white w-16 h-16 rounded-full bg-custom-card-gray">
                    <img className='rounded-full' src="/wifak.jpg" ></img>
                </div>
                <div className="absolute top-[1595px] left-[70px] text-custom-gray w-[400px]">
                    <h1 className="text-white text-1xl sm:text-1xl md:text-1xl font-bold mb-4 font-serif pb-7">
                        {t('IntershipDate4')}
                    </h1>
                </div>
                <div className="absolute top-[1630px] right-[-150px] transform -translate-x-1/2">
                    <Project title={t("Intershipname4")} description={intershipDescription4}></Project>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-4 border-white w-16 h-16 rounded-full bg-custom-card-gray"></div>

        </div>
    </>
    );
};

// PropType validation for the ProjectComponent
ProjectComponent.propTypes = {
    title: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.node),
};

export default ProjectComponent;
