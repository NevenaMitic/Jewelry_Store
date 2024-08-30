import { ClerkLoaded, SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0">
        <Image
          src="/background1.jpg"
          alt="Background image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative flex h-full">
        {/* Prvi deo sa komponentom za prijavu */}
        <div className="flex-1 flex justify-center items-center">
          <ClerkLoaded>
            <SignUp path="/signup" />
          </ClerkLoaded>
        </div>

         {/* Drugi deo sa informacijama */}
        <div className="flex-1 md:flex hidden flex-col justify-center items-center bg-gray-200 bg-opacity-5 backdrop-blur-sm md:w-1/3 p-4">
          <div className="mb-8 text-center">
            <p className="text-heading1-bold font-playfair text-gray-900 mb-2">
              Welcome to Empearl Store
            </p>
            <p className="text-heading2 font-playfair text-yellow-100">
              Discover a world of luxury and elegance
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

