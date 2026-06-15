import { ReactNode} from "react";
import {Racket} from "@/data/types/racket";
import {get} from "@/data/api-access";
import BasicRacketsPage from "@/components/basic-rackets-page";

export default async function RacketsPage(): Promise<ReactNode> {
    const rackets = await get<Racket[]>({
        path: 'products',
        limit: 20
    })
    return <BasicRacketsPage rackets={rackets} />;
}