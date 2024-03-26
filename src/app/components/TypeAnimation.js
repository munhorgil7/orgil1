'use client'
import React, { useState, useEffect } from 'react';

const TypeAnimation = ({ sequence, wrapper, speed, repeat }) => {
  const [index, setIndex] = useState(0);
  const [output, setOutput] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = index % sequence.length;
      const currentElement = sequence[currentIndex];

      if (typeof currentElement === 'string') {
        setOutput(currentElement);
      } else if (typeof currentElement === 'number') {
        setTimeout(() => {
          setIndex(index + 1);
        }, currentElement);
        return;
      }

      setIndex(index + 1);

      if (index === sequence.length - 1 && repeat !== 0) {
        if (repeat === Infinity || repeat > 1) {
          setIndex(0);
        }
        if (repeat !== Infinity) {
          repeat--;
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, sequence, speed, repeat]);

  if (wrapper) {
    const WrapperComponent = wrapper;
    return <WrapperComponent>{output}</WrapperComponent>;
  }

  return <>{output}</>;
};

export default TypeAnimation;
