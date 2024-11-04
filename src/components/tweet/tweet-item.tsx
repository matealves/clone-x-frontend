"use client";

import { Tweet } from "@/types/tweet";
import { formatRelativeTime } from "@/utils/format-relative";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faHeart as faHeartFilled,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

type Props = {
  tweet: Tweet;
  hideComments?: boolean;
};

export const TweetItem = ({ tweet, hideComments }: Props) => {
  const [liked, setLiked] = useState(tweet.liked);

  const handleLikeButton = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex gap-2 p-6 border-b-2 border-gray-900">
      <div>
        <Link href={`/${tweet.user.username}`}>
          <img
            src={tweet.user.avatar}
            alt={tweet.user.name}
            className="size-9 rounded-3xl"
          />
        </Link>
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-2">
          <div className="font-bold text-sm">
            <Link href={`/${tweet.user.username}`} className="">
              {tweet.user.name} {tweet.user.lastName}
            </Link>
          </div>

          <div className="text-xs text-gray-500">
            @{tweet.user.username} - {formatRelativeTime(tweet.date)}
          </div>
        </div>
        <Link href={`/tweet/${tweet.id}`}>
          <div className="py-2 text-sm text-gray-300">{tweet.body}</div>
          {tweet.image && (
            <div className="w-full">
              <img src={tweet.image} alt="" className="w-full rounded-2xl" />
            </div>
          )}
        </Link>
        <div className="flex mt-3 text-gray-500 justify-between px-16">
          {!hideComments && (
            <div className="">
              <Link href={`/tweet/${tweet.id}`}>
                <div className="inline-flex items-center gap-2 cursor-pointer">
                  <FontAwesomeIcon icon={faComment} className="size-5" />
                  <div className="text-sm">{tweet.commentCount}</div>
                </div>
              </Link>
            </div>
          )}
          <div className="">
            <div className="inline-flex items-center gap-2 cursor-pointer">
              <FontAwesomeIcon icon={faRetweet} className="size-5" />
              <div className="text-sm">{tweet.retweetCount}</div>
            </div>
          </div>

          <div className="">
            <div
              onClick={handleLikeButton}
              className={`inline-flex items-center gap-2 cursor-pointer ${
                liked && "text-red-400"
              }`}
            >
              <FontAwesomeIcon
                icon={liked ? faHeartFilled : faHeart}
                className="size-5"
              />
              <div className="text-sm">{tweet.likeCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
