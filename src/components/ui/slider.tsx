import Image from "next/image";
import products from "../../dum_db/db";
import Link from "next/link";

const slider = () => {
   return (
     <div className="">
       <div className="flex gap-4 flex-wrap">
         {products.map((product, index) => (
           <div key={index}>
             <Link href={product.slug}>
               <Image
                 src={product.src}
                 alt={product.namee}
                 width={200}
                 height={200}
                 className=""
               />
               <div className="product-info">
                 <h3 className="text-lg font-bold">{product.namee}</h3>
                 {product.price && (
                   <p className="text-gray-500">{product.price}</p>
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
