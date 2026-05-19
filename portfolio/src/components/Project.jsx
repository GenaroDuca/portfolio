import React, { useState, useEffect } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

const Project = ({ img, title, description, link, github }) => {
  const images = (Array.isArray(img) ? img : [img]).slice(0, 4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto carousel
  useEffect(() => {
    if (images.length <= 1 || isModalOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isModalOpen]);

  // Lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isModalOpen]);

  const handleDotClick = (e, index) => { e.stopPropagation(); setCurrentIndex(index); };
  const handleImageClick = (e) => { e.stopPropagation(); setIsModalOpen(true); };
  const closeModal = (e) => { e.stopPropagation(); setIsModalOpen(false); };
  const nextImage = (e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % images.length); };
  const prevImage = (e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); };

  return (
    <>
      {/* Tarjeta del proyecto */}
      <div className="glass-card flex flex-col gap-5">
        {/* Título */}
        <div>
          <h3 className="text-[var(--icon-color)]">{title}</h3>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-[15px] w-full aspect-video">
          <img
            src={images[currentIndex]}
            alt={`${title} - View ${currentIndex + 1}`}
            onClick={handleImageClick}
            className="w-full h-full object-cover block cursor-pointer transition-transform duration-500"
          />

          {images.length > 1 && (
            <div
              className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex gap-2 z-[2] bg-[var(--card-bg)] [backdrop-filter:blur(12px)] [-webkit-backdrop-filter:blur(12px)] border-[1.5px] border-[var(--card-border)] py-[6px] px-[12px] rounded-[20px] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleDotClick(e, idx)}
                  aria-label={`Show image ${idx + 1}`}
                  className={`w-2 h-2 rounded-full border-none p-0 cursor-pointer ${
                    currentIndex === idx
                      ? "bg-white scale-[1.3]"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Descripción */}
        <p
          className="text-[var(--text-color)] text-justify"
          style={{ hyphens: "auto", WebkitHyphens: "auto", msHyphens: "auto" }}
        >
          {description}
        </p>

        {/* Links */}
        <div className="flex justify-end gap-[10px]">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--icon-color)] hover:-translate-y-[2px]"
              onClick={(e) => e.stopPropagation()}
            >
              <RxOpenInNewWindow size={30} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--icon-color)] hover:-translate-y-[2px]"
              onClick={(e) => e.stopPropagation()}
            >
              <IoLogoGithub size={30} />
            </a>
          )}
        </div>
      </div>

      {/* Lightbox modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 w-screen h-screen flex justify-center items-center z-[10000] [animation:fadeIn_0.3s_ease] [backdrop-filter:blur(10px)] max-[768px]:p-[10px]"
          onClick={closeModal}
        >
          {/* Cerrar */}
          <button
            className="absolute top-5 right-5 bg-[var(--card-bg)] border border-white/20 text-[var(--icon-color)] w-[50px] h-[50px] rounded-full flex justify-center items-center text-[24px] cursor-pointer z-[10010] [backdrop-filter:blur(5px)] hover:rotate-90 hover:text-[var(--primary-accent)] max-[768px]:w-10 max-[768px]:h-10 max-[768px]:text-[20px]"
            onClick={closeModal}
          >
            <FaTimes />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute top-1/2 -translate-y-1/2 left-[30px] flex items-center justify-center bg-[var(--card-bg)] border border-white/20 text-[var(--icon-color)] rounded-full w-[50px] h-[50px] text-[24px] cursor-pointer z-[10009] hover:text-[var(--primary-accent)] max-[768px]:w-10 max-[768px]:h-10 max-[768px]:text-[20px] max-[768px]:left-[5px] max-[768px]:top-[65%]"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>
          )}

          {/* Imagen */}
          <img
            src={images[currentIndex]}
            alt={`${title} Fullscreen`}
            className="max-w-[90vw] max-h-[90vh] rounded-[15px] shadow-[0_0_40px_rgba(134,134,134,0.322)] object-contain max-[768px]:max-w-[95vw] max-[768px]:max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute top-1/2 -translate-y-1/2 right-[30px] flex items-center justify-center bg-[var(--card-bg)] border border-white/20 text-[var(--icon-color)] rounded-full w-[50px] h-[50px] text-[24px] cursor-pointer z-[10009] hover:text-[var(--primary-accent)] max-[768px]:w-10 max-[768px]:h-10 max-[768px]:text-[20px] max-[768px]:right-[5px] max-[768px]:top-[65%]"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Project;
