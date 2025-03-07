"use client"; // Required for Next.js App Router

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine, Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Load slim version for better performance
import "./particleBackground.css"

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // Initialize tsparticles (only once per app lifecycle)
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine); // Load the slim version
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Callback when particles finish loading
  const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    console.log("Particles container loaded:", container);
  }, []);
  

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="particles-container"
          options={{
            background: {
              color: {
                value: "transparent", // Transparent background
              },
            },
            fpsLimit: 60,
            interactivity: {
              // events: {
              //   onClick: { enable: true, mode: "push" },
              //   onHover: { enable: true, mode: "repulse" },
              //   // resize: true,
              // },
              // modes: {
              //   push: { quantity: 4 },
              //   repulse: { distance: 200, duration: 0.4 },
              // },
            },
            particles: {
              color: { value: "#4095FF" }, // Your primary color
              links: {
                color: "#4095FF",
                distance: 120,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 0.3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 800, // ✅ Corrected from "area" to "width"
                  height: 800, // ✅ Corrected from "area" to "height"
                },
                value: 80,
              },
              opacity: { value: 0.2 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default ParticlesBackground;
