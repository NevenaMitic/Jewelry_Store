import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import ProductInfo from "@/components/ProductInfo";
import { getProductDetails, getRelatedProducts } from "@/lib/actions/action";

// Asinhrona funkcionalna komponenta ProductDetails koja prikazuje detalje o proizvodu i srodne proizvode
const ProductDetails = async ({ params }: { params: { productId: string }}) => {
  // Dohvatanje detaljnih informacija o proizvodu na osnovu ID-a proizvoda
  const productDetails = await getProductDetails(params.productId);
  // Dohvatanje srodnih proizvoda na osnovu ID-a proizvoda
  const relatedProducts = await getRelatedProducts(params.productId);

  return (
    <div
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className="py-10 px-5"
    >
      <div
        className="flex justify-center items-start gap-16 max-md:flex-col max-md:items-center"
      >
         {/* Prikaz galerije slika proizvoda */}
        <Gallery productMedia={productDetails.media} />
         {/* Prikaz detaljnih informacija o proizvodu */}
        <ProductInfo productInfo={productDetails} />
      </div>
      
      <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
        <p className="text-heading3-bold font-playfair text-grey-2">Related Products</p>
        <div className="flex flex-wrap gap-16 mx-auto mt-8">
           {/* Prikaz kartica srodnih proizvoda */}
          {relatedProducts?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default ProductDetails;
