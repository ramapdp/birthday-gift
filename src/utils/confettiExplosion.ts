// src/utils/confettiExplosion.ts
import confetti from "canvas-confetti";

export const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"],
  });
};
