import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaRocket,
  FaStore,
  FaShoppingCart,
  FaCogs,
  FaCheckCircle,
  FaDatabase,
} from "react-icons/fa";

import { IoLogoWhatsapp } from "react-icons/io";

const WHATSAPP_NUMBER = "5492284515183";

export const Services = () => {
  const { t, i18n } = useTranslation();

  // Cards styling configuration based on services (simplified - no borders or hover colors)
  const servicesConfig = [
    {
      key: "landing",
      icon: <FaRocket className="text-3xl text-purple-400" />,
      iconBg: "bg-purple-500/10 border-purple-500/20",
      techBadge: "Static Web",
      techIcon: null,
    },
    {
      key: "catalog",
      icon: <FaStore className="text-3xl text-sky-400" />,
      iconBg: "bg-sky-500/10 border-sky-500/20",
      techBadge: "Dynamic / Client-Side",
      techIcon: null,
    },
    {
      key: "ecommerce",
      icon: <FaShoppingCart className="text-3xl text-emerald-400" />,
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      techBadge: "E-Commerce / DB",
      techIcon: <FaDatabase className="text-[10px] mr-1 text-emerald-400" />,
    },
    {
      key: "custom",
      icon: <FaCogs className="text-3xl text-rose-400" />,
      iconBg: "bg-rose-500/10 border-rose-500/20",
      techBadge: "Full-Stack Web App",
      techIcon: <FaDatabase className="text-[10px] mr-1 text-rose-400" />,
    },
  ];

  // Helper to build WhatsApp dynamic message
  const getWhatsAppLink = (serviceTitle) => {
    const isEn = i18n.language === "en";
    const text = isEn
      ? `Hi Genaro! I am interested in the ${serviceTitle} service. I'd like to get more information and schedule a quote.`
      : `¡Hola Genaro! Me interesa el servicio de ${serviceTitle}. Me gustaría obtener más información y coordinar una cotización.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="services"
      className="scroll-mt-[100px] flex flex-col gap-[30px] w-full text-left"
    >
      {/* Title Header */}
      <h2
        className="text-left border-l-[2px] border-[var(--primary-accent)] pl-[10px] text-[var(--icon-color)] text-[24px]"
        id="services"
      >
        {t("services.title")}
      </h2>

      {/* Services Grid layout */}
      <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1 w-full">
        {servicesConfig.map((config) => {
          const serviceTitle = t(`services.items.${config.key}.title`);

          return (
            <div
              key={config.key}
              className="glass-card flex flex-col justify-between gap-5 group/card transition-all duration-300 h-full"
            >
              <div className="flex flex-col gap-5 relative z-10 flex-grow">
                {/* Top Badge Indicators Row */}
                <div className="flex flex-wrap justify-between items-center gap-3">
                  <div
                    className={`p-2.5 rounded-xl border ${config.iconBg} flex items-center justify-center shrink-0`}
                  >
                    {config.icon}
                  </div>

                  {/* <div className="flex flex-wrap gap-2 items-center"> */}
                  {/* Tech spec Pill */}
                  {/* <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--input-bg)] text-[var(--text-color)] border border-[var(--card-border)] select-none">
                      {config.techIcon}
                      {config.techBadge}
                    </span> */}
                  {/* </div> */}
                  <div className="w-full">
                    <h3 className="text-xl text-center font-extrabold text-[var(--icon-color)]">
                      {serviceTitle}
                    </h3>
                  </div>
                </div>

                {/* Service Title */}

                {/* Service Description */}
                <div className="flex flex-col">
                  <p className=" text-sm leading-relaxed font-normal min-h-[230px]">
                    {t(`services.items.${config.key}.description`)}
                  </p>

                  {/* Ideal for statement */}
                  <div className=" pt-4 flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--glow-2)] select-none">
                      {t("services.ideal")}
                    </span>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="mt-1 shrink-0 text-xs" />
                      <p className="text-xs leading-relaxed">
                        {t(`services.items.${config.key}.ideal`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: WhatsApp inquiry CTA */}
              <div className="relative z-10">
                <a
                  href={getWhatsAppLink(serviceTitle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full bg-[var(--input-bg)] border border-[var(--card-border)] text-sm font-bold text-[var(--icon-color)] hover:-translate-y-[2px] transition-all duration-300 cursor-pointer"
                >
                  <IoLogoWhatsapp size={20} color="var(--icon-color)" />
                  <span>{t("services.cta")}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
