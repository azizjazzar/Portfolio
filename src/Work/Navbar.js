import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import LanguageDropdown from "./LanguageDropdown";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 transition-colors duration-300 ${scrolled ? 'bg-gray-900' : 'bg-custom-dark'} z-50`}>
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
        <div className="lg:flex lg:items-center lg:justify-center hidden lg:block flex-grow">
          <a href="/projects" className="text-white block px-4 py-2 rounded hover:text-gray-400 transition duration-300">{t('projects')}</a>
          <a href="/about" className="text-white block px-4 py-2 rounded hover:text-gray-400 transition duration-300">{t('about')}</a>
          <a href="/contact" className="text-white block px-4 py-2 rounded hover:text-gray-400 transition duration-300">{t('contact')}</a>
          <a href="/hosted" className="text-white block px-4 py-2 rounded hover:text-gray-400 transition duration-300">{t('Hosted')}</a>
          <a href="/skills" className="text-white block px-4 py-2 rounded hover:text-gray-400 transition duration-300">{t('Skills')}</a>
          <a href="/github" className="text-white block px-4 py-2 rounded hover:text-gray-400 transition duration-300">{t('GitHub')}</a>
          <a href="/linkedin" className="text-white block px-4 py-2 rounded hover:text-gray-400 transition duration-300">{t('Linkedin')}</a>
          <a href="/resume" className="text-white block px-4 py-2 rounded hover:text-gray-400 transition duration-300">{t('Resume')}</a>
          <div ref={dropdownRef} className="relative">
            <button onClick={toggleDropdown} className="text-white px-4 py-2 rounded hover:text-gray-400 transition duration-300">
              {t('language')}
            </button>
            {isDropdownOpen && <LanguageDropdown />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
