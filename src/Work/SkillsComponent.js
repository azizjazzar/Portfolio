import React from "react";
import { useTranslation } from 'react-i18next';

const skillsData = {
  "Academic & Self-Learned Skills": [
    "ReactJs",
    "Angular",
    "NodeJs",
    "ExpressJs",
    "Java Spring Boot",
    "dotNET",
    "Symfony",
    "CSS",
    "Bootstrap",
    "TAILWIND",
    "SDL 1.2 C library",
    "Microcontroller programming MikroC",
    "QT c++",
    "Arduino",
    "JavaFX",
    "CodenameOne"
  ],
  "Programming Languages": [
    "C",
    "C++",
    "C#",
    "PHP",
    "Java",
    "JavaScript",
    "Python",
    "Shell scripting"
  ],
  "Databases": [
    "MySQL/PLSQL",
    "NoSQL: MongoDB"
  ],
  "DevOps Tools": [
    "GitHub",
    "Docker",
    "Nexus",
    "Grafana",
  ],
  "Adobe": [
    "Premiere Pro",
    "Photoshop"
  ],
  "Other": [
    "GitHub",
    "Gitbash",
    "UML",
    "HTML",
    "REST",
    "SOA",
    "XML",
    "Linux",
    "UNIX",
    "KALI OS",
  ]
};

const SkillsComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-custom-dark text-white">
      <h2 className="text-3xl font-bold mb-16 text-center">{t('Skills')}</h2>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={index} className="mb-6">
              <div className="bg-custom-new rounded-lg mb-4 w-[1000px] h-[40px]">
                <h3 className="text-[18px] font-semibold mb-4 text-left pt-1 pl-2">{t(category)}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, i) => (
                  <div key={i} className="p-2 rounded-lg text-center text-[16px]">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
