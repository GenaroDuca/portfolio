import React, { useState, useEffect } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TiArrowForward } from "react-icons/ti";
import { useTranslation } from "react-i18next";

const Project = ({ img, title, description, link, github }) => {
  const { t } = useTranslation();
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
      <div className="glass-card flex flex-col gap-5 group/card transition-all duration-300">
        {/* Título */}
        <div>
          <h3 className="text-[var(--icon-color)] font-semibold transition-colors duration-300">{title}</h3>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-[15px] w-full aspect-video bg-black/10 dark:bg-black/35 group/carousel border border-white/5 shadow-inner">
          {/* Capa de desenfoque ambiental trasera (Ambient Backdrop Blur) */}
          <div 
            className="absolute inset-0 bg-cover bg-center blur-2xl scale-120 opacity-30 dark:opacity-45 pointer-events-none transition-all duration-700 ease-in-out"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
          
          {/* Sutil overlay de degradado superior e inferior para mejorar contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5 z-[11] pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300" />

          {/* Imagen Principal */}
          <img
            src={images[currentIndex]}
            alt={`${title} - View ${currentIndex + 1}`}
            onClick={handleImageClick}
            className="relative z-10 w-full h-full object-contain block cursor-pointer transition-transform duration-700 ease-out group-hover/carousel:scale-[1.03]"
          />

          {/* Indicador visual "Expandir" al pasar el cursor */}
          <div 
            onClick={handleImageClick}
            className="absolute inset-0 bg-black/25 dark:bg-black/40 backdrop-blur-[2px] z-20 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 cursor-pointer pointer-events-none"
          >
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-semibold tracking-wider flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transform translate-y-3 group-hover/carousel:translate-y-0 transition-all duration-300 pointer-events-auto">
              <RxOpenInNewWindow size={15} className="text-[var(--icon-color)]" />
              <span className="text-[var(--icon-color)] uppercase text-[10px] tracking-widest">{t("projects.expand")}</span>
            </div>
          </div>

          {/* Píldoras de paginación interactivas */}
          {images.length > 1 && (
            <div
              className="absolute bottom-[12px] left-1/2 -translate-x-1/2 flex gap-1.5 z-30 bg-black/30 dark:bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border)] py-1.5 px-3 rounded-full pointer-events-auto shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleDotClick(e, idx)}
                  aria-label={`Show image ${idx + 1}`}
                  className={`h-1.5 rounded-full border-none p-0 cursor-pointer transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-4 bg-white"
                      : "w-1.5 bg-white/45 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Descripción */}
        <div className="flex flex-col justify-between h-full">
          <p
            className="text-[var(--text-color)] text-justify leading-relaxed"
            style={{ hyphens: "auto", WebkitHyphens: "auto", msHyphens: "auto" }}
          >
            {description}
          </p>

          {/* Links */}
          <div className="flex justify-end gap-[10px] mt-4">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--icon-color)] transition-all duration-300 hover:-translate-y-[2px]"
                onClick={(e) => e.stopPropagation()}
              >
                <TiArrowForward size={30} />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--icon-color)] transition-all duration-300 hover:-translate-y-[2px]"
                onClick={(e) => e.stopPropagation()}
              >
                <IoLogoGithub size={30} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox modal de pantalla completa */}
      {isModalOpen && (
        <div
          className="fixed inset-0 w-screen h-screen flex justify-center items-center z-[10000] [animation:fadeIn_0.2s_ease-out] bg-black/75 backdrop-blur-xl max-[768px]:p-[10px]"
          onClick={closeModal}
        >
          {/* Botón de cerrar */}
          <button
            className="absolute top-5 right-5 bg-white/10 border border-white/20 text-white w-[50px] h-[50px] rounded-full flex justify-center items-center text-[22px] cursor-pointer z-[10010] backdrop-blur-md transition-all duration-300 hover:bg-white/25 hover:rotate-90 max-[768px]:w-10 max-[768px]:h-10 max-[768px]:text-[18px] max-[768px]:top-4 max-[768px]:right-4"
            onClick={closeModal}
            aria-label="Close fullscreen view"
          >
            <FaTimes />
          </button>

          {/* Botón Anterior */}
          {images.length > 1 && (
            <button
              className="absolute top-1/2 -translate-y-1/2 left-[30px] flex items-center justify-center bg-white/10 border border-white/20 text-white rounded-full w-[50px] h-[50px] text-[20px] cursor-pointer z-[10009] backdrop-blur-md transition-all duration-300 hover:bg-white/25 hover:scale-105 max-[768px]:w-10 max-[768px]:h-10 max-[768px]:text-[16px] max-[768px]:left-[10px] max-[768px]:top-[65%]"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* Imagen de alta calidad */}
          <img
            src={images[currentIndex]}
            alt={`${title} Fullscreen`}
            className="max-w-[85vw] max-h-[85vh] rounded-[15px] shadow-[0_15px_50px_rgba(0,0,0,0.6)] object-contain select-none transition-transform duration-300 max-[768px]:max-w-[95vw] max-[768px]:max-h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Botón Siguiente */}
          {images.length > 1 && (
            <button
              className="absolute top-1/2 -translate-y-1/2 right-[30px] flex items-center justify-center bg-white/10 border border-white/20 text-white rounded-full w-[50px] h-[50px] text-[20px] cursor-pointer z-[10009] backdrop-blur-md transition-all duration-300 hover:bg-white/25 hover:scale-105 max-[768px]:w-10 max-[768px]:h-10 max-[768px]:text-[16px] max-[768px]:right-[10px] max-[768px]:top-[65%]"
              onClick={nextImage}
              aria-label="Next image"
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
