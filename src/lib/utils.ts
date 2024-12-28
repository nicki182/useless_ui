import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { screen } from "@testing-library/react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isAnyTextInTheDocument(texts: string[]) {
  return texts.some((text) => {
    try {
      return screen.getByText(text) !== null;
    } catch {
      return false;
    }
  });
}
