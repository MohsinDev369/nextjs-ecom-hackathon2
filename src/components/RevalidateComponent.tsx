'use client'
import { Button } from "@/components/ui/button";


export default function RevalidateComponent() {
    async function HandleRevalidate() {
      await fetch(
        `https://mohsindev369-ecom-ui.vercel.app/api/revalidate?path=/&secret=2h3h8fkcpv0ekeldme`
      );
    }
    return <Button onClick={HandleRevalidate}>Revalidate</Button>
}
