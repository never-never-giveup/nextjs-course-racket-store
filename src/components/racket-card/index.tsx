import {Card, CardContent} from "@/components/ui/card";

export interface RacketCardProps {
    name: string;
    imageUrl: string;
}

export const RacketCard: React.FC<RacketCardProps> = ({ name, imageUrl}) => (
    <div className="flex flex-col gap-3 group cursor-pointer">

        {/* The Product Card (Kept exactly identical to your design) */}
        <Card className="overflow-hidden border-zinc-200 rounded-xl bg-white shadow-none transition-all duration-200 hover:border-zinc-300">
            <CardContent className="p-6 flex items-center justify-center aspect-3/4">
                <img
                    src={imageUrl}
                    alt={name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
            </CardContent>
        </Card>

        {/* Product Label */}
        <div className="text-sm font-medium text-muted-foreground px-1">
            {name}
        </div>

    </div>
)