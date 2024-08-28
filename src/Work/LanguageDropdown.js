import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false); 
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-4" ref={dropdownRef}>
      <button
        className="flex items-center px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded hover:bg-gray-700 focus:outline-none"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <img
          src={`/${i18n.language}.png`} 
          alt="Language"
          className="w-6 h-4 mr-2"
        />
        {i18n.language.toUpperCase()}
        <svg
          className="ml-2 -mr-1 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 w-48 mt-2 origin-top-right bg-gray-800 border border-gray-700 rounded shadow-lg">
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange('en')}
              className="flex items-center px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
            >
              <img
                src="/en.png" 
                alt="English"
                className="w-6 h-4 mr-2"
              />
              English
            </button>
            <button
              onClick={() => handleLanguageChange('fr')}
              className="flex items-center px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
            >
              <img
                src="/fr.png" 
                alt="French"
                className="w-6 h-4 mr-2"
              />
              Français
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
