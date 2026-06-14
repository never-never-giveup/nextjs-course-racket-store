import {rackets} from "@/data/mock";
import {Selection} from "@/components/selection";
import {RacketSelectionItem} from "@/components/racket-selection-item";

const products = rackets.slice(0, 3);

export default function Home() {
    return (
        <Selection title='Ракетки' hrefToAll='/rackets'>
            {products.map((product) =>
                <RacketSelectionItem
                    key={product.id}
                    id={`${product.id}`}
                    href={product.imageUrl}
                    name={product.name} />
            )}
        </Selection>
    );
}
