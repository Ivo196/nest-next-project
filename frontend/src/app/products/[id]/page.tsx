
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProduct } from "../products.api"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

interface Props {
    params: {
        id: string
    }
}
async function PorductPageDetail({ params }: Props) {
    const product = await getProduct(params.id)

    return (
        <div className="flex justify-center items-center h-screen ">
            <Card>
                <CardHeader >
                    <CardTitle className="flex justify-between">
                        {product.name}
                        <Link href="/" className={buttonVariants()}>
                            Go back
                        </Link>

                    </CardTitle>
                </CardHeader>
                <CardContent>

                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <img src={product.image} alt={product.name} className="w-full h-64 " />

                </CardContent>
            </Card>
        </div>
    )
}

export default PorductPageDetail 