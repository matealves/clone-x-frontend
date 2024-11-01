import { TweetItem } from "@/components/tweet/tweet-item";
import { GeneralHeader } from "@/components/ui/general-header";
import { SearchInput } from "@/components/ui/search-input";
import { tweets } from "@/data/tweet";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    q: string | undefined;
  };
};

export default function Page({ searchParams }: Props) {
  if (!searchParams.q) redirect("/");

  const tweetsSearch = tweets.filter((tweet) =>
    searchParams?.q
      ? tweet.body.toLowerCase().includes(searchParams.q.toLowerCase())
      : []
  );

  return (
    <div className="">
      <GeneralHeader>
        <SearchInput defaultValue={searchParams.q} />
      </GeneralHeader>

      <div className="border-t-2 border-gray-900">
        {tweetsSearch.map((tweet, index) => (
          <TweetItem tweet={tweet} key={index} />
        ))}
      </div>
    </div>
  );
}
