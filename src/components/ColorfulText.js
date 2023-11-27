import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ColorfulText = ({ text }) => {
  const [coloredText, setColoredText] = useState([]);

  useEffect(() => {
    const generateRandomColor = () => Math.floor(Math.random() * 200);

    const getColorStyle = () => ({
      color: `rgb(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`,
    });

    const transformTextToSpans = () => {
      const characters = text.split('');
      const coloredCharacters = characters.map((char, index) => (
        <span key={index} style={getColorStyle()}>
          {char}
        </span>
      ));
      setColoredText(coloredCharacters);
    };

    transformTextToSpans();
  }, [text]);

  const Container = styled.div`
  padding: 0 20px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.25);
  }
  `;
  return <Container>{coloredText}</Container>;
};

export default ColorfulText;