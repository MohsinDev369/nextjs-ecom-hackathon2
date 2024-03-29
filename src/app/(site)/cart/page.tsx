"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { add, clear, remove, caltotal } from "@/Redux/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";
import CheckOutBtn from "./checkoutBtn";

const Cart = () => {
  const { cartItems, total, ReduxUser } = useSelector(
    (state: any) => state.cart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dispatch(caltotal()));
  });
  // console.log(cartItems);
  return (
    <div className="pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartItems.map((item: any) => (
            <div
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              key={item.slug}
            >
              <Image
                src={item.src}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
                height={200}
                width={200}
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-700">${item.price}</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span
                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      onClick={() => dispatch(remove(item))}
                    >
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={item.quantity}
                      min="1"
                    />
                    <span
                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      onClick={() => dispatch(add([item, 1]))}
                    >
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">${item.quantity * item.price}</p>
                    <Button onClick={() => dispatch(clear(item))}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- Sub total --> */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          {/* <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div> */}
          {/* <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div> */}
          {/* <hr className="my-4" /> */}
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${total} USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <CheckOutBtn />
          {/* {ReduxUser.name ? (
            <div className="flex justify-between mt-4 items-center">
              <Image
                src={ReduxUser.image}
                alt="user image"
                height={100}
                width={100}
                className="w-auto h-12"
              />
              <div className="">
                <p className="mb-1 text-lg"></p>
                <p className="text-sm text-gray-700">{ReduxUser.name}</p>
              </div>
            </div>
          ) : (
            <Link href={"./../login"}>
              <Button className="mt-6 w-full rounded-md py-1.5 font-medium text-blue-50">
                Sign In with Goole
              </Button>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
