import { ReactNode} from "react";
import {RacketFilter} from "@/components/rackets-filter";
import {RacketsList} from "@/components/rackets-list";
import {Racket} from "@/data/types/racket";

type Props = {
    rackets: Racket[];
}

export default function BasicRacketsPage({ rackets}: Props): ReactNode {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold tracking-tight">Ракетки</h1>

            {/* Main Two-Column Layout Split */}
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 items-start">
                <aside className="flex flex-col gap-4">
                    <RacketFilter />
                </aside>

                {/* RIGHT COLUMN */}
                <main className="flex justify-around flex-wrap">
                    <RacketsList rackets={rackets} />
                </main>

            </div>
        </div>
    );
}