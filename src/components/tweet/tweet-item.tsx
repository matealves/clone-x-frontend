import { Tweet } from "@/types/tweet";
import Link from "next/link";

type Props = {
  tweet: Tweet;
};

export const TweetItem = ({ tweet }: Props) => {
  return (
    <div className="flex gap-2 p-6 border-b-2 border-gray-900">
      <div>
        <Link href={`/${tweet.user.slug}`}>
          <img
            src={tweet.user.avatar}
            alt={tweet.user.name}
            className="size-10 rounded-3xl"
          />
        </Link>
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-2">
          <div className="font-extrabold text-sm">
            <Link href={`/${tweet.user.slug}`} className="">
              {tweet.user.name} {tweet.user.lastName}
            </Link>
          </div>

          <div className="text-xs text-gray-500">@{tweet.user.slug}</div>
        </div>

        <div className="py-2 text-sm">{tweet.body}</div>
        {tweet.image && (
          <div className="w-full">
            <img src={tweet.image} alt="" className="w-full rounded-2xl" />
          </div>
        )}

        <div className="flex mt-6 text-gray-500">botoes</div>
      </div>
    </div>
  );
};