import React from "react";

const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-10] bg-[var(--bg-color)]">
      <div className="absolute rounded-full blur-[100px] top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--glow-1)] opacity-60" />
      <div className="absolute rounded-full blur-[100px] top-[20%] right-[-5%] w-[600px] h-[600px] bg-[var(--glow-2)] opacity-40" />
      <div className="absolute rounded-full blur-[100px] bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[var(--glow-3)] opacity-30" />
      <div className="absolute rounded-full blur-[100px] bottom-[-5%] right-[20%] w-[550px] h-[550px] bg-[var(--glow-4)] opacity-50" />
    </div>
  );
};

export default BackgroundGlow;
