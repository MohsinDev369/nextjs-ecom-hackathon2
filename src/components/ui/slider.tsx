import Image from "next/image";
import products from "../../dum_db/db";
import Link from "next/link";

const slider = () => {
   return (
     <div className="">
       <div className="flex gap-4 overflow-auto touch-auto scroll-smoot">
         {products.map((product, index) => (
           <div key={index} className="w-auto">
             <Image
               src={product.src}
               alt={product.namee}
               width={300}
               height={300}
               className=""
             />
             <div className="product-info">
               <h3 className="text-lg font-bold">{product.namee}</h3>
               {product.price && (
                 <p className="text-gray-500">{product.price}</p>
               )}
             </div>
           </div>
         ))}
       </div>
     </div>
   );
};
export default slider;
