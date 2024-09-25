"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <input
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={(e) => setEmailField(e.target.value)}
      />

      <FontAwesomeIcon icon={faHeart} className="size-8" />

      <input
        type="password"
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(e) => setPasswordField(e.target.value)}
      />

      <button onClick={handleEnterButton}>Entrar</button>
    </>
  );
};
