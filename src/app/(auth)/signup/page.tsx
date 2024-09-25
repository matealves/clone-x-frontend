import Link from "next/link";
import { Logo } from "@/components/ui/logo";

import { SignupForm } from "@/components/auth/signup-form";

export default function Page() {
  return (
    <div className="max-w-lg mx-auto mt-12 px-6">
      <Logo size={46} />
      <h1 className="mt-10 text-xl">Crie a sua conta</h1>
      <div className="mt-10 mb-14 flex flex-col gap-6">
        <SignupForm />
      </div>

      <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
        <div className="text-gray-600 text-sm">Já tem uma conta?</div>

        <Link href={"/signin"} className="hover:underline text-sm">
          Entrar no Z
        </Link>
      </div>
    </div>
  );
}
