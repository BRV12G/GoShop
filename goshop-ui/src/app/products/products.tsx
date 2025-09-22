import getProducts from "./actions/get-products";
import Grid from "@mui/material/Grid";
import Product from "./product";
export default async function Products() {
  const products = await getProducts();
  //   const user = await getMe();
  //   console.log("user", user);
    console.log("products", products);
  return (
    <Grid container spacing={3} alignItems="stretch" sx={{ height: "850vh", overflow: "scroll" }}>
        {products.map(product => (
            <Grid  key={product.id} size={{ xs: 12, sm: 6, lg:4 }}  >
                <Product product={product}/>
            </Grid>
        ))}

    </Grid>
  )
}
