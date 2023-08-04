import ProductCard from "@/components/ProductCard";

import product from "@/dum_db/db";


export default async function Page() {
  let products = await product();
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {products &&
        products.map((product: any, i) => {
          // console.log(product.category.toLowerCase(), params.slug);
          if (product.category.toLowerCase() === "male") {
            return <ProductCard key={i} product={product} />;
          }
        })}
    </div>
  );
}
