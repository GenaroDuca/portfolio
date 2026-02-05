import React, { useContext } from "react";
import { MdModeNight, MdWbSunny } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

const NightMode = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="header-button" onClick={toggleTheme}>
      {isDark ? <MdWbSunny size={25} /> : <MdModeNight size={25} />}
    </button>
  );
};

export default NightMode;
