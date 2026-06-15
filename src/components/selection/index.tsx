import {PropsWithChildren} from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";

type Props = {
    title: string;
    hrefToAll?: string;
    className?: string;
}

export const Selection: React.FC<PropsWithChildren<Props>> = ({title, hrefToAll, children, className}) => (
    <div className={cn('flex', 'flex-col', 'gap-6',  className)}>
        <div className="flex justify-between items-baseline pb-2">
            {/* Left: Section Title */}
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {title}
            </h2>

            {/* Right: Simple, clean Text Link */}
            {hrefToAll ?
                <Link
                    href={hrefToAll}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-all"
                >
                    Все
                </Link> : null
            }
        </div>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {children}
        </main>
    </div>
);