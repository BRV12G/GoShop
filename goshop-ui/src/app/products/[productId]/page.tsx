interface SingleProductProps {
    params: { productId: string; }
}
export default async function SingleProduct({ params}: SingleProductProps) {
    return (
        <div>hii {params.productId}</div>
    )
}
