import * as React from "react";

import { cn } from "@useless/lib/utils";
import useInput from "./useInput";
// TODO: ADD SOME STYLES FROM GLOBAL STYLES
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, value, onChange, ...props }, ref) => {
    const { value: changedValue, onChange: handleChange } = useInput(
      value,
      onChange,
    );
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        onChange={handleChange}
        value={changedValue}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
