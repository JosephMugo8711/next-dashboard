export default function ItemPage({ params}: { params: { item: string }}){
    return(
        <div>
            <h1 className="text-3xl font-semibold">{params.item} Page</h1>
            <p>
                
            </p>
        </div>
    )
}