import products from "@/dum_db/db";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }): any {
    
  return (
    <div className="">
          {products.map((product, index) => {
              if (params.slug === product.slug) {
                  return <div key={index}>
                      <Image src={product.src} alt="img" width={100} height={100}/>
                  </div>
              }
          
      })}
    </div>
  );
}
