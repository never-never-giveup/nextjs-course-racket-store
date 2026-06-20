import {ReactNode, Suspense} from "react";
import {RacketContainer} from "@/components/racket/racket-container";


type Props = PageProps<"/rackets/[id]">

export default async function RacketPage({ params }:  Props): Promise<ReactNode> {
    const { id } = await params;

    return (
        <Suspense fallback={<div>Loading racket page</div>}>
            <RacketContainer id={id} />
        </Suspense>
    );
}