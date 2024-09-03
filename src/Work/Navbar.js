import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import LanguageDropdown from "./LanguageDropdown";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const setLanguage = useState('fr'); // État pour la langue
  const [showModal, setShowModal] = useState(false); // État pour afficher la modale
  const { t } = useTranslation(); // Retirer i18n car non utilisé
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowModal(false); // Fermer la modale lorsque l'utilisateur clique en dehors
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowModal(false); // Fermer la modale après sélection
    const pdfUrl = selectedLanguage === 'fr' ? '/resume_fr.pdf' : '/resume_en.pdf';
    window.open(pdfUrl, '_blank'); // Téléchargez le PDF en fonction de la langue sélectionnée
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full p-4 transition-colors duration-300 ${scrolled ? 'bg-gray-900' : 'bg-custom-dark'} z-50`} style={{ userSelect: 'none' }}>
        <div className="container mx-auto flex items-center">
          <img src="/jazzar.jpg" alt="Aziz Jazzar" className="w-12 h-12 rounded-full mr-5" />
          <div className="text-white text-2xl font-bold">Aziz Jazzar</div>
          <div className="lg:hidden ml-auto">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={scrolled ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
          <div className="lg:flex lg:items-center lg:justify-center hidden flex-grow">
            <a href="#project" className="text-custom-gray block px-4 py-2 rounded hover:text-white transition duration-300">{t('projects')}</a>
            <a href="#about" className="text-custom-gray block px-4 py-2 rounded hover:text-white transition duration-300">{t('about')}</a>
            <a href="#contact" className="text-custom-gray block px-4 py-2 rounded hover:text-white transition duration-300">{t('contact')}</a>
            <a href="#hosted" className="text-custom-gray block px-4 py-2 rounded hover:text-white transition duration-300">{t('Hosted')}</a>
            <a href="#skills" className="text-custom-gray block px-4 py-2 rounded hover:text-white transition duration-300">{t('Skills')}</a>
            <a href="https://github.com/azizjazzar" className="flex items-center space-x-2 text-custom-gray block px-4 py-2 rounded hover:text-white transition duration-300">
              <img src="/github.png" alt="GitHub" className="w-6 h-6" />
              <span>{t('GitHub')}</span>
            </a>
            <a href="https://www.linkedin.com/in/jazzar-aziz-268141219/" className="flex items-center space-x-2 text-custom-gray block px-4 py-2 rounded hover:text-white transition duration-300">
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              <span>{t('Linkedin')}</span>
            </a>

            {/* Assurez-vous de bien passer `setLanguage` en prop à LanguageDropdown */}
            <div ref={dropdownRef} className="relative">
              <LanguageDropdown setLanguage={setLanguage} />
            </div>
          </div>
        </div>
      </nav>

      {/* Modale pour la sélection de langue */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Select Language</h2>
            <button onClick={() => handleLanguageSelect('fr')} className="block mb-2">Français</button>
            <button onClick={() => handleLanguageSelect('en')} className="block">English</button>
            <button onClick={() => setShowModal(false)} className="mt-4 text-red-500">Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
