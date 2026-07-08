"use server";

import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";

export type RegisterState = {
  error?: string;
};

/**
 * Creates a new user with a hashed password and immediately signs them in.
 */
export async function registerAction(
  _prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    !name.trim() ||
    !email.trim() ||
    password.length < 8
  ) {
    return { error: "Preencha todos os campos. A senha deve ter ao menos 8 caracteres." };
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return { error: "Já existe uma conta com este email." };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: { name, email, password: passwordHash },
  });

  try {
    await signIn("credentials", { email, password, redirectTo: "/perfil" });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Conta criada, mas não foi possível entrar automaticamente." };
    }
    throw error;
  }

  return {};
}
