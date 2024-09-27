import { TrendingItem } from "./trending-item";
import { TrendingItemSkeleton } from "./skeleton/trending-item-skeleton";

export const TreadingArea = () => {
  return (
    <div className="border border-gray-700 rounded-3xl">
      <h2 className="text-xl p-6"> O que está acontecendo</h2>

      <div className="flex flex-col gap-4 p-6 pt-0">
        <TrendingItem label="#Test" count={1293} />
        <TrendingItem label="#Test2" count={829} />
        <TrendingItemSkeleton />
        <TrendingItemSkeleton />
      </div>
    </div>
  );
};
