import { ReactNode} from "react";
import BasicRacketsPage from "@/components/basic-rackets-page";
import {getRackets} from "@/services/get-rackets";

export default async function RacketsPage(): Promise<ReactNode> {
    const {isError, data: rackets } = await getRackets(20);
    if (isError) {
        // TODO: do normal error handling
        throw new Error('Error during data fetch');
    }

    return <BasicRacketsPage rackets={rackets!} />;
}