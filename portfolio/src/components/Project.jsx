import React, { useState, useEffect } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Project = ({ img, title, description, link, github }) => {
  // Ensure images is an array and limit to max 4 photos
  const images = (Array.isArray(img) ? img : [img]).slice(0, 4);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto carousel functionality
  useEffect(() => {
    if (images.length <= 1 || isModalOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length, isModalOpen]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleDotClick = (e, index) => {
    e.stopPropagation(); // Prevent card click
    setCurrentIndex(index);
  };

  const handleCardClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const handleImageClick = (e) => {
    e.stopPropagation(); // Prevent card click
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div
        className={link ? "glass-card project click" : "glass-card project"}
        onClick={handleCardClick}
      >
        <div className="project-info">
          <h3 style={{ color: "var(--icon-color)" }}>{title}</h3>
        </div>

        <div className="carousel-container">
          <img
            src={images[currentIndex]}
            alt={`${title} - View ${currentIndex + 1}`}
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          />

          {images.length > 1 && (
            <div className="carousel-dots" onClick={(e) => e.stopPropagation()}>
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${currentIndex === idx ? "active" : ""}`}
                  onClick={(e) => handleDotClick(e, idx)}
                  aria-label={`Show image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <p
          style={{
            color: "var(--text-color)",
            textAlign: "justify",
            hyphens: "auto",
            WebkitHyphens: "auto",
            msHyphens: "auto",
          }}
        >
          {description}
        </p>

        <div className="project-links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--icon-color)" }}
              onClick={(e) => e.stopPropagation()} // Prevent card click
            >
              <IoLogoGithub size={30} />
            </a>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="lightbox-modal" onClick={closeModal}>
          <button className="lightbox-close" onClick={closeModal}>
            <FaTimes />
          </button>

          {images.length > 1 && (
            <button className="lightbox-nav prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
          )}

          <img
            src={images[currentIndex]}
            alt={`${title} Fullscreen`}
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <button className="lightbox-nav next" onClick={nextImage}>
              <FaChevronRight />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Project;
