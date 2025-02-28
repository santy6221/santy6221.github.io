import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { activeTheme } from '../styles/theme';
// import { motion } from 'framer-motion';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("");
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY - (2400 + windowHeight/2); // About offset
            const fadeRate = scrollPosition / 600;
            const newOpacity = 1 - fadeRate;
            setOpacity(Math.max(0, Math.min(1, newOpacity)));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 150 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Enviando...");

        emailjs.sendForm(
            'service_ihg6to8',
            'template_esqtwkx',
            form.current,
            'M-EuvLGmdJJD57hT9'
        )
        .then((result) => {
            setStatus("¡Mensaje enviado exitosamente!");
            form.current.reset();
        }, (error) => {
            setStatus("Error al enviar el mensaje. Por favor, intenta nuevamente.");
        });
    };

    return (
        <ContactSection>
          <Title>Contact Me</Title>
          <ContactCard>
            <ContactForm ref={form} onSubmit={sendEmail}>
              <InputGroup>
                <input type="text" name="from_name" placeholder="Name" required />
              </InputGroup>
              <InputGroup>
                <input type="email" name="from_email" placeholder="Email" required />
              </InputGroup>
              <InputGroup>
                <textarea name="message" placeholder="Your Message Here" required />
              </InputGroup>
              <Button type="submit">Send Message</Button>
              {status && <StatusMessage>{status}</StatusMessage>}
            </ContactForm>
          </ContactCard>
        </ContactSection>
      );
};

const ContactSection = styled.section`
  padding: 3rem 2rem;
  background-color: ${activeTheme.background.primary};
  min-height: 80vh; // Reduced from 100vh
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const Title = styled.h2`
  color: ${activeTheme.text.primary};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const ContactCard = styled.div`
  background-color: ${activeTheme.background.card};
  padding: 2.5rem;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const InputGroup = styled.div`
  width: 100%;
  
  input, textarea {
    width: 100%;
    padding: 15px;
    background: ${activeTheme.background.secondary};
    border: 1px solid ${activeTheme.background.secondary};
    color: ${activeTheme.text.primary};
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    
    &:focus {
      outline: none;
      border-color: ${activeTheme.accent.primary};
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const Button = styled.button`
  background: ${activeTheme.accent.primary};
  color: ${activeTheme.background.primary};
  padding: 15px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: ${activeTheme.accent.secondary};
    transform: translateY(-2px);
  }
`;

const StatusMessage = styled.p`
    text-align: center;
    color: #64ffda;
    margin-top: 10px;
`;

export default Contact;