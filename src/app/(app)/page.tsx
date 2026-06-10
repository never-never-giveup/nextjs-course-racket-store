import Link from 'next/link';
import {RacketCard} from "@/components/racket-card";
import {rackets} from "@/data/mock";

const products = rackets.slice(0, 3);

export default function Home() {
  return (
      <div className="flex flex-col gap-6">
          <div className="flex justify-between items-baseline pb-2">
              {/* Left: Section Title */}
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Ракетки
              </h2>

              {/* Right: Simple, clean Text Link */}
              <Link
                  href="/rackets"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-all"
              >
                  Все
              </Link>
          </div>
          <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) =>
                  <Link href={`/rackets/${product.id}`} key={product.id} >
                    <RacketCard
                        name={product.name}
                        imageUrl={product.imageUrl} />
                  </Link>
              )}
          </main>
      </div>
  );
}
