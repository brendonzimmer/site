import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function If(
  props:
    | {
        this: boolean;
        then: React.ReactNode;
        else?: React.ReactNode;
      }
    | {
        this: boolean;
        children: React.ReactNode;
      },
) {
  if ("then" in props) {
    if (props.this) return props.then;
    return props.else ?? null;
  }

  if (props.this) return props.children;
  return null;
}
