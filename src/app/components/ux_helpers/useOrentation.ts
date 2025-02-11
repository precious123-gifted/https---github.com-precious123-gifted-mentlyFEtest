// ux_helpers/useOrentation.ts
import { useState, useEffect } from "react";

const useOrientation = () => {
  const [isPortrait, setIsPortrait] = useState<boolean>(window.matchMedia("(orientation: portrait)").matches);
  const [isWide, setIsWide] = useState<boolean>(window.innerWidth > 640);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
      setIsWide(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);
    
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isPortrait, isWide };
};

export default useOrientation;
