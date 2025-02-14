"use client";

import { FC, ReactNode, useState, useEffect } from "react";

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
}

const FlipCard: FC<FlipCardProps> = ({
  frontContent,
  backContent,
  className = "",
}) => {
  const [flipped, setFlipped] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
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
    <button
      className={`flip-card ${className}`}
      type="button"
      onClick={handleClick}
    >
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </button>
  );
};

export default FlipCard;
