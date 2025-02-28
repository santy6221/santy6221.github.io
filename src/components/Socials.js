import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { activeTheme } from '../styles/theme';

const Socials = () => {
  return (
    <SocialsSection>
      <SocialContainer>
        <SocialLink href="https://github.com/santy6221" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/santiago62/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
      </SocialContainer>
    </SocialsSection>
  );
};

const SocialsSection = styled.section`
  width: 100%;
  background-color: ${activeTheme.background.secondary};
  padding: 2rem;
  margin-top: 0; // Add this to remove any top margin
  border-top: none; // Add this to ensure no border
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
`;

const SocialLink = styled.a`
  color: ${activeTheme.text.primary};
  font-size: 2rem;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    color: ${activeTheme.accent.primary};
    transform: translateY(-3px);
  }
`;

export default Socials;