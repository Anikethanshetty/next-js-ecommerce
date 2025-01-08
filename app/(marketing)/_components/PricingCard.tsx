
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Feature from "./Feature";
import { subscriptionTiersInOrder } from "@/data/subscriptionTires";
import formatNumber from "@/lib/formatNumber";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingCard({
  name,
  priceInCents,
  maxNumberOfProducts,
  maxNumberOfVisits,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding}:(typeof subscriptionTiersInOrder[number])){
    const isPopular = name === "Standard"
    
  return <Card>
    <CardHeader>
      <div className="text-accent font-semibold mb-8 ">{name}</div>
      <CardTitle className="text-lg font-bold">${priceInCents/100 }/mo</CardTitle>
      <CardDescription>{ formatNumber(maxNumberOfVisits)} pricing page visits/mo</CardDescription>
    </CardHeader>
    <CardContent>
      <SignUpButton>
          <SignInButton mode="modal" component="" >
        <Button className="text-lg w-full rounded-lg" variant={isPopular ? "accent" : "default"}>
            Get Started
        </Button>
          </SignInButton>
      </SignUpButton>
    </CardContent>
    <CardFooter className="flex flex-col gap-4 items-start">
      <Feature className="font-bold">{maxNumberOfProducts}{" "}{ maxNumberOfProducts === 1? "product" : "products"}</Feature>
      <Feature>PPP discounts</Feature>
     { canAccessAnalytics && <Feature>Advanced Analytics</Feature>} 
     { canRemoveBranding && <Feature>Remove PPP branding </Feature>} 
     { canCustomizeBanner && <Feature>Banner customization</Feature>} 
    </CardFooter>
  </Card>
}


