import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//for drop down at table
export function isLastItems(payload: number, data_length: number) {
  if (
    payload === data_length ||
    payload === data_length - 1 ||
    payload % 10 === 0 ||
    payload % 9 === 0
  ) {
    return true;
  }
  return false;
}
