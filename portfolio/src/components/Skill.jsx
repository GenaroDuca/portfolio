import React from "react";

const Skill = ({ icon, title }) => {
  return (
    <div className="glass-card skill">
      <div>{icon}</div>
      <span style={{fontSize: "14px"}}>{title}</span>
    </div>
  );
};

export default Skill;
