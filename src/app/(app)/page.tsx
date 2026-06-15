import {Selection} from "@/components/selection";
import {RacketSelectionItem} from "@/components/racket-selection-item";
import {getRackets} from "@/services/get-rackets";
import {getTop10} from "@/services/get-top10";


export default async function Home() {
    const [{isError: isErrorRackets, data: products }, { isError: isErrorTop10, data: top10 }] = await Promise.all([
        getRackets(),
        getTop10(),
    ]);

    if (isErrorTop10 && isErrorRackets) {
        // TODO: do normal error handling
        throw new Error('Error during data fetch');
    }

    return (
        <>
            {isErrorRackets ? null : <Selection title='Ракетки' hrefToAll='/rackets' className='mb-16'>
                {products!.map((product) =>
                    <RacketSelectionItem
                        key={product.id}
                        id={`${product.id}`}
                        href={product.imageUrl}
                        name={product.name} />
                )}
            </Selection>}
            {isErrorTop10 ? null : <Selection title='Top 10'>
                {top10!.map((product) =>
                    <RacketSelectionItem
                        key={product.id}
                        id={`${product.id}`}
                        href={product.imageUrl}
                        name={product.name} />
                )}
            </Selection>
            }
        </>
    );
}
