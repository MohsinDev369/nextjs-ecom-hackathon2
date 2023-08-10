import { options } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import AddToRedux from "@/components/AddToRedux";

export default async function ServerPage() {
  const session = await getServerSession(options);
  let user:any = session?.user
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/cart");
    
  } 
  
    return (
      <section className="flex flex-col gap-6">
        {/* <pre>{JSON.stringify(session.user, null, 2)}</pre> */}
        <AddToRedux user={user} />
        {/* {session? redirect("/cart"): 'log in'} */}
      </section>
    );
}