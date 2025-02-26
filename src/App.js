import React from 'react';
import styled from 'styled-components';
import Cover from './components/Cover';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <AppContainer>
      <Cover />
      <Skills />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: #0a0a0a;
`;

export default App;
