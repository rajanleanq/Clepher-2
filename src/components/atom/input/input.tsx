import React from "react";
import { cn } from "../../../lib/utils";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    React.RefAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(props.type !== "checkbox" && "input w-full", className)}
        {...props}
      >
        {children}
      </input>
    );
  }
);

Input.displayName = "Input";

export { Input };
