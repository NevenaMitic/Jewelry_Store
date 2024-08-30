import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/action";
import Image from "next/image";
import React from "react";

// Asinhrona funkcionalna komponenta za prikaz detalja kolekcije
const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  // Poziva funkciju za dobijanje detalja kolekcije na osnovu ID-a iz parametara
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <p className="text-heading2-bold font-playfair text-grey-2">
        {collectionDetails.title}
      </p>
      <p className="text-body-normal font-playfair text-grey-2 text-center max-w-[900px]">
        {collectionDetails.description}
      </p>
      <div className="flex flex-wrap gap-16 justify-center">
        {collectionDetails.products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;
// Eksplicitno postavlja stranicu kao dinamičnu za uvek svež prikaz podataka
export const dynamic = "force-dynamic";
