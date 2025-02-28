import React from 'react';
import styled from 'styled-components';
import Cover from './components/Cover';
import Proyects from './components/Proyects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Socials from './components/Socials';
import About from './components/About';
import './App.css';

function App() {
  return (
    <AppContainer>
      <Cover />
      <MainContent>
        <Proyects />
        <About />
        <Skills />
        <Contact />
        <Socials />
      </MainContent>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`;

const MainContent = styled.div`
  position: sticky;
  z-index: 2;
  margin-top: 100vh;
  background-color: #0a0a0a;
`;

export default App;
