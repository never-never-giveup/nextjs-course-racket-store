import {Racket} from "@/components/racket";
import {getRacketById} from "@/services/get-racket-by-id";
import {notFound} from "next/navigation";

type Props = {
    id: string;
}

export const RacketContainer: React.FC<Props> = async ({ id }) => {
    const { isError, data } = await getRacketById(id);

    if (isError) {
        // TODO: implement proper error page
        throw new Error('Something went wrong!');
    }

    if (!data) {
        return notFound();
    }

    const { product: racket } = data;

    return <Racket
        brandName={racket.brand.name}
        name={racket.name}
        description={racket.description}
        imageUrl={racket.imageUrl}
        price={racket.price}
    />;
}