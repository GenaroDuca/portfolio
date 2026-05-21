import React from "react";

const Skill = ({ icon, title }) => {
  return (
    <div className="glass-card flex flex-col gap-[10px] justify-between h-[130px]">
      <div className="text-[var(--icon-color)] flex justify-center">{icon}</div>
      <span className="text-[14px]">{title}</span>
    </div>
  );
};

export default Skill;
