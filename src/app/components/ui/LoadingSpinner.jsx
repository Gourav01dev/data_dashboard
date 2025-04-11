// LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="inline-block relative w-20 h-20 text-blue-500">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-full"
          style={{
            animation: "lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
            transformOrigin: "40px 40px",
            animationDelay: `${-0.036 * (i + 1)}s`,
          }}
        >
          <div
            className="absolute rounded-full bg-current"
            style={{
              width: "7.2px",
              height: "7.2px",
              margin: "-3.6px 0 0 -3.6px",
              top: [
                62.62742, 67.71281, 70.90963, 72,
                70.90963, 67.71281, 62.62742, 56,
              ][i],
              left: [
                62.62742, 56, 48.28221, 40,
                31.71779, 24, 17.37258, 12.28719,
              ][i],
            }}
          />
        </div>
      ))}

      {/* Include animation keyframes inline or in global CSS */}
      <style>{`
        @keyframes lds-roller {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
