import SingleProductPage from "@/components/SingleProductPage";
import productsDb from "@/dum_db/db";

const page = async ({ params }: { params: { slug: string } }) => {
  let products = await productsDb();
  let product = products.find((i) => i.slug === params.slug);
  // console.log(product?.src);
  return <SingleProductPage product={product} />;
};
export default page;
