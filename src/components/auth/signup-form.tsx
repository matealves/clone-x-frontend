"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SignupForm = () => {
  const router = useRouter();
  const [nameField, setNameField] = useState("");
  const [lastNameField, setLastNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Nome"
        value={nameField}
        onChange={(t) => setNameField(t)}
      />
      <Input
        placeholder="Sobrenome"
        value={lastNameField}
        onChange={(t) => setLastNameField(t)}
      />
      <Input
        placeholder="E-mail"
        value={emailField}
        onChange={(t) => setEmailField(t)}
      />
      <Input
        placeholder="Senha"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        password
      />
      <Input
        placeholder="Confirmar senha"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        password
      />

      <Button label="Criar conta" size={1} onClick={handleEnterButton} />
    </>
  );
};
