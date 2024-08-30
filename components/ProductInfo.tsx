"use client"  // Oznaka da se komponenta koristi u klijentskom režimu
import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";

// Komponenta ProductInfo za prikaz detalja proizvoda
const ProductInfo = ({ productInfo }: 
  { productInfo: ProductType }) => {
  const [selectedSize, setSelectedSize] = useState<string>(productInfo.sizes[0]); // Početni odabir veličine
  const [quantity, setQuantity] = useState<number>(1);  // Početna količina proizvoda

  const cart = useCart(); // Pristup funkcionalnostima korpe

  return (
    <div
      className="max-w-[400px] flex flex-col gap-4 p-6 rounded-lg bg-cover bg-center">
      <div className="flex justify-between font-playfair text-black items-center">
        <p className="text-heading3-bold">{productInfo.title}</p>
        <HeartFavorite product={productInfo} />
      </div>

      <div className="flex gap-2 font-playfair">
        <p className="text-base-medium  text-grey-2">Category:</p>
        <p className="text-base-bold text-beige-3 ">{productInfo.category}</p>
      </div>

      <p className="text-heading3-bold font-noto text-beige-3">{productInfo.price} EUR</p>

      <div className="flex flex-col font-playfair text-grey-2 gap-2">
        <p className="text-small-medium">{productInfo.description}</p>
      </div>
      <div className="flex gap-2 ">
        <p className="text-base-medium font-playfair text-grey-2">Diamond Weight:</p>
        <p className="text-base font-noto">{productInfo.diamondWeight} g</p>
      </div>
      <div className="flex gap-2 font-playfair">
        <p className="text-base-medium text-grey-2">Gemstone:</p>
        <p className="text-base">{productInfo.gemstone}</p>
      </div>

      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium font-playfair text-grey-2">Sizes:</p>
          <div className="flex gap-2">
            {productInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === size && "bg-black text-white"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className="text-base-medium font-playfair text-grey-2">Quantity:</p>
        <div className="flex gap-4 items-center text-beige-3">
          <MinusCircle
            className="hover:text-black cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-body-bold font-noto text-black">{quantity}</p>
          <PlusCircle
            className="hover:text-black cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>

      <button
        className="outline text-base-bold py-3 rounded-3xl hover:bg-black hover:text-white"
        onClick={() => { // Dodavanje proizvoda u korpu 
          cart.addItem({
            item: productInfo,
            quantity,
            size: selectedSize,
          });
        }}
      >
        Add To Bag
      </button>
    </div>

  );
};
export default ProductInfo;