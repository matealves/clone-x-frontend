"use client";

import { User } from "@/types/user";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

type Props = {
  user: User;
};

export const RecommendationItem = ({ user }: Props) => {
  const [following, setFollowing] = useState(false);

  const handleFollowButton = () => {
    setFollowing(true);
  };

  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`/${user.username}`}>
          <img src={user.avatar} alt={user.name} className="size-full" />
        </Link>
      </div>

      <div className="flex-1 overflow-hidden text-sm">
        <Link href={`/${user.username}`} className="block truncate">
          {user.name} {user.lastName}
        </Link>

        <div className="truncate text-xs text-gray-500">@{user.username}</div>
      </div>

      <div className="pl-2 w-20">
        {!following && (
          <Button label="Seguir" onClick={handleFollowButton} size={3} />
        )}
      </div>
    </div>
  );
};
