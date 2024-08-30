import React from "react";
import { useTranslation } from 'react-i18next';
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Url = styled.a`
  display: block;
  color: green;
  text-decoration: underline;
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;

  &:hover {
    text-decoration: none;
  }
`;

const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation();

  return (
    <VerticalTimelineElement
    
      icon={
        experience?.img && (
          <img
            width="100%"
            height="100%"
            alt={experience?.company}
            style={{ borderRadius: "50%", objectFit: "cover" }}
            src={experience?.img}
          />
        )
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={t(experience?.date)}
    >
      <Top>
        {experience?.img && <Image src={experience?.img} />}
        <Body>
          {experience?.role && <Role>{t(experience?.role)}</Role>}
          {experience?.company && <Company>{t(experience?.company)}</Company>}
          {experience?.date && <Date>{t(experience?.date)}</Date>}
        </Body>
      </Top>
      <Description>
        {Array.isArray(experience?.desc) ? (
          experience.desc.map((item, index) => (
            <Span key={index}>• {t(item)}</Span>
          ))
        ) : (
          experience?.desc && <Span>• {t(experience?.desc)}</Span>
        )}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>{t('Skills')}</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={index}>• {t(skill)}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
        {experience?.url && experience?.urlMessage && (
          <Url href={experience.url} target="_blank" rel="noopener noreferrer">
            {t(experience.urlMessage)}
          </Url>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
