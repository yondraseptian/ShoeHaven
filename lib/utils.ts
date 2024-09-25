import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchma = (type: string) => z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Please enter your password" }),
})