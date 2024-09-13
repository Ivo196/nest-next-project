import Link from "next/link"
import { getProducts } from "./products/products.api"
import { buttonVariants } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
export const dynamic = "force-dynamic"

async function page() {
  const products = await getProducts()
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">
          NextNestAPP
        </h1>
        <Link
          className={buttonVariants()}
          href='/products/new'>Create a Product
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {
          products.map((product: any) => (
            <ProductCard product={product} key={product.id} />
          ))
        }
      </div>
    </>
  )
}

export default page