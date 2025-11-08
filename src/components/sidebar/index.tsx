import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Sidebar({ className, ...props }: ComponentProps<"aside">) {
  return (
    <aside className={cn("h-full w-1/5", className)} {...props}>
      <h1>Simple Docs</h1>
    </aside>
  );
}

export { Sidebar };
