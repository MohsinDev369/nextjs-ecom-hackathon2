import Image from "next/image";
import product from "../../dum_db/db";
// import { getProducts } from "@/lib/sanity-utils";

import Link from "next/link";
const slider = async () => {
  // let products = await getProducts()
  let products = await product()
   return (
     <div className="">
       <div className="flex gap-4 flex-wrap">
         {products && products.map((product:any, index:any) => (
           <div key={index}>
             <Link href={`/products/${product.slug}`}>
               <Image
                 src={product.src}
                 alt={product.name}
                 width={200}
                 height={200}
                 className=""
               />
               <div className="product-info">
                 <h3 className="text-lg font-bold">{product.name}</h3>
                 {product.price && (
                   <p className="text-gray-500">${product.price}</p>
                 )}
               </div>
             </Link>
           </div>
         ))}
       </div>
     </div>
   );
};
export default slider;
