import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertTitleToSlug(title: string) {
  // remove any non-word chars and replace spaces with dash
  const sanitizedTitle = title.replace(/\W+/g, "-").toLowerCase();

  const uniqueSlug = `${sanitizedTitle}-${generateRandomString()}`;

  return uniqueSlug;
}

export function generateRandomString() {
  const randomString = Math.random().toString(36).substring(2, 5);
  return randomString;
}
