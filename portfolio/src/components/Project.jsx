import React, { useState, useEffect } from "react";
import { IoLogoGithub } from "react-icons/io";

const Project = ({ img, title, description, link, github }) => {
  // Ensure images is an array and limit to max 4 photos
  const images = (Array.isArray(img) ? img : [img]).slice(0, 4);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto carousel functionality
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (e, index) => {
    e.stopPropagation(); // Prevent card click
    setCurrentIndex(index);
  };

  const handleCardClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
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
  );
};

export default Project;
