import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <h1>Contato</h1>

      <motion.div
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Mapa */}
        <motion.div className="map-container" custom={0} variants={itemVariants}>
          <iframe
            title="Localização da Barber1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.5203101696206!2d-9.175794924553966!3d38.79323415284437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1932a0ad2328bf%3A0xac5a2c75b6f8f17d!2sOdivelas!5e1!3m2!1sen!2spt!4v1754949966998!5m2!1sen!2spt"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, width: "100%", height: "400px" }}
          />
        </motion.div>

        {/* WhatsApp */}
        <motion.div className="whatsapp-container" custom={2} variants={itemVariants}>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
            <motion.img
              src="https://res.cloudinary.com/dliyfpqqu/image/upload/v1754937434/vpr1plvrjwtdd0n3frs1.jpg"
              alt="WhatsApp"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                width: "400px",
                height: "auto",
                cursor: "pointer",
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgb(0 0 0 / 0.15)",
                display: "flex",
              }}
            />
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
