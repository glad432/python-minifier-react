import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const TypewriterComponent = () => {
  const features = [
    { text: 'Efficiency', color: '#4CAF50' },
    { text: 'Safety', color: '#2196F3' },
    { text: 'Quick', color: '#FF9800' },
    { text: 'Speed', color: '#673AB7' },
    { text: 'Reliability', color: '#F44336' },
    { text: 'Protection', color: '#009688' },
    { text: 'Robust', color: '#C775C9' }
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    const typewriter = new Typewriter('#typewriter', {
      loop: true,
      delay: 50
    });

    shuffleArray(features);

    features.forEach((feature, index) => {
      typewriter
        .pauseFor(1000)
        .deleteAll()
        .typeString(`<span style="color: ${feature.color}">${feature.text}</span>`)
        .pauseFor(1000)
        .start();
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return <div className="text-center">Python minifier for <span id="typewriter"></span></div>;
};

export default TypewriterComponent;
