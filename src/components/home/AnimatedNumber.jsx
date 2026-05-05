import { useState, useEffect } from 'react';

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const endMatch = value.match(/[0-9.]+/);
    if (!endMatch) return;

    const end = parseFloat(endMatch[0]);
    if (isNaN(end)) return;

    const isFloat = value.includes('.');

    let timer = setInterval(() => {
      start += (end / 50);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(isFloat ? start.toFixed(1) : Math.floor(start));
      }
    }, duration / 50);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}{value.replace(/[0-9.]/g, '')}</span>;
};

export default AnimatedNumber;
