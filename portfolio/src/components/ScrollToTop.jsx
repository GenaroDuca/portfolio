import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[30px] right-[30px] w-[50px] h-[50px] bg-[var(--electric-purple)] text-white border-none rounded-full cursor-pointer z-[1000] flex items-center justify-center shadow-[0_0_20px_rgba(188,19,254,0.5)] [animation:fadeIn_0.3s_ease] hover:-translate-y-[5px] hover:bg-[#a020f0] max-[768px]:bottom-[10px] max-[768px]:right-[10px]"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
