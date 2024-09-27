"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { HomeMenu } from "./home-menu";

export const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <header className="flex justify-between p-6 lg:px-20  lg:pt-4 lg:pb-1 border-b-2 border-gray-900">
        <div className="lg:hidden">
          <Logo size={24} />
        </div>
        <div className="hidden lg:block text-md underline decoration-blue-500 decoration-2 underline-offset-8">Para você</div>
        <div className="hidden lg:block text-md text-gray-500">Seguindo</div>

        <div
          onClick={() => setShowMenu(true)}
          className="cursor-pointer lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} className="size-6" />
        </div>

        {showMenu && <HomeMenu closeAction={() => setShowMenu(false)} />}
      </header>
    </div>
  );
}
