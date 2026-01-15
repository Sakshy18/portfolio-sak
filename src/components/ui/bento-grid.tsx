import * as React from "react";
import { cn } from "../../lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-12 auto-rows-[160px] gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
    
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}
