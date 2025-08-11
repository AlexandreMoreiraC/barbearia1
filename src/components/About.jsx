import React from "react";
import { motion } from "framer-motion";

export default function About() {
  // Variants para imagem e texto, entrando de lados diferentes
  const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="about"
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // anima toda vez que entrar (pra cima ou pra baixo)
      style={{ overflow: "hidden" }}
    >
      <div className="container about-container" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <motion.div className="about-image" variants={imageVariants}>
          <img
            src="https://res.cloudinary.com/dliyfpqqu/image/upload/v1754934588/ksc8w6vbt3n3gdl9kvxu.png"
            alt="Sobre Barber Shop"
            style={{ width: "100%", borderRadius: "12px", maxWidth: "400px" }}
          />
        </motion.div>
        <motion.div className="about-text" variants={textVariants}>
          <h2>Quem Somos</h2>
          <p>
            A Barber Shop oferece cortes e estilos modernos com qualidade e atendimento premium. Nossa paixão é realçar a sua melhor versão com precisão e cuidado.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
