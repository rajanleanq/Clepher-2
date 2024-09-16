import React from "react";
import { cn } from "../../../lib/utils";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "text-green-500 font-nunito text-14 ease-in-out duration-100 transition-all px-4 py-2 rounded-lg",
          className,
          disabled && "bg-gray-300 text-gray-500 cursor-not-allowed"
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
