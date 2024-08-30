import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import Image from "next/image";

// Funkcionalna komponenta Home koja predstavlja početnu stranicu
export default function Home() {
  return (
    <>
      <div className="relative w-screen h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        {/* Prikaz banner slike u pozadini */}
        <Image
          src="/banner1.jpg"
          alt="banner"
          layout="fill"
          objectFit="cover"
          quality={80}  
        />
        {/* Prikaz tekstualnog sadržaja preko slike */}
        <div className="absolute inset-0 flex flex-col items-start justify-center p-4 md:p-6 lg:p-8 bg-opacity-50 rounded-lg">
          <p className="text-grey-2 font-playfair text-heading1-bold text-left mb-2">
            We bring the sparkle.
          </p>
          <p className="text-gray-900 font-playfair text-heading1-bold text-left ml-4">
            You make it shine.
          </p>
        </div>
      </div>
      <Collections /> {/* Prikaz komponente za kolekcije proizvoda */}
      <ProductList /> {/* Prikaz komponente za listu proizvoda */}
    </>
  );
}

export const dynamic = "force-dynamic"; // Postavljanje dinamike renderovanja komponente na "force-dynamic"
