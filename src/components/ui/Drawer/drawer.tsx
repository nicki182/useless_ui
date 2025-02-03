"use client";

import * as React from "react";
import {
  DrawerRoot,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components";
export type DirectionType = "left" | "right" | "top";
export interface DrawerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof DrawerRoot>, "direction"> {
  direction: DirectionType;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  trigger: React.ReactNode;
  close?: React.ReactNode;
  fadeFromIndex?: number;
}
export const Drawer = ({
  direction,
  title,
  description,
  footer,
  trigger,
  close,
  ...props
}: DrawerProps) => {
  const getDirection = (dir: "left" | "right" | "top") => {
    const dirToDrawer: { [key in DirectionType]: "left" | "right" | "bottom" } =
      {
        left: "right",
        right: "left",
        top: "bottom",
      };
    return dirToDrawer[dir];
  };
  return (
    <DrawerRoot
      direction={getDirection(direction)}
      {...props}
      fadeFromIndex={undefined}
    >
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent
        className={
          direction === "top"
            ? undefined
            : `bottom-2 ${direction}-auto ${getDirection(direction)}-2 top-2 mt-0 w-[310px] overflow-hidden rounded-[10px]`
        }
      >
        {title ||
          (description && (
            <DrawerHeader>
              {title && <DrawerTitle>{title}</DrawerTitle>}
              {description && (
                <DrawerDescription>{description}</DrawerDescription>
              )}
            </DrawerHeader>
          ))}
        <DrawerFooter>
          {footer}
          {close && <DrawerClose>Cancel</DrawerClose>}
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};
