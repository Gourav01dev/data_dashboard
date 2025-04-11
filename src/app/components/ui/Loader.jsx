import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-50">
      <div className="loader" />
      <style>
        {`
          .loader {
            width: 50px;
            aspect-ratio: 1.154;
            position: relative;
            background: conic-gradient(
              from 120deg at 50% 64%,
              #0000,
              #25b09b 1deg 120deg,
              #0000 121deg
            );
            animation: l27-0 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
          }

          .loader::before,
          .loader::after {
            content: "";
            position: absolute;
            inset: 0;
            background: inherit;
            transform-origin: 50% 66%;
            animation: l27-1 1.5s infinite;
          }

          .loader::after {
            --s: -1;
          }

          @keyframes l27-0 {
            0%, 30% {
              transform: rotate(0);
            }
            70% {
              transform: rotate(120deg);
            }
            70.01%, 100% {
              transform: rotate(360deg);
            }
          }

          @keyframes l27-1 {
            0% {
              transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
            }
            30%, 70% {
              transform: rotate(calc(var(--s, 1) * 120deg)) translate(calc(var(--s, 1) * -5px), 10px);
            }
            100% {
              transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
