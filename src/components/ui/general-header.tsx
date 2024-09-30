"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  backHref?: string; // Permitir backHref opcional
};

export const GeneralHeader = ({ children, backHref }: Props) => {
  const router = useRouter();

  return (
    <header className="flex gap-4 items-center p-6">
      {backHref ? (
        <Link
          href={backHref}
          className="flex justify-center items-center border-2 border-gray-500 size-10 rounded-full"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="size-4" />
        </Link>
      ) : (
        <button
          onClick={() => router.back()}
          className="flex justify-center items-center border-2 border-gray-500 size-10 rounded-full"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="size-4" />
        </button>
      )}

      <div className="flex-1">{children}</div>
    </header>
  );
};
