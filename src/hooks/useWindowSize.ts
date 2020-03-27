import { useEffect, useState } from 'react';

type Size = {
  width: number;
  height: number;
};

const getSize = (): Size => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export default (): {
  width: number;
  height: number;
} => {
  const [size, setSize] = useState(getSize());
  useEffect(() => {
    const updateSize = (): void => setSize(getSize());
    window.addEventListener('resize', updateSize);
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};
