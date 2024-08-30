"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void; // Opcionalna funkcija za ažuriranje korisničkih podataka
}
// Komponenta ProductCard za prikaz informacija o proizvodu
const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <div className="relative w-[220px] flex flex-col gap-2 backdrop-blur-xl rounded-lg shadow-2xl">
      <Link
        href={`/products/${product._id}`} // Link ka stranici detalja proizvoda
        className="flex flex-col gap-2 hover:scale-105 bg-white rounded-lg transition-transform duration-300 ease-in-out"
      >
        <Image
          src={product.media[0]}
          alt="product"
          width={250}
          height={300}
          className="h-[250px] rounded-t-lg object-cover"
        />
        <div className="ml-4 p-2"> {/* Kontejner za tekstualne informacije o proizvodu */}
          <p className="text-base-bold font-playfair">{product.title}</p>
          <p className="text-small-medium font-playfair text-grey-2 mb-2">
            {product.category}
          </p>
          <div className="flex justify-between items-center"> {/* Kontejner za cenu i dugme wishlist */}
            <p className="text-body-bold font-noto text-beige-3">{product.price} EUR</p>
            <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
