import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'SQL', level: 75 },
  ];

  return (
    <SkillsSection>
      <h2>Mis Habilidades</h2>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SkillCard>
              <h3>{skill.name}</h3>
              <ProgressBar>
                <Progress width={skill.level} />
              </ProgressBar>
            </SkillCard>
          </motion.div>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #111;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #ffffff;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  background-color: #1a1a1a;
  padding: 1.5rem;
  border-radius: 8px;
  
  h3 {
    color: #ffffff;
    margin-bottom: 1rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #333;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => props.width}%;
  height: 100%;
  background-color: #64ffda;
  transition: width 1s ease-in-out;
`;

export default Skills;