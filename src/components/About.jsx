import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="about"
      style={{ overflow: "hidden" }}
    >
      <div
        className="container about-container"
        style={{ display: "flex", gap: "2rem", alignItems: "center" }}
      >
        <div className="about-image">
          <img
            src="https://res.cloudinary.com/dliyfpqqu/image/upload/v1754934588/ksc8w6vbt3n3gdl9kvxu.png"
            alt="Sobre Barber Shop"
            style={{ width: "100%", borderRadius: "12px", maxWidth: "400px" }}
          />
        </div>
        <div className="about-text">
          <h2>Quem Somos</h2>
          <p>
            A Barber Shop oferece cortes e estilos modernos com qualidade e atendimento premium. Nossa paixão é realçar a sua melhor versão com precisão e cuidado.
          </p>
        </div>
      </div>
    </section>
  );
}
 