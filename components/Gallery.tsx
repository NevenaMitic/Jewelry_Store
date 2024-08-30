"use client"
import Image from "next/image";
import React, { useState } from "react";

// Komponenta Gallery za prikaz slika proizvoda
const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]); // State za čuvanje trenutno prikazane glavne slike

  return (
    <div className="flex flex-col gap-3 max-w-[500px">
      <Image
        src={mainImage}
        width={500}
        height={500}
        alt="product"
        className="w-96 h-96 rounded-lg shadow-xl object-cover"
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {productMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            height={200}
            width={200}
            alt="product"
            className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${mainImage === image ? "border-2 border-black" : ""}`}
            onClick={() => setMainImage(image)} // Funkcija za promenu glavne slike pri kliku
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;