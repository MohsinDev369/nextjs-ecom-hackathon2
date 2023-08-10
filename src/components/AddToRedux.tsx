'use client'
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "@/Redux/CartSlice";
import { Button } from "./ui/button";
import Link from "next/link";

const AddToRedux = ({user}:{user:any}) => {
    const { ReduxUser } = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();
  dispatch(addUser(user));
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 my-12">You are Loged In
      <Link href={'/cart'}>
      <Button>
        Back to cart
      </Button>
      </Link>
      </div>
    </>
    
  )
}

export default AddToRedux