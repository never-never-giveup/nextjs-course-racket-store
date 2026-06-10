import { ReactNode} from "react";
import {rackets} from "@/data/mock";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Link from "next/link";
import {RacketCard} from "@/components/racket-card";

const brands = ["All", "Head", "Yonex"];

export default function RacketsPage(): ReactNode {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold tracking-tight">Ракетки</h1>

            {/* Main Two-Column Layout Split */}
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 items-start">

                {/* LEFT COLUMN: BRAND SIDEBAR  */}
                <aside className="flex flex-col gap-4">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Бренд</h3>
                    <ul className="space-y-3 text-sm">
                        {brands.map((brand) => (
                            <li key={brand}>
                                <button className={`text-left w-full ${brand === "All" ? "font-semibold" : "text-muted-foreground"}`}>
                                    {brand}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* RIGHT COLUMN */}
                <main className="w-full min-w-0">
                    <Carousel opts={{ align: "start" }} className="w-full relative">
                        <CarouselContent className="-ml-4">
                            {rackets.map((racket) => (
                                <CarouselItem
                                    key={racket.id}
                                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                                >
                                    <Link href={`/rackets/${racket.id}`}>
                                        <RacketCard name={racket.name} imageUrl={racket.imageUrl} />
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* Navigation Arrows positioned on the layout */}
                        <div className="absolute -top-12 right-12 flex gap-2">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                </main>

            </div>
        </div>
    );
}