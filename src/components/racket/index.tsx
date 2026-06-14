import {FC} from "react";
import {RacketCard} from "@/components/racket/racket-card";

type Props = {
    brandName: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
}

export const Racket: FC<Props> = (props) => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 xl:gap-12 items-start">
                <section className="flex flex-col gap-4">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        {props.brandName}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                        {props.name}
                    </h1>
                    <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                        {props.description}
                    </p>
                </section>

                <main className="w-full flex justify-center">
                    <RacketCard name={props.name} imageUrl={props.imageUrl} />
                </main>

                <section className="flex flex-col gap-6 lg:text-right">
                    <div className="text-2xl font-bold tracking-tight text-foreground lg:pt-2">
                        {props.price} {'eur'}
                    </div>
                </section>
            </div>
        </div>
    );
}