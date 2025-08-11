import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">Barber Shop — Estilo & Essentials</h1>
            <p className="hero-sub">
              Transforme seu visual com cortes precisos, cuidado premium e atendimento personalizado.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn-primary">Serviços</a>
<a 
  href="https://wa.me/35199999999" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn-ghost"
>
  Agendar
</a>            </div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="hero-card">
              <h4>Horário</h4>
              <p>Seg — Sex: 09:00 — 20:00</p>
              <p>Sáb: 09:00 — 16:00</p>
              <a href="#contact" className="btn-ghost small">Onde nos encontrar</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <img
          src="https://res.cloudinary.com/dliyfpqqu/image/upload/v1754947333/vkxfi2bmnqkgonimrz2p.png"
          alt="WhatsApp"
          style={{ width: "50px", height: "50px" }}
        />
      </a>
    </>
  );
}
