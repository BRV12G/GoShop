import getMe from "./get-me";
import getProducts from "./products/actions/get-products";
import CreateProductFab from "./products/create-products/create-product-fab";
import Products from "./products/products";

export default async function Home() {
  // const products = await getProducts();
  // const user = await getMe();
  // console.log("user", user);
  // console.log("products", products);
  return (
    <>  <Products />
        <CreateProductFab />

    </>
  )
}
