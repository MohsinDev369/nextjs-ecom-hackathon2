import { createClient, groq } from "next-sanity";
import  projectTypes  from "@/types/product-types";

export async function getProducts(): Promise<projectTypes> {
    let fetchData = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID as string,
        dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET as string,
      apiVersion: "2023-07-30",
      useCdn: true
    })
  // console.log('getProduct function called');

  fetchData.fetch(
    groq`*[_type == "category"]{
      _id,
      name,
    }`
  )
  return fetchData.fetch(
    groq`*[_type == "product"]{
      _id,
      name,
      "slug": slug.current,
      "src": image.asset->url,
      quantity,
      "category":*[_id==^.category._ref][0].name,
      price,
      details,
      care
    }`,
    
  )
}