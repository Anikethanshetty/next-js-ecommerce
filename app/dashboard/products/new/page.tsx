import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageWithBackButton } from "../../_components/PageWithBackButton";
import { ProductDetailsForm } from "../../_components/forms/ProductDeatilsForm";

export default function NewProductPage(){
    return <PageWithBackButton backButtonHref="/dashboard/products" pageTitle={"Create  Products"} >
      <Card>
        <CardHeader>
            <CardTitle className="text-2xl">Product Details</CardTitle>
        </CardHeader>
        <CardDescription>
            <ProductDetailsForm />
        </CardDescription>
      </Card>
    </PageWithBackButton>
}