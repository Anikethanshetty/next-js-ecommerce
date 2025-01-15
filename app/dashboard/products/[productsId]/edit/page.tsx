
import { getProduct } from "@/server/db/products"
import { auth } from "@clerk/nextjs/server"
import { notFound } from "next/navigation"
import { string } from "zod"

export default async function EditProductPage({params: { productId },searchParams: { tab = "details" }}: 
    {
    params: { productId: string }
    searchParams: { tab?: string }
  })
  {
        const {userId,redirectToSignIn} = await auth()

        if(userId == null) redirectToSignIn()

       //@ts-ignore
            const product = await getProduct({ id: productId, userId:userId })
            if (product == null) return notFound()

  }