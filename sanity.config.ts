import schemas from '@/sanity/schemas';
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID as string,
    dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET as string,
    title: "ecom website",
    apiVersion: "2023-07-30",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;