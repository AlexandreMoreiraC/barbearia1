import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://res.cloudinary.com/dliyfpqqu/image/upload/v1754934734/ub7p8ao7juyfsmy5ohha.jpg",
  "https://res.cloudinary.com/dliyfpqqu/image/upload/v1754934734/agctnsbjjjowhz0er0g6.jpg",
  "https://res.cloudinary.com/dliyfpqqu/image/upload/v1754934735/ye7fbuekdebhd7v0qr2b.jpg",
  "https://res.cloudinary.com/dliyfpqqu/image/upload/v1754934735/vld1ra4biotu2prgaorg.jpg",
  "https://res.cloudinary.com/dliyfpqqu/image/upload/v1754934735/bhftjvbyk58agmlxgci8.jpg",
  "https://res.cloudinary.com/dliyfpqqu/image/upload/v1754934736/jmxvszqe4pz64ec2zrzv.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Galeria</h2>
        <div className="gallery-grid">
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Galeria ${i + 1}`}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
