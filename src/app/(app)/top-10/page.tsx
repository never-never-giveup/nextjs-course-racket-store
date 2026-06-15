import {ReactNode} from "react";
import {RacketSelectionItem} from "@/components/racket-selection-item";
import {Selection} from "@/components/selection";
import {getTop10} from "@/services/get-top10";

export default async function Top10Page(): Promise<ReactNode> {
    const {isError, data: top10 } = await getTop10();

    if (isError) {
        // TODO: do normal error handling
        throw new Error('Error during data fetch');
    }

    return <Selection title='Top 10'>
        {top10!.map((product) =>
            <RacketSelectionItem
                key={product.id}
                id={`${product.id}`}
                href={product.imageUrl}
                name={product.name} />
        )}
    </Selection>;
}