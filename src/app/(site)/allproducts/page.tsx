import ProductCard from "@/components/ProductCard";
import product from "@/dum_db/db";
// import { getProducts } from "@/lib/sanity-utils";
const page = async () => {
  // let products = await getProducts();
  let products = await product();
  // console.log(products);
  return (
    <div className="flex flex-wrap gap-4 justify-evenly space-y-8">
      {products &&
        products.map((product: any, i) => {
          return (
            <ProductCard key={i} product={product} />
          );
        })}
    </div>
  );
};

export default page;
