"use client";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import getStipePromise from "../../../lib/stripe"

async function handleClick(product: any) {
  const stripe = await getStipePromise();
  //  fetch(`${location.origin}/api/checkout_sessions`, {
  const res =await  fetch(`/api/checkout_sessions`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(product),
  });
  // console.log(location.origin);
   const data = await res.json();
   if (data.session) {
     stripe?.redirectToCheckout({ sessionId: data.session.id });
   }
}

const CheckOutBtn = () => {
  const entireCart = useSelector(
    (state: any) => state.cart
  );
  return (
    <Button
      className="mt-6 w-full rounded-md py-1.5 font-medium text-blue-50"
      onClick={()=>handleClick(entireCart)}
    >
      Check out
    </Button>
  );
};

export default CheckOutBtn;
