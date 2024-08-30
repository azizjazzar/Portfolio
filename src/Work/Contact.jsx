import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com';
import EarthCanvas from "../canvas/Earth";
import { motion, useInView } from 'framer-motion';
// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  padding: 20px;
  z-index: 2;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: white;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => `${theme.text_secondary}50`}; 
  outline: none;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.primary};

`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => `${theme.text_secondary}50`}; 
  outline: none;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
    border: 1px  ${({ theme }) => theme.primary};
  
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const CanvasWrapper = styled(motion.div)`
  width: 40%;
  height: 80%;
  z-index: 1;
`;

// Component
const Contact = () => {
  const form = useRef();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true }); 

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_33tkwiv",
        "template_o3xk2pc",
        form.current,
        "ODZCnKXeFlB09rlNq"
      )
      .then(
        (result) => {
          alert("Message Sent");
          form.current.reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <Container ref={containerRef}>
      <Wrapper
        initial={{ x: '-100vw', opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
      >
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInputMessage placeholder="Message" name="message" rows={4} />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>

      <CanvasWrapper
        initial={{ x: '100vw', opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 50, duration: 0.8 }}
      >
        <EarthCanvas />
      </CanvasWrapper>
    </Container>
  );
};

export default Contact;
