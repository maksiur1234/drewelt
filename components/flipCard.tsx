"use client";

import { FC, ReactNode } from "react";

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  isActive: boolean;
}

const FlipCard: FC<FlipCardProps> = ({ frontContent, backContent, isActive }) => {
  return (
    <div
      className={`flip-card transition-all duration-500 ${
        isActive ? "active-card" : "opacity-80 scale-95"
      }`}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="flip-card-front-content">
            {frontContent}
          </div>
        </div>

        <div className="flip-card-back">
          <div className="flip-card-back-content">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
