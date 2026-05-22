import React, { useContext } from "react";
import { MdModeNight, MdWbSunny } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

const NightMode = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="border-none bg-transparent cursor-pointer text-[var(--text-color)] hover:-translate-y-[2px] flex items-center justify-center max-[768px]:text-[14px] max-[768px]:[&_svg]:w-5 max-[768px]:[&_svg]:h-5"
      onClick={toggleTheme}
    >
      {isDark ? <MdWbSunny size={25} /> : <MdModeNight size={25} />}
    </button>
  );
};

export default NightMode;
