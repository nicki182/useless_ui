import { useRef, useState, useEffect } from "react";

const useButton = () => {
  const [buttonStyle, setButtonStyle] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement>(null);
  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  useEffect(() => {
    const button = ref?.current;
    if (!button) return;

    const buttonRect = button.getBoundingClientRect();

    const isMouseNear =
      mousePosition.x > buttonRect.left - 50 &&
      mousePosition.x < buttonRect.right + 50 &&
      mousePosition.y > buttonRect.top - 50 &&
      mousePosition.y < buttonRect.bottom + 50;

    if (isMouseNear) {
      // Move the button to a random new position
      const newTop = Math.random() * (window.innerHeight - buttonRect.height);
      const newLeft = Math.random() * (window.innerWidth - buttonRect.width);

      setButtonStyle({
        position: "absolute", // Change to absolute dynamically
        top: `${newTop}px`,
        left: `${newLeft}px`,
        transition: "top 0.3s, left 0.3s",
      });
    }
  }, [mousePosition]);
  return { buttonStyle, ref };
};
export default useButton;
