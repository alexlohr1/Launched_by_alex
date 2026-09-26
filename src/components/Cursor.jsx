import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const checkHover = (event) => {
      const interactive = event.target.closest(
        "a, button, input, textarea, select, .interactive"
      );

      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", checkHover);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${
        hovering ? "cursor-hover" : ""
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}

export default Cursor;