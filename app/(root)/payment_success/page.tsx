"use client"

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

// Definicija funkcionalne komponente SuccessfulPayment
const SuccessfulPayment = () => {
  const cart = useCart(); //Inicijalizacija korpe korišćenjem useCart hook-a

  useEffect(() => { // useEffect hook se pokreće nakon renderovanja komponente
    cart.clearCart(); // Brisanje svih stavki iz korpe
  }, []); // Prazna zavisnost, useEffect se izvršava samo jednom nakon prvog renderovanja

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <Image src="/success.png" alt="image" width={300} height={100} />
      <p className="text-heading2-bold font-noto text-green">Success</p>
      <p className="text-heading4 font-playfair "> We recieved your purchase request. We'll be in touch shortly!</p>
      <Link
        href="/"
        className="p-4 border text-base-bold font-playfair hover:bg-black hover:text-white"
      >
        CONTINUE TO SHOPPING
      </Link>
    </div>
  );
};

export default SuccessfulPayment;