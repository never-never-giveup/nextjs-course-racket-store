import {ReactNode} from "react";
import {get} from "@/data/api-access";
import {Racket} from "@/data/types/racket";
import {RacketSelectionItem} from "@/components/racket-selection-item";
import {Selection} from "@/components/selection";

export default async function Top10Page(): Promise<ReactNode> {
    const top10 = await get<Racket[]>({
        path: 'top-10',
    });

    return <Selection title='Top 10'>
        {top10.map((product) =>
            <RacketSelectionItem
                key={product.id}
                id={`${product.id}`}
                href={product.imageUrl}
                name={product.name} />
        )}
    </Selection>;
}