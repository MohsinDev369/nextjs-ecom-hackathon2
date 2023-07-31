import { Button } from "@/components/ui/button";
import product from "@/dum_db/db";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  let products = await product();
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {products.map((product:any, i) => {
        if (product.category === params.slug) {
          return (
            <div key={i}>
              {" "}
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={product.src}
                  alt={product.namee}
                  width={300}
                  height={300}
                  className=""
                />
                <div className="product-info">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  {product.price && (
                    <p className="text-gray-500">${product.price}</p>
                  )}
                </div>
                <Button>View Product</Button>
              </Link>
            </div>
          );
        } 
      })}
    </div>
  );
}
