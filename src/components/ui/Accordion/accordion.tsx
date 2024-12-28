"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components";
interface AccordionOption {
  label: string;
  value: string;
  content: React.ReactNode;
  key?: string;
}
export interface AccordionProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>,
    "children"
  > {
  options: AccordionOption[];
}
export function Accordion({ options, ...props }: AccordionProps) {
  const optionContents = options.map((option) => option.content);
  const randomized = optionContents.sort(() => Math.random() - 0.5);
  const randomizedOptions = options.map((option, index) => ({
    ...option,
    content: randomized[index],
  }));
  return (
    <AccordionPrimitive.Root {...props}>
      {randomizedOptions.map((option) => (
        <AccordionItem key={option.key || option.value} value={option.value}>
          <AccordionTrigger>{option.label}</AccordionTrigger>
          <AccordionContent>{option.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionPrimitive.Root>
  );
}
