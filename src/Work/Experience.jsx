import React from "react";
import { useTranslation } from 'react-i18next';
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { experiences } from "../data/constants";
import ExperienceCard from "../cards/ExperienceCard";
import PropTypes from 'prop-types';
import StyledStarsCanvas from "../canvas/Stars";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  position: relative; /* Correction de 'rlative' */
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Experience = () => {
  const { t } = useTranslation();
  ExperienceCard.propTypes = {
    experience: PropTypes.shape({
      img: PropTypes.string,
      company: PropTypes.string,
      role: PropTypes.string,
      date: PropTypes.string,
      desc: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  };
  return (
    <Container id="Experience" className="bg-custom-dark">
      <Wrapper>
        <Title className="text-white">{t('Experience')}</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
        </Desc>
        <VerticalTimeline>
          
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
      <StyledStarsCanvas/>
    </Container>
  );
};

export default Experience;
