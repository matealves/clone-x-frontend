"use client";

import { TweetItem } from "@/components/tweet/tweet-item";
import { TweetPost } from "@/components/tweet/tweet-post";
import { GeneralHeader } from "@/components/ui/general-header";
import { tweets } from "@/data/tweet";
import { Tweet } from "@/types/tweet";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathName = usePathname().replace("/tweet/", "");
  const tweet = tweets.find((tweet: Tweet) => tweet.id === Number(pathName))!;

  return (
    <div>
      <GeneralHeader>
        <div className="font-bold">Voltar</div>
      </GeneralHeader>

      <div className="border-t-2 border-gray-900">
        <TweetItem tweet={tweet} />
        <div className="border-y-8 border-gray-900">
          <TweetPost placeholder="Escrever um comentário" />
        </div>

        {/* inserir respostas do tweet clicado... */}
      </div>
    </div>
  );
}
