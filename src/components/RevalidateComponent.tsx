'use client'
import { Button } from "@/components/ui/button";
import { METHODS, get } from "http";


export default function RevalidateComponent() {
    async function HandleRevalidate() {
      let req =await fetch(
        `https://mohsindev369-ecom-ui.vercel.app/api/revalidate?path=/&secret=${process.env.NEXT_PUBLIC_MY_SECRET_TOKEN}`, 
      );
      let res = await req.json()
      console.log(res);
    }
    return <Button onClick={HandleRevalidate}>Revalidate</Button>
}
