import { Button } from "@/components/ui/button";
import {CaretLeftIcon} from "@radix-ui/react-icons"
import Link from "next/link";
import { ReactNode } from "react";

export function PageWithBackButton({backButtonHref,pageTitle,children}:
    {
        backButtonHref:string,
        pageTitle:string,
        children:ReactNode
    }) {
        return <div className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-8">
           <Button size="icon" className="rounded-full" variant="outline" asChild>
                <Link href={backButtonHref}>
                    <div className="sr-only">back</div>
                    <CaretLeftIcon />
                </Link>
            </Button> 
            <h1 className="text-2xl font-semibold self-center ">{pageTitle}</h1>
            <div className="col-start-2">{children}</div>
        </div>
    }