import ProductCard from "@/components/ProductCard";
import { getSearchedProducts } from "@/lib/actions/action";

// Asinhrona funkcionalna komponenta SearchPage koja prikazuje rezultate pretrage
const SearchPage = async ({ params }: { params: { query: string }}) => {
  // Preuzimanje proizvoda koji odgovaraju pretrazi
  const searchedProducts = await getSearchedProducts(params.query)
  const decodedQuery = decodeURIComponent(params.query) // Dekodiranje upita za prikaz u čitljivom formatu

  return (
    <div className='px-10 py-5'>
      <p className='text-heading3-bold my-10'>Search results for {decodedQuery}</p>
       {/* Prikaz poruke ako nema rezultata */}
      {!searchedProducts || searchedProducts.length === 0 && (
        <p className='text-body-bold my-5'>No result found</p>
      )}
      {/* Prikaz kartica proizvoda */}
      <div className='flex flex-wrap gap-16'>
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default SearchPage