import type { ComponentProps } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

function Header({ className, ...props }: ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "sticky flex top-0 w-full items-center justify-between px-4 py-2",
        className
      )}
      {...props}
    >
      <h1 className="text-xl font-bold">Simple Docs</h1>
      <ModeToggle />
    </header>
  );
}

export { Header };
