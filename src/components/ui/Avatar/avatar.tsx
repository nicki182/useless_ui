"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@useless/lib/utils";
export const avatarsMemes = [
  "https://i.imgflip.com/1bij.jpg", // One Does Not Simply
  "https://i.imgflip.com/26am.jpg", // Grumpy Cat
  "https://i.imgflip.com/1otk96.jpg", // Distracted Boyfriend
  "https://i.imgflip.com/1ur9b0.jpg", // Drake Hotline Bling
  "https://i.imgflip.com/1g8my4.jpg", // Expanding Brain
  "https://i.imgflip.com/1ihzfe.jpg", // Mocking Spongebob
  "https://i.imgflip.com/1jwhww.jpg", // Roll Safe Think About It
  "https://i.imgflip.com/1bgw.jpg", // Bad Luck Brian
  "https://i.imgflip.com/1e7ql7.jpg", // Change My Mind
  "https://i.imgflip.com/1otk6t.jpg", // Woman Yelling at a Cat
];
const AvatarProvider = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
AvatarProvider.displayName = "AvatarProvider";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const Avatar = ({
  src,
  fallback,
  alt,
  ...props
}: {
  src?: string;
  alt?: string;
  fallback: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof AvatarProvider>) => {
  return (
    <AvatarProvider {...props}>
      <AvatarImage
        src={avatarsMemes[Math.floor(Math.random() * avatarsMemes.length)]}
        alt={alt || (typeof src === "string" ? src : "")}
      />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarProvider>
  );
};
export { Avatar, AvatarImage, AvatarFallback };
