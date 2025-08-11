import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      className={`site-header ${scrolled ? "scrolled" : ""}`}
      animate={{
        backgroundColor: scrolled ? "rgba(31, 31, 31, 0.85)" : "transparent",
        padding: scrolled ? "0.5rem 0" : "1rem 0",
        boxShadow: scrolled ? "0 4px 15px rgba(0,0,0,0.2)" : "0px 0px 0px transparent",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="container header-inner">
        <a className="logo" href="#hero" aria-label="Ir para o início">
          <img
            src="https://res.cloudinary.com/dliyfpqqu/image/upload/v1754945546/zmawe1isuyoyxribvjgk.png"
            alt="Barber Shop"
            style={{
              width: scrolled ? "150px" : "180px",
              height: scrolled ? "110px" : "140px",
              objectFit: "contain",
              transition: "all 0.3s ease",
            }}
          />
        </a>

        <nav className="nav desktop-nav" aria-label="navegação principal">
          <a href="#hero">Início</a>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#gallery">Galeria</a>
          <a href="#contact" className="cta">Agendar</a>
        </nav>

        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>

        <AnimatePresence>
          {open && (
            <motion.nav
              className="nav mobile-nav"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
              aria-label="navegação mobile"
            >
              <a href="#hero" onClick={() => setOpen(false)}>Início</a>
              <a href="#about" onClick={() => setOpen(false)}>Sobre</a>
              <a href="#services" onClick={() => setOpen(false)}>Serviços</a>
              <a href="#gallery" onClick={() => setOpen(false)}>Galeria</a>
              <a href="#contact" onClick={() => setOpen(false)} className="cta">Agendar</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
