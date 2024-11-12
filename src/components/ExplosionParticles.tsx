// src/components/ExplosionParticles.tsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ExplosionParticles: React.FC = () => {
  const particlesInit = (main: any) => {
    loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: ["#FF0000", "#FFFF00", "#FF00FF", "#00FFFF", "#FF9900"] },
          shape: { type: "circle" },
          opacity: {
            value: 1,
            anim: { enable: true, speed: 0.5, opacity_min: 0, sync: false },
          },
          size: {
            value: 7,
            random: true,
            anim: { enable: true, speed: 3, size_min: 0.1, sync: false },
          },
          line_linked: { enable: false },
          move: {
            enable: true,
            speed: 10,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "destroy",
            bounce: false,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ExplosionParticles;
