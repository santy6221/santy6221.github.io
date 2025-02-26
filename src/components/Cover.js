import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Cover = () => {
    return (
        <CoverComponent>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <h1>Hola, mi nombre es Santiago Rodríguez</h1>
                <h2>Desarrollador Web</h2>
                <p>¡Bienvenido a mi portafolio!</p>
            </motion.div>
        </CoverComponent>
    );
};

const CoverComponent = styled.div`
  background: #111;
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

export default Cover;