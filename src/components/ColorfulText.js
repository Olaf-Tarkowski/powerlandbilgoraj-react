import React, { useState, useEffect } from "react";

const ColorfulText = ({ text }) => {
  const initialColors = [
    "rgb(239, 124, 0)",
    "rgb(174, 203, 6)", //nie wiem czy brac czy nie
    "rgb(0, 137, 209)",
    "rgb(226, 0, 14)",
    "rgb(229, 0, 124)",
    "rgb(0, 149, 62)",
    "rgb(255, 237, 0)",
  ];

  const [coloredText, setColoredText] = useState([]);
  const [colors] = useState(initialColors);

  useEffect(() => {
    const getRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

    const getColorStyle = () => ({
      color: getRandomColor(),
    });

    const transformTextToSpans = () => {
      const characters = text.split("");
      const coloredCharacters = characters.map((char, index) => (
        <span key={index} style={getColorStyle()}>
          {char}
        </span>
      ));
      setColoredText(coloredCharacters);
    };

    transformTextToSpans();
  }, [text, colors]);

  return <div>{coloredText}</div>;
};

export default ColorfulText;
