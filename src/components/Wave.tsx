import React from "react";

const Waves = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1920} height={1080}>
    <defs>
    <linearGradient id="gradient" gradientTransform="rotate(180)">
        <stop offset="-3.31%" stopColor="#5141EA" />
        <stop offset="40.26%" stopColor="rgba(70, 141, 216, 0.689005)" />
        <stop offset="82.49%" stopColor="rgba(58, 227, 195, 0.53)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#gradient)"
      d="m0 384 106.7-.2c106.6-.1 320-.5 533.3 38.7 213.3 39.2 426.7 117.8 640 148.5 213.3 30.7 426.7 13.3 533.3 4.7L1920 567v514H0Z"
    />
  </svg>
);

export default Waves;
