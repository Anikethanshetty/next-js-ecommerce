"use server"

import { auth } from "@clerk/nextjs/server";
import { deleteProductDb } from "../db/products";

export async function deleteProduct({id}:{id:string}) {
    const {userId} = await auth()

    if(userId == null) return {error:true,message:"there was an error deleting your product"}

   const isSucess =  await deleteProductDb({id,userId})

   return {error:!isSucess,message:isSucess?"succesfully deleted your product":"there was an error deleting your product"}
}