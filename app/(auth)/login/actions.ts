"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";

export type LoginState = {
  error?: string;
};

export async function loginAction(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Preencha email e senha." };
  }

  try {
    await signIn("credentials", { email, password, redirectTo: "/perfil" });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Email ou senha inválidos." };
    }
    throw error;
  }

  return {};
}
