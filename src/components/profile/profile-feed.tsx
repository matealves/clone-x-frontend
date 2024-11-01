import { Tweet } from "@/types/tweet";
import { TweetItem } from "../tweet/tweet-item";

type Props = {
  tweets: Tweet[];
};

export const ProfileFeed = ({ tweets }: Props) => {
  return (
    <div className="">
      {tweets.map((tweet, index) => (
        <TweetItem tweet={tweet} key={index} />
      ))}
    </div>
  );
};
