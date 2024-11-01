import { tweets } from "@/data/tweet";
import { TweetItem } from "../tweet/tweet-item";

export const HomeFeed = () => {
  return (
    <div>
      {tweets.map((tweet, index) => (
        <TweetItem tweet={tweet} key={index} />
      ))}
    </div>
  );
};
