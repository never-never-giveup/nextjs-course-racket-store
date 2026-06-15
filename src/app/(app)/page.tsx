import {getRackets} from "@/services/get-rackets";
import {getTop10} from "@/services/get-top10";
import {Suspense} from "react";
import {RacketsSelectionContainer} from "@/components/rackets-selection-container";


export default async function Home() {
    return (
        <>
            <Suspense fallback={<div>Loading rackets</div>}>
                <RacketsSelectionContainer title="Ракетки" getRackets={getRackets} hrefToAll='/rackets' className='mb-16' />
            </Suspense>
            <Suspense fallback={<div>Loading top 10</div>}>
                <RacketsSelectionContainer title="Top 10" getRackets={getTop10} />
            </Suspense>
        </>
    );
}
