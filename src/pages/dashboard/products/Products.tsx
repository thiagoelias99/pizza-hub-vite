import { useProducts } from "@/hooks/api/useProducts"

const Products = () => {
  const { products, isLoading } = useProducts()

  return (
    <div>
      <h1>Products</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && products && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.description}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Products