"use client";

import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { user, user2, user3 } from "@/data/user";
import { User } from "@/types/user";
import { tweets } from "@/data/tweet";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathName = usePathname().replace("/", "");
  const isMe = pathName === "mateus";

  const users: User[] = [user2, user3];
  const userClicked = isMe
    ? user
    : users.find((user: User) => user.username === pathName)!;

  const tweetsUser = tweets.filter((tweet) => tweet.user.username === pathName);

  return (
    <div className="">
      <GeneralHeader backHref="/">
        <div className="font-bold text-sm">
          {userClicked.name} {userClicked.lastName}
        </div>
        <div className="text-xs text-gray-500">
          {userClicked.postCount} posts
        </div>
      </GeneralHeader>

      <section className="border-b-2 border-gray-900">
        <div
          className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url(" + userClicked.cover + ")" }}
        ></div>

        <div className="-mt-12 flex justify-between items-end px-6">
          <img
            src={userClicked.avatar}
            alt={userClicked.name}
            className="size-24 rounded-full"
          />

          <div className="w-20">
            {isMe && (
              <Link href={`/${userClicked.username}/edit`}>
                <Button label="Editar perfil" size={3} />
              </Link>
            )}

            {!isMe && <Button label="Seguir" size={3} />}
          </div>
        </div>

        <div className="px-6 mt-4">
          <div className="font-bold text-lg">
            {userClicked.name} {userClicked.lastName}
          </div>

          <div className="text-sm text-gray-500">@{userClicked.username}</div>

          <div className="py-4 text-gray-500">{userClicked.bio}</div>

          {userClicked.link && (
            <div className="flex gap-2 items-center ">
              <FontAwesomeIcon icon={faLink} className="size-5" />
              <Link
                href={userClicked.link}
                target="_blank"
                className="text-sm text-blue-300"
              >
                {userClicked.link}
              </Link>
            </div>
          )}

          <div className="my-5 flex gap-6">
            <div className="text-lg text-gray-500">
              <span className="text-white">99</span> Seguindo
            </div>
            <div className="text-lg text-gray-500">
              <span className="text-white">99</span> Seguidores
            </div>
          </div>
        </div>
      </section>

      <ProfileFeed tweets={tweetsUser} />
    </div>
  );
}
