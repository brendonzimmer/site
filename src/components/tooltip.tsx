"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/utils";
import React from "react";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export const Tooltip = ({
  trigger,
  content,
}: {
  trigger: React.ReactNode;
  content: React.ReactNode;
}) => (
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
      {/* <TooltipContent className="hidden sm:block">{content}</TooltipContent> */}
    </TooltipRoot>
  </TooltipProvider>
);
