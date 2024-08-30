import { getCollections } from "@/lib/actions/action";
import Image from "next/image";
import Link from "next/link";

// Komponenta Collections koja prikazuje kolekcije proizvoda
const Collections = async () => {
  const collections = await getCollections(); // Preuzimanje kolekcija iz baze podataka

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading2-bold font-playfair text-grey-2 uppercase">Collections</p>

       {/* Prikaz poruke ako nema kolekcija */}
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold font-playfair text-grey-2">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Prikaz svake kolekcije kao link ka detaljima kolekcije */}
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <div className="flex flex-col items-center">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                  className="rounded-lg cursor-pointer"
                />
                <p className="text-body-bold font-playfair text-grey-2 mt-2">{collection.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
      {/* Kratak opis ispod kolekcija */}
      <p className="text-body-normal font-playfair text-grey-2 text-center max-w-[900px]">
        For over half a century, the House of Empearl has designed and crafted exceptional jewelry that is a testament to breathtaking beauty and unparalleled desirability.
      </p>
      <hr className="w-full border-t-2 border-gray-400" />
    </div>
  );
};

export default Collections;