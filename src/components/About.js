import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { activeTheme } from '../styles/theme';

const About = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY - (/*1600 + */ windowHeight + 1500); // About offset
      const fadeRate = scrollPosition / 600;
      const newOpacity = 1 - fadeRate;
      setOpacity(Math.max(0, Math.min(1, newOpacity)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const experience = [
    {
      company: "No Country",
      position: "Backend Developer",
      period: "2023",
      description: "Diseño e implementación de APIs REST utilizando tecnologías modernas como Node.js, Express.js y MongoDB, implementación de endpoints para la gestión de recursos, autenticación de usuarios y consultas a bases de datos.",
      english: "Design and implementation of REST APIs using modern technologies such as Node.js, Express.js and MongoDB, implementation of endpoints for resource management, user authentication and database queries.",
    },
    {
        company: "Freelance",
        position: "Full Stack Developer",
        period: "2022 - Actualidad",
        description: "Desarrollo de aplicaciones web y móviles utilizando tecnologías como React, Node.js, Express.js, MongoDB y React Native. Diseño de interfaces de usuario y desarrollo de componentes reutilizables.",
        english: "Development of web and mobile applications using technologies such as React, Node.js, Express.js, MongoDB and React Native. Design of user interfaces and development of reusable components.",
    }
    // Add more experiences...
  ];

  const education = [
    {
      institution: "Universidad San Buenaventura",
      degree: "Multimedia Engineering",
      period: "2017 - 2023",
      description: "Software development, web design, 3D modeling, animation, video editing, and audio production.",
    },
    {
        institution: "Test Automation University",
        degree: "Introduction to Test Automation",
        period: "2023",
        description: "Introduction to test automation with Selenium WebDriver, Java, and TestNG.",
    },
    {
        institution: "Harvard X",
        degree: "CS50's Introduction to Computer Science",
        period: "2024",
        description: "An introduction to the world of computer science, covering the basics of algorithms, data structures, and software development.",
    },
    {
        institution: "Universidad Javeriana",
        degree: "Buisness Intelligence and Data Analysis diploma",
        period: "2024",
        description: "A comprehensive course on business intelligence and data analysis using Power BI.",
    }
    // Add more education...
  ];

  return (
    <AboutSection>
      <Title>About Me</Title>
      <ContentContainer>
        <Section>
          <SectionTitle>Experience</SectionTitle>
          {experience.map((exp, index) => (
            <Card key={index}>
              <h4>{exp.position}</h4>
              <h5>{exp.company}</h5>
              <Period>{exp.period}</Period>
              <p>{exp.english}</p>
            </Card>
          ))}
        </Section>
        <Section>
          <SectionTitle>Education</SectionTitle>
          {education.map((edu, index) => (
            <Card key={index}>
              <h4>{edu.degree}</h4>
              <h5>{edu.institution}</h5>
              <Period>{edu.period}</Period>
              <p>{edu.description}</p>
            </Card>
          ))}
        </Section>
      </ContentContainer>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${activeTheme.background.primary};
  min-height: 100vh;
`;

const Title = styled.h2`
  color: ${activeTheme.text.primary};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h3`
  color: ${activeTheme.accent.primary};
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Card = styled.div`
  background-color: ${activeTheme.background.card};
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    color: ${activeTheme.text.primary};
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  h5 {
    color: ${activeTheme.accent.primary};
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${activeTheme.text.secondary};
    font-size: 0.9rem;
  }
`;

const Period = styled.span`
  display: block;
  color: ${activeTheme.text.secondary};
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export default About;