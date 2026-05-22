import React from "react";
import { useTranslation } from "react-i18next";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="glass-card flex flex-col gap-10 p-[60px] text-[var(--text-color)] max-[768px]:p-6 max-[768px]:gap-8 ">
      <div className="grid grid-cols-3 gap-12 max-[768px]:grid-cols-1 max-[768px]:gap-8 text-left max-[768px]:text-center">
        {/* Brand/Logo Column */}
        <div className="flex flex-col gap-4 max-[768px]:items-center">
          <div className="flex flex-col gap-1 max-[768px]:items-center">
            <h3 className="font-bold text-[24px] text-[var(--icon-color)] tracking-tight leading-tight">
              {t("header.portfolio")}
            </h3>
            <p className="text-[12px] text-[var(--text-color)] opacity-60 uppercase font-bold tracking-wider">
              {t("footer.brand_subtitle")}
            </p>
          </div>
          <p className="text-[14px] leading-relaxed opacity-80 max-w-[320px] max-[768px]:mx-auto">
            {t("footer.slogan")}
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4 max-[768px]:gap-2 max-[768px]:items-center">
          <h3 className="font-bold text-[16px] text-[var(--icon-color)] uppercase tracking-wider">
            {t("footer.links_title")}
          </h3>
          <nav className="flex flex-col gap-3 text-[14px] max-[768px]:items-center">
            <a
              href="#"
              className="hover:text-[var(--icon-color)] transition-all duration-300 hover:translate-x-[2px] w-fit"
            >
              {t("footer.links.home")}
            </a>
            <a
              href="#about"
              className="hover:text-[var(--icon-color)] transition-all duration-300 hover:translate-x-[2px] w-fit"
            >
              {t("footer.links.about")}
            </a>
            <a
              href="#services"
              className="hover:text-[var(--icon-color)] transition-all duration-300 hover:translate-x-[2px] w-fit"
            >
              {t("footer.links.services")}
            </a>
            <a
              href="#projects"
              className="hover:text-[var(--icon-color)] transition-all duration-300 hover:translate-x-[2px] w-fit"
            >
              {t("header.projects")}
            </a>
            <a
              href="#contact"
              className="hover:text-[var(--icon-color)] transition-all duration-300 hover:translate-x-[2px] w-fit"
            >
              {t("footer.links.contact")}
            </a>
          </nav>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4 max-[768px]:items-center">
          <h3 className="font-bold text-[16px] text-[var(--icon-color)] uppercase tracking-wider">
            {t("footer.contact_title")}
          </h3>
          <div className="flex flex-col gap-3 text-[14px] opacity-80 max-[768px]:items-center">
            <div className="flex items-center gap-2 max-[768px]:justify-center">
              <FaMapMarkerAlt className="text-[var(--icon-color)] shrink-0" />
              <span>{t("footer.location")}</span>
            </div>
            <a
              href="https://wa.me/5492284515183"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[var(--icon-color)] transition-colors duration-300 w-fit"
            >
              <IoLogoWhatsapp className="text-[var(--icon-color)] shrink-0" />
              <span>+54 9 2284 515183</span>
            </a>
            <a
              href="mailto:ducasolucionesweb@gmail.com"
              className="flex items-center gap-2 hover:text-[var(--icon-color)] transition-colors duration-300 w-fit"
            >
              <FaEnvelope className="text-[var(--icon-color)] shrink-0" />
              <span>ducasolucionesweb@gmail.com</span>
            </a>
          </div>

          {/* Social Icons row */}
          <div className="flex gap-[12px] mt-2 max-[768px]:justify-center">
            <a
              href="https://github.com/genaroduca"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--icon-color)] hover:-translate-y-[2px] transition-all duration-300 p-2.5 rounded-full border border-[var(--card-border)] hover:bg-[var(--card-border)]"
            >
              <IoLogoGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/genaro-duca-473b39284/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--icon-color)] hover:-translate-y-[2px] transition-all duration-300 p-2.5 rounded-full border border-[var(--card-border)] hover:bg-[var(--card-border)]"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/ducasoluciones/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--icon-color)] hover:-translate-y-[2px] transition-all duration-300 p-2.5 rounded-full border border-[var(--card-border)] hover:bg-[var(--card-border)]"
            >
              <AiFillInstagram size={18} />
            </a>

            {/* <a
              href="https://wa.me/5492284515183"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--icon-color)] hover:-translate-y-[2px] transition-all duration-300 p-2.5 rounded-full border border-[var(--card-border)] hover:bg-[var(--card-border)]"
            >
              <IoLogoWhatsapp size={18} />
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom Rights Row */}
      <div className="border-t border-[var(--card-border)] pt-6 flex justify-between items-center text-[12px] opacity-60 flex-wrap gap-4 max-[768px]:flex-col max-[768px]:text-center">
        <p>{t("footer.rights")}</p>
        <p className="max-[768px]:hidden">
          Designed & Built with ♥ by Genaro Duca
        </p>
      </div>
    </footer>
  );
};

export default Footer;
