import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import product from "@/dum_db/db";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  let products = await product();
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {products &&
        products.map((product: any, i) => {
          // console.log(product.category.toLowerCase(), params.slug);
          if (product.category.toLowerCase() === "kids") {
            return <ProductCard key={i} product={product} />;
          }
        })}
    </div>
  );
}
