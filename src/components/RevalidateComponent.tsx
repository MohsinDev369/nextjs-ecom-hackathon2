"use client";
import { Button } from "@/components/ui/button";
import { ToastWithAction } from "@/components/ToastWithAction";
export default function RevalidateComponent() {
  async function HandleRevalidate() {
    await fetch(
      `https://mohsindev369-ecom-ui.vercel.app/api/revalidate?path=/allproducts&secret=${process.env.NEXT_PUBLIC_MY_SECRET_TOKEN}`
    );
    <ToastWithAction> Revalidating</ToastWithAction>;
  }
  return <Button onClick={HandleRevalidate}>Revalidate</Button>;
}
