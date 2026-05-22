import { Toaster, toast } from "react-hot-toast";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState(false);

  const notifyMessageSuccess = () => toast.success(t("contact.success"));
  const notifyMessageError = (msg) => toast.error(msg || t("contact.error"));

  const cleanForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setErrors({ name: false, email: false, message: false });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateName = (name) => name.trim().length >= 3;
  const validateMessage = (message) => message.trim().length > 10;

  const sendMail = (e) => {
    e.preventDefault();
    const newErrors = {
      name: !validateName(name),
      email: !validateEmail(email),
      message: !validateMessage(message),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) {
      notifyMessageError(t("contact.check_fields"));
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        "service_4apvbgc",
        "template_u01iaho",
        form.current,
        "ixjwKAv_pxSFAN7B9",
      )
      .then(
        () => {
          setLoading(false);
          notifyMessageSuccess();
          cleanForm();
        },
        () => {
          setLoading(false);
          notifyMessageError();
        },
      );
  };

  /* Clases base para inputs y textarea */
  const inputBase =
    "w-full p-5 rounded-[15px] bg-[var(--input-bg)] border-[1.5px] border-[var(--card-border)] text-[var(--text-color)] my-5 focus:outline-none";

  return (
    <>
      <h2
        className="text-left border-l-[2px] border-[var(--primary-accent)] pl-[10px] text-[var(--icon-color)] text-[24px]"
        id="contact"
      >
        {t("contact.title")}
      </h2>

      <div className="glass-card px-[100px] py-[60px] max-[768px]:p-5">
        {/* Íconos sociales */}
        <div className="flex gap-[10px] justify-end">
          <a
            href="https://github.com/genaroduca"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--icon-color)] hover:-translate-y-[2px]"
          >
            <IoLogoGithub
              size={50}
              className="cursor-pointer max-[768px]:w-10 max-[768px]:h-10"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/genaro-duca-473b39284/"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--icon-color)] hover:-translate-y-[2px]"
          >
            <FaLinkedin
              size={50}
              className="cursor-pointer max-[768px]:w-10 max-[768px]:h-10"
            />
          </a>
          <a
            href="https://www.instagram.com/ducasoluciones/"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--icon-color)] hover:-translate-y-[2px]"
          >
            <AiFillInstagram
              size={50}
              className="cursor-pointer max-[768px]:w-10 max-[768px]:h-10"
            />
          </a>

          <a
            href="https://wa.me/5492284515183"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--icon-color)] hover:-translate-y-[2px]"
          >
            <IoLogoWhatsapp
              size={50}
              className="cursor-pointer max-[768px]:w-10 max-[768px]:h-10"
            />
          </a>
        </div>

        <form onSubmit={sendMail} ref={form} className="flex flex-col gap-0">
          {/* Nombre */}
          <div className="flex flex-col">
            <label className="text-[var(--text-color)] text-left w-full">
              {t("contact.name")}
            </label>
            <input
              type="text"
              name="name"
              value={name}
              className={`${inputBase} ${errors.name ? "input-error" : ""}`}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: false });
              }}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-[var(--text-color)] text-left w-full">
              {t("contact.email")}
            </label>
            <input
              type="email"
              name="email"
              value={email}
              className={`${inputBase} ${errors.email ? "input-error" : ""}`}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: false });
              }}
            />
          </div>

          {/* Mensaje */}
          <div className="flex flex-col">
            <label className="text-[var(--text-color)] text-left w-full">
              {t("contact.message")}
            </label>
            <textarea
              name="message"
              value={message}
              className={`${inputBase} h-[200px] resize-none ${errors.message ? "input-error" : ""}`}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors({ ...errors, message: false });
              }}
            ></textarea>
          </div>

          {/* Botón */}
          <button
            disabled={loading}
            type="submit"
            className="self-center py-5 px-[40px] rounded-full bg-[var(--card-bg)] border-[1.5px] border-[var(--card-border)] font-bold text-[var(--icon-color)] cursor-pointer hover:-translate-y-[2px]"
          >
            {loading ? t("contact.sending") : t("contact.send")}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
