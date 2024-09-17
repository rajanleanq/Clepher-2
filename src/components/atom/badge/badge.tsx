import React from "react";
import { cn } from "../../../lib/utils";
import { X } from "lucide-react";

export default function Badge({
  className,
  children,
  handleClose
}: {
  className?: string;
  children: React.ReactNode;
  handleClose: () => void
}) {
  return (
    <div className={cn("badge bg-blue-50 border-blue-800 text-14 font-medium py-4", className)}>
      {children}
      <X className="w-4 cursor-pointer hover:text-yellow-500 ease-in-out duration-100 transition-all" onClick={handleClose} />
    </div>
  );
}
