import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const ProductCard = ({product}:{product:any}) => {
  return (
    <div className="w-52 h-96  flex flex-col justify-stretch my-8">
      <Link href={`/product/${product.slug}`}>
        <div className="max-h-[70%]">
          <Image
            src={product.src}
            alt={product.name}
            width={300}
            height={300}
            className="w-auto h-80 object-cover"
          />
        </div>
        <div className="mt-4">
          {/* <!-- Product details here --> */}
          <h3 className="text-lg font-bold truncate">{product.name}</h3>
          <p className="text-gray-500">${product.price}</p>
          <Button>View Product</Button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard