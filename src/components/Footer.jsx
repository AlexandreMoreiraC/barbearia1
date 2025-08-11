import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <img
            src="https://res.cloudinary.com/dliyfpqqu/image/upload/v1754945546/zmawe1isuyoyxribvjgk.png"
            alt="Logo Barber Shop"
          />
        </div>

        <p className="footer-text">
          © 2025 Barber Shop. Todos os direitos reservados.
        </p>

        <div className="footer-socials">
          <a
            href="https://instagram.com/barbershop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://facebook.com/barbershop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp" />
          </a>
        </div>
      </div>
    </footer>
  );
}
