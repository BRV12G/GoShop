import { Stack, Typography } from "@mui/material";
import getProduct from "./get-product";
import Image from "next/image";
import { getProductImage } from "../product-image";
interface SingleProductProps {
  params: { productId: string };
}
export default async function SingleProduct({ params }: SingleProductProps) {
  const product = await getProduct(+params.productId);
  return (
    <Stack gap={3} marginBottom={"2rem"}>
      <Typography variant="h2">{product.name}</Typography>
      {product.imageExists && (
        <Image
          src={getProductImage(product.id)}
          alt={product.name}
          width={0}
          height={0}
          className="w-auto md:w-1/2 h-auto"
          sizes="100vw"
        />
      )}
      <Typography>{product.description}</Typography>
      <Typography variant="h4">₹{product.price}</Typography>
    </Stack>
  );
}
