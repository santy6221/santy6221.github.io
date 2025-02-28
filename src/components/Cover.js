import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { activeTheme } from '../styles/theme';

const Cover = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Adjust the divisor to control how quickly the fade happens
            const fadeRate = scrollPosition / 400; // Fade threshold
            const newOpacity = 1 - fadeRate;
            setOpacity(Math.max(0, Math.min(1, newOpacity))); // Clamp between 0 and 1
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <CoverComponent>
            <ContentWrapper style={{ opacity }}>
                <h1>Hi, My Name Is Santiago Rodríguez</h1>
                <h3>¡Welcome to my online portfolio!</h3>
                <p>I'm a Full Stack Developer with a passion for building web and mobile applications.</p>
                <p>Feel free to explore my projects, skills, and experience.</p>
            </ContentWrapper>
        </CoverComponent>
    );
};

const CoverComponent = styled.div`
    background: ${activeTheme.background.primary};
    color: ${activeTheme.text.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;

    h1 {
        color: ${activeTheme.text.primary};
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    p {
        color: ${activeTheme.text.secondary};
        font-size: 1.2rem;
    }
`;

const ContentWrapper = styled.div`
    transition: opacity 0.3s ease;
    padding: 0 20px;
    
    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    
    p {
        font-size: 1.5rem;
    }
`;

export default Cover;