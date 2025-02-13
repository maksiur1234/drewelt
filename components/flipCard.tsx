"use client";

import { useState, useEffect } from "react";

const FlipCard = ({ frontContent, backContent, className = "" }) => {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Jeśli urządzenie nie wspiera hover, to najprawdopodobniej jest dotykowe
    if (window.matchMedia("(hover: none)").matches) {
      setIsTouch(true);
    }
  }, []);

  const handleClick = () => {
    if (isTouch) {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <div onClick={handleClick} className={`flip-card ${className}`}>
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
