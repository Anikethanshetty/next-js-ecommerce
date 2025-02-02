import BrandLogo from "@/components/BrandLogo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar(){
  return(
    <header className="flex py-4 shadow-xl bg-background/95">
      <nav className="flex items-center gap-10 container">
        <Link className="mr-auto" href="/dashboard">
        <BrandLogo/>
        </Link>
        <Link className="mr-auto" href="/products">
          Products
        </Link>
        <Link className="mr-auto" href="/analytics">
          Analytics
        </Link>
        <Link className="mr-auto" href="/subscription">
          Subscription
        </Link>
        <UserButton/>
      </nav>
    </header>
  )
}