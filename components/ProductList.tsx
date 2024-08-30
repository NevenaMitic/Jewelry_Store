import { getProducts } from "@/lib/actions/action";
import ProductCard from "./ProductCard";
import Image from "next/image";

//Komponenta za prikaz svakog proizvoda u vidu liste
const ProductList = async () => {
  const products = await getProducts();

  return (
    <div
      className="flex flex-col items-center gap-10 py-8 px-5"
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundPosition: 'center',
      }}>
      <p className="text-heading2-bold font-playfair text-grey-2 uppercase">Products</p>

      <div className="flex flex-col md:flex-row items-center justify-between w-full p-6 md:p-8 lg:p-12 gap-6 md:gap-8">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/banner.jpg"
            alt="banner"
            layout="fill"
            quality={100}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 px-4 md:px-8 lg:px-12">
          <p className="text-gray-800 font-playfair text-lg md:text-2xl lg:text-4xl"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
            Set with rare diamonds and gemstones, discover rings from Empearl, each perfectly showcasing the house's hallmark of innovation and excellence.
          </p>
        </div>
      </div>
      {!products || products.length === 0 ? (
        <p className="text-body-bold font-playfair">No products found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {products.map((product: ProductType) => ( // Prikaz svakog proizvoda
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;