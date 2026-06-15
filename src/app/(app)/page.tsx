import {Selection} from "@/components/selection";
import {RacketSelectionItem} from "@/components/racket-selection-item";
import {get} from "@/data/api-access";
import {Racket} from "@/data/types/racket";


export default async function Home() {
    const [products, top10] = await Promise.all([
        get<Racket[]>({ path: "products", limit: 10 }),
        get<Racket[]>({ path: "top-10" })
    ]);
    return (
        <>
            <Selection title='Ракетки' hrefToAll='/rackets' className='mb-16'>
                {products.map((product) =>
                    <RacketSelectionItem
                        key={product.id}
                        id={`${product.id}`}
                        href={product.imageUrl}
                        name={product.name} />
                )}
            </Selection>
            <Selection title='Top 10'>
                {top10.map((product) =>
                    <RacketSelectionItem
                        key={product.id}
                        id={`${product.id}`}
                        href={product.imageUrl}
                        name={product.name} />
                )}
            </Selection>
        </>
    );
}
