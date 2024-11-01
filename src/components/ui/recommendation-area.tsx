import { user2 } from "@/data/user";
import { RecommendationItem } from "./recommendation-item";
import { RecommendationItemSkeleton } from "./skeleton/recommendation-item-skeleton";

export const RecommendationArea = () => {
  return (
    <div className="border border-gray-700 rounded-3xl">
      <h2 className="text-xl p-6">Quem seguir</h2>

      <div className="flex flex-col gap-4 p-6 pt-0">
        <RecommendationItem user={user2} />
        <RecommendationItemSkeleton />
      </div>
    </div>
  );
};
