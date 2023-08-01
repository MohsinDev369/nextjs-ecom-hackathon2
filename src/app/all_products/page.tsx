import { Button } from "@/components/ui/button";
import product from "@/dum_db/db";
// import { getProducts } from "@/lib/sanity-utils";
import Image from "next/image";
import Link from "next/link";
const page = async () => {
  // let products = await getProducts();
  let products = await product();
  // console.log(products);
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {products.map((product:any, i) => {
        return (
          <div key={i}>
            <Link href={`/product/${product.slug}`}>
              <Image
                src={product.src}
                alt={product.name}
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
      })}
    </div>
  );
};

export default page;
