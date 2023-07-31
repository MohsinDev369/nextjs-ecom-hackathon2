import { createClient, groq } from "next-sanity";
import  projectTypes  from "@/types/product-types";

export async function getProducts(): Promise<projectTypes> {
    return createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID as string,
        dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET as string,
        apiVersion: "2023-07-30",
}).fetch(
        groq`*[_type == "product"]{
      _id,
      name,
      "slug": slug.current,
      "src": image.src,
      quantity,
      category,
      price,
      details,
      care
    }`
    )
}