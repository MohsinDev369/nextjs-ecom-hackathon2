"use client";
import Image from "next/image";
import { ToastWithAction } from "@/components/ToastWithAction";
import { add } from "@/Redux/CartSlice";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import {useState } from "react";

export default function Page({ product }: { product: any }) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  console.log(product);
  return (
    <section className="bg-[#fcfcfc] sm:p-16 overflow-hidden">
      <div className="flex justify-between max-lg:flex-col">
        <div
          id="producy-imagery"
          className="flex flex-grow-[2] flex-shrink-[1] gap-8"
        >
          <div className="flex flex-col gap-4">
            <Image
              src={`${product?.src}`}
              alt={product.name}
              height={100}
              width={100}
            />
          </div>
          <div className="w-[80%] h-full">
            <Image
              src={`${product.src}`}
              alt={product.name}
              height={500}
              width={500}
            />
          </div>
        </div>
        <div
          id="Product-veriation"
          className="flex flex-col flex-shrink-[1] flex-grow-[1] gap-10 mt-16"
        >
          <div>
            <h3 className="text-2xl text-[#212121]">{product?.name}</h3>
            <span className="font-semibold text-xl opacity-30 ">Dress</span>
          </div>
          <div className="space-y-12">
            <p className="text-[#212121] font-bold text-[0.9rem]">
              SELECT SIZE
            </p>
            <ul className="flex gap-4 mt-4 text-base cursor-pointer font-bold items-center rounded-[50%] text-[#666]">
              <li>XS</li>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </ul>
            <div id="product-quantity" className="flex gap-8 items-center">
              <h4 className="font-bold">Quantity:</h4>
              <div className="flex gap-8">
                <Button onClick={() => count && setCount(count - 1)}>-</Button>
                <div>{count}</div>
                <Button onClick={() => setCount(count + 1)}>+</Button>
              </div>
            </div>
            <div
              id="addtocart"
              className="flex items-center gap-4"
              onClick={() => dispatch(add([product, count]))}
            >
              <ToastWithAction>Add to cart</ToastWithAction>

              <p className="font-bold text-2xl text-[#212121]">
                ${product?.price}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Product-desc-container"
        className="bg-[#fff] flex flex-col mt-16 pt-8 sm:pb-24 sm:px-16 gap-8 "
      >
        <div
          id="desc-title"
          className="flex z-[2] relative w-full h-[150px] border-b-2"
        >
          <div
            id="bg-text"
            className="flex z-[2] font-extrabold text-9xl text-[#f2f3f7] opacity-70 w-full h-full"
          >
            Overview
          </div>
          <h2 className="font-bold text-2xl text-[#212121] pb-12 z-[2] top-[45%] absolute">
            Product Information
          </h2>
        </div>
        <div
          id="desc-details"
          className="flex z-[2] max-sm:flex-col max-sm:gap-4"
        >
          <h4 className="flex-1 font-bold text-base text-[#666] ">
            PRODUCT DETAILS
          </h4>
          <p className="font-light text-justify text-[#212121] flex-[2_1_0%]">
            {product.details}
          </p>
        </div>
        <div className="flex z-[2]">
          <h4 className="flex-1 font-bold text-base text-[#666] ">
            PRODUCT CARE
          </h4>
          <ul className="flex-[2_1_0%] font-semibold ">
            <li>Lorem ipsum dolor sit amet</li>
            <li>consectetur adipiscing elit</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
