'use client'
import { Button } from "@/components/ui/button";


export default function RevalidateComponent() {
    async function HandleRevalidate() {
      await fetch(
        `https://mohsindev369-ecom-ui.vercel.app/api/revalidate?path=/&secret=${process.env.MY_SECRET_TOKEN}`
      );
    }
    return <Button onClick={HandleRevalidate}>Revalidate</Button>
}
