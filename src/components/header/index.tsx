import type { ComponentProps } from "react";
import { Navbar } from "@/components/header/navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

function Header({ className, ...props }: ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "sticky flex top-0 w-full bg-background items-center justify-between px-4 py-2",
        className
      )}
      {...props}
    >
      <h1 className="text-xl font-bold">Simple Docs</h1>
      <Navbar />
      <ModeToggle />
    </header>
  );
}

export { Header };
