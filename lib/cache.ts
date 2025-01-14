import {  revalidateTag } from "next/cache"
import { unstable_cache } from "next/cache";
import { cache } from "react";1 

export type ValidTags = ReturnType<typeof getGlobal> | ReturnType<typeof getUserTag> | ReturnType<typeof getIdTag>

export const CACHE_TAGS = {
    products:"products",
    subscription:"subscription"
} as const 

export function getGlobal(tag:keyof typeof CACHE_TAGS){
    return `global:${CACHE_TAGS[tag]}` as const 
}

export function getUserTag(userId:string,tag:keyof typeof CACHE_TAGS){
    return `user:${userId}-${CACHE_TAGS[tag]}` as const 
}

export function getIdTag(id:string,tag:keyof typeof CACHE_TAGS){
    return `id:${id}-${CACHE_TAGS[tag]}` as const 
}

export function clearFullCache(){
    return revalidateTag("*")
}

export function dbCache<T extends (...args: any[]) => Promise<any>>(cb:Parameters<typeof unstable_cache<T>>[0],{tags}:{tags:ValidTags[]}){
    return cache(unstable_cache<T>(cb,undefined,{tags:[...tags,"*"]}))
}

export function revalidateDbCache({tag,userId,id}:{tag:keyof typeof CACHE_TAGS,userId?:string,id?:string}){
        revalidateTag(getGlobal(tag))
        if(userId != null){
            revalidateTag(getUserTag(userId,tag))
        }
        if(id != null){
            revalidateTag(getIdTag(id,tag))
        }
}