import React from "react";
import { motion } from "framer-motion";

const servicesList = [
  { id: 1, title: "Corte Masculino", desc: "Estilo clássico e moderno para todas as ocasiões." },
  { id: 2, title: "Barba & Bigode", desc: "Aparar, desenhar e cuidar da sua barba com maestria." },
  { id: 3, title: "Coloração", desc: "Tonalização e coloração para realçar seu estilo." },
  { id: 4, title: "Tratamentos", desc: "Cuidados especiais para cabelo e pele masculina." },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <div className="services-grid">
          {servicesList.map(({ id, title, desc }) => (
            <motion.article
              key={id}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: id * 0.15, duration: 0.5 }}
            >
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
