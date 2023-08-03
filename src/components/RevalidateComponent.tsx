'use client'
import { Button } from "@/components/ui/button";


export default function RevalidateComponent() {
    async function HandleRevalidate() {
      await fetch(
        `http://localhost:3000/api/revalidate?tag=collection&secret=${process.env.MY_SECRET_TOKEN}`
      );
    }
    return <Button onClick={HandleRevalidate}>Revalidate</Button>
}
