import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { activeTheme } from '../styles/theme';

const Proyects = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY - (/*700 + */windowHeight+200); // Ajustado para la mitad de la pantalla
      const fadeRate = scrollPosition / 100; // Más gradual
      const newOpacity = 1 - fadeRate;
      setOpacity(Math.max(0, Math.min(1, newOpacity)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const proyects = [
    {
      title: "Morfi",
      description: "Morfi is a web application that allows user to book a table in a restaurant, order food and pay online. It was developed using the MERN stack.",
      image: "https://camo.githubusercontent.com/b214233b9b28b8529561d65a0b6c59fb266e41be1aeab9fb99ede6b3d309a689/68747470733a2f2f6c68362e676f6f676c6575736572636f6e74656e742e636f6d2f6254517274753332576b6f746933616e6d2d6150345151676c6b725a363366414c6443566e646d77764b52796a4845504a45486b434464666f664238596f51576c68574454516732797638715036394d72597649784e587a4c6d55486643594846626568346d354169706f737a6e6c4c534f4c7756714671417a7630665741416169523278363330434e766e6638703346537644425451",
      link: "https://github.com/elkake/Morfi-fix-offline",
    },
    {
      title: "Wawy",
      description: "Wawy is a virtual assistan or chatbot meant to help relieve stress and anxiety for university students during the COVID-19 pandemic. It was developed using React and Firebase.",
      image: "https://i.pinimg.com/736x/2b/f8/9d/2bf89d05212ecc7270ec88bfcedf8741.jpg",
      link: "#",
    },
    {
      title: "Hades Bot",
      description: "Hades is a Discord bot that allows users to play music, manage their server, and more. It integrates the gpt-3 API to provide a chatbot experience.",
      image: "https://miro.medium.com/v2/resize:fit:1024/1*1jC_k_32g_ppGdP3ejhyNQ.png",
      link: "#",
    },
  ];

  return (
    <ProyectsSection>
      <Title>My Proyects</Title>
      <ProyectsGrid>
        {proyects.map((proyect) => (
          <ProyectCard key={proyect.title} href={proyect.link} target="_blank" rel="noopener noreferrer">
            <h3>{proyect.title}</h3>
            <ImageContainer>
              <img src={proyect.image} alt={proyect.title} />
            </ImageContainer>
            <p>{proyect.description}</p>
          </ProyectCard>
        ))}
      </ProyectsGrid>
    </ProyectsSection>
  );
};

const ProyectsSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${activeTheme.background.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentWrapper = styled.div`
    transition: opacity 0.3s ease;
    width: 100%;
`;

const Title = styled.h2`
  color: ${activeTheme.text.primary};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const ProyectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProyectCard = styled.a`
  background-color: ${activeTheme.background.card};
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: ${activeTheme.text.primary};
    margin-bottom: 1rem;
    font-size: clamp(1.1rem, 2vw, 1.3rem);
  }

  p {
    color: ${activeTheme.text.secondary};
    margin-top: auto;
    font-size: clamp(0.9rem, 1.5vw, 1rem);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
  }

  ${ProyectCard}:hover & img {
    transform: scale(1.05);
  }
`;

export default Proyects;