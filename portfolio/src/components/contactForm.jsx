import { Toaster, toast } from "react-hot-toast";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const ContactForm = () => {
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

  const notifyMessageSuccess = () =>
    toast.success("Message sent successfully!");
  const notifyMessageError = (msg) =>
    toast.error(msg || "Failed to send message!");

  const cleanForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setErrors({ name: false, email: false, message: false });
  };

  // Validaciones
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateName = (name) => name.trim().length >= 3;
  const validateMessage = (message) => message.trim().length > 10;

  // Send mail
  const sendMail = (e) => {
    e.preventDefault();
    
    const newErrors = {
      name: !validateName(name),
      email: !validateEmail(email),
      message: !validateMessage(message),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      notifyMessageError("Check the highlighted fields");
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
        (result) => {
          setLoading(false);
          notifyMessageSuccess();
          cleanForm();
        },
        (error) => {
          setLoading(false);
          notifyMessageError();
        },
      );
  };

  return (
    <div className="glass-card contact-form">
      <div className="social-icons">
        <a
          href="https://github.com/genaroduca"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub size={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/genaro-duca-473b39284/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={50} />
        </a>
      </div>

      <form onSubmit={sendMail} ref={form}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            className={errors.name ? "input-error" : ""}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: false });
            }}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            className={errors.email ? "input-error" : ""}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: false });
            }}
          />
        </div>

        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={message}
            className={errors.message ? "input-error" : ""}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) setErrors({ ...errors, message: false });
            }}
          ></textarea>
        </div>

        <button disabled={loading} type="submit">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
