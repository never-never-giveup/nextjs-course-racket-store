import {ReactNode} from "react";
import {RacketContainer} from "@/components/racket/racket-container";


export function generateStaticParams() {
    return [{
        id: '1',
    }, {
        id: '2',
    }, {
        id: '5',
    }];
}

type Props = PageProps<"/rackets/[id]">

export default async function RacketPage({ params }:  Props): Promise<ReactNode> {
    const { id } = await params;

    return <RacketContainer id={id} />;
}