import {ReactNode} from "react";
import {rackets} from "@/data/mock";
import {RacketCard} from "@/components/racket-card";


export function generateStaticParams() {
    return [{
        id: '1',
    }, {
        id: '2',
    }, {
        id: '5',
    }];
}

export default async function RacketPage({ params }: { params: { id: string } }): Promise<ReactNode> {
    const { id } = await params;
    const racket = rackets.find(racket => `${racket.id}` === id);

    if (!racket) {
        return null;
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 xl:gap-12 items-start">
                <section className="flex flex-col gap-4">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        {racket.brand.name}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                        {racket.name}
                    </h1>
                    <p className="text-sm leading-relaxed text-muted-foreground text-justify">
                        {racket.description}
                    </p>
                </section>

                <main className="w-full flex justify-center">
                    <RacketCard name={racket.name} imageUrl={racket.imageUrl} />
                </main>

                <section className="flex flex-col gap-6 lg:text-right">
                    <div className="text-2xl font-bold tracking-tight text-foreground lg:pt-2">
                        {racket.price} {'eur'}
                    </div>
                </section>
            </div>
        </div>
    );
}