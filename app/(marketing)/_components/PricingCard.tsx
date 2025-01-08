import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { subscriptionTiersInOrder } from "@/data/subscriptionTires";

export default function PricingCard({
  name,
  priceInCents,
  maxNumberOfProducts,
  maxNumberOfVisits,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding}:(typeof subscriptionTiersInOrder[number])){
  return <Card>
    <CardHeader>
      <CardTitle>${priceInCents/100 }/mo</CardTitle>
      <CardDescription>{ maxNumberOfVisits} pricing page visits/mo</CardDescription>
    </CardHeader>
  </Card>
}