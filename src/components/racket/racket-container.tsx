import {rackets} from "@/data/mock";
import {Racket} from "@/components/racket";

type Props = {
    id: string;
}

export const RacketContainer: React.FC<Props> = ({ id }) => {
    const racket = rackets.find(
        r => `${r.id}` === id
    );

    if (!racket) {
        return null;
    }

    return <Racket
        brandName={racket.brand.name}
        name={racket.name}
        description={racket.description}
        imageUrl={racket.imageUrl}
        price={racket.price}
    />;
}