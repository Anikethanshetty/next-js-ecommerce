import ProductCard from "./ProductCard"

export function ProductGrid({products}:{
    products:{
        name:string
        url:string
        description:string | null
        id:string
}[]
}){
    return  <div className="grid grid-cols-1 lg:grid:2 xl:grid-cols-3 gap-6">
        {
            products.map(product =>(
                <ProductCard key={product.id} {...product} />
            ))
        }
    </div>
}