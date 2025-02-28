import React from 'react';
import styled from 'styled-components';
import { activeTheme } from '../styles/theme';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'SQL', level: 75 },
    { name: 'MongoDB', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'Angular', level: 70 },
    { name: 'NestJs', level: 80 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 60 },
    { name: 'Git', level: 90 },
    { name: 'Agile', level: 90 },
    { name: 'Swagger', level: 90 },
  ];

  return (
    <SkillsSection>
      <Title>My Skills</Title>
      <SkillsGrid>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            <h3>{skill.name}</h3>
            <ProgressBar>
              <Progress width={skill.level} />
            </ProgressBar>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 3rem 2rem;
  background-color: ${activeTheme.background.primary};
  min-height: 80vh; // Reduced from 100vh
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentWrapper = styled.div`
    transition: opacity 0.3s ease;
    width: 100%;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  background-color: ${activeTheme.background.card};
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: ${activeTheme.text.primary};
    margin-bottom: 1rem;
  }
`;

const ProgressBar = styled.div`
  background-color: ${activeTheme.background.secondary};
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => props.width}%;
  height: 100%;
  background-color: ${activeTheme.accent.primary};
  transition: width 0.3s ease;
`;

const Title = styled.h2`
  color: ${activeTheme.text.primary};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

export default Skills;