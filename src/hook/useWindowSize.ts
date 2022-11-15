import { useEffect, useState } from "react";

export function useWindowSize(){
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = process.browser
      ? window
      : { innerWidth: 0, innerHeight: 0 };
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState<{ innerWidth: number, innerHeight: number }>(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return windowSize;
}