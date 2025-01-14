import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { AddToSiteProductModalContent } from "./AddToSiteProductModalContent"
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { DeleteProductAlertDialogContent } from "./DeleteProductAlertDialogContent"

export default function ProductCard({name,url,description,id,}:{
        name:string
        url:string
        description:string | null
        id:string
}){
    return <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                    <div className="flex justify-between items-end">
                        <CardTitle>
                            <Link href={`/dashboard/products/${id}/edit`}>{name}</Link>
                        </CardTitle>
                        <Dialog>
                            <AlertDialog>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant={"outline"} className="size-8 p-0 ">
                                    <div className="sr-only">Action Menu</div>
                                    <DotsHorizontalIcon className="size-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                    <DropdownMenuItem  asChild>
                                            <Link  href={`/dashboard/products/${id}/edit`}>Edit</Link>
                                    </DropdownMenuItem>
                                    <DialogTrigger asChild>
                                        <DropdownMenuItem>
                                            Add to Site
                                        </DropdownMenuItem>
                                    </DialogTrigger>
                                    <DropdownMenuSeparator />
                                        <AlertDialogTrigger>
                                                <DropdownMenuItem className="w-32">
                                                    Delete
                                                </DropdownMenuItem>
                                        </AlertDialogTrigger>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    <DeleteProductAlertDialogContent id={id} />
                            </AlertDialog> 
                    <AddToSiteProductModalContent id={id} />
                        </Dialog>
                    </div>
                        <CardDescription>
                            {url}
                        </CardDescription>
                </CardHeader>
        {description && <CardContent>
                {description}
            </CardContent> }
    </Card>
}