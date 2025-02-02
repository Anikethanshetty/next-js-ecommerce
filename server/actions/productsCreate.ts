"use server"

import { productDetailsSchema } from "@/schemas/products";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { createProductDb, updateProductDb } from "../db/products";
import { redirect } from "next/navigation";

export async function createProduct(unsafeData:z.infer<typeof productDetailsSchema>):Promise<{error:boolean;message:string}| undefined> {
    const { userId } = await auth()

    const {success, data} = productDetailsSchema.safeParse(unsafeData)

    if(!success || userId ==null){
        return {
            error:true,
            message:"There was an error creating your product"
        }
    }

   const {id} =  await createProductDb({...data,clerkUserId:userId})
   
   redirect(`/dashboard/products/${id}/edit?tab=countries`)
}

export async function updateProduct(id:string,unsafeData:z.infer<typeof productDetailsSchema>):Promise<{error:boolean;message:string}| undefined> {
    const { userId } = await auth()

    const {success, data} = productDetailsSchema.safeParse(unsafeData)

    if(!success || userId ==null){
        return {
            error:true,
            message:"There was an error updating your product"
        }
    }

   const isSuccess =  await updateProductDb(data,{id,userId})

            return {
                error:!isSuccess,
                message:isSuccess?"Product deatils updated":"There was an error updating your product"
            }
}

