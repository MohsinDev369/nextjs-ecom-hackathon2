import products from "@/dum_db/db";

export default function Page({ params }: { params: { slug: string } }) {
  return (
      <>
          <div id="all-product-container"></div>
      {params.slug}
          {products.map((i) => {
          return <div key={i.namee}></div>
      })}
    </>
  );
}
