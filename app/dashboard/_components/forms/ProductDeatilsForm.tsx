"use client"

import {  useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form,FormControl,FormDescription,FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { productDetailsSchema } from "@/schemas/products"
import { createProduct } from "@/server/actions/productsCreate"
import { useToast } from "@/hooks/use-toast"



export function ProductDetailsForm(){
    const form = useForm<z.infer<typeof productDetailsSchema>>({
        resolver:zodResolver(productDetailsSchema),
        defaultValues:{
            name:"",
            url:"",
            description:""
        }
    })

    const {toast} = useToast()
    
   async function onSubmit(values:z.infer<typeof productDetailsSchema>){
       const data = await createProduct(values)

       if(data?.error && data?.message){
            toast({
                title:data?.error?"Error":"Success",
                description:data?.message,
                variant:data?.error?"destructive":"default"
            })
       }
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" container flex gap-6 flex-col py-5">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <FormField control={form.control} name="name" 
                render={({ field }) => (
                    <FormItem >
                        <FormLabel className="text-black">
                            Product Name
                        </FormLabel>
                        <FormControl>
                            <Input {...field}/>
                        </FormControl>
                        
                        <FormMessage />
                    </FormItem>
                  )}
                  />
                   <FormField control={form.control} name="url" 
                render={({ field }) => (
                    <FormItem >
                        <FormLabel className="text-black">
                        Enter your website url
                        </FormLabel>
                        <FormControl>
                            <Input {...field}/>
                        </FormControl>
                        <FormDescription>
                            Include the protocol (hhtp/htttps) and the full path of the sales page
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                  )}
                  />

        </div>
        <FormField control={form.control} name="description" 
                render={({ field }) => (
                    <FormItem >
                        <FormLabel className="text-black">
                     Product Description 
                        </FormLabel>
                        <FormControl>
                            <Textarea className="min-h-20 resize-none" {...field}/>
                        </FormControl>
                        <FormDescription>
                        An optional description to help distinguish your product from
                        other products
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                  )}
                  />
                  <div className="self-end">
                  <Button disabled={form.formState.isSubmitting}  type="submit" >
                        Save
                  </Button>
                  </div>
        </form>
    </Form>

}