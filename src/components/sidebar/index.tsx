import type { ComponentProps } from "react";
import { NavLink } from "@/components/nav-link";
import { cn } from "@/lib/utils";

function Sidebar({ className, ...props }: ComponentProps<"aside">) {
  return (
    <aside
      className={cn("h-full w-1/6 p-6 flex flex-col gap-y-2", className)}
      {...props}
    >
      <h2 className="text-lg font-semibold mt-4 mb-2">Getting Started</h2>
      <NavLink href="/docs/getting-started/features">Features</NavLink>
      <NavLink href="/docs/getting-started/installation">Installation</NavLink>
      <h2 className="text-lg font-semibold mt-4 mb-2">Guides</h2>
      <NavLink href="/docs/guides/add-page">Add a page</NavLink>
      <NavLink href="/docs/guides/edit-page">Edit a page</NavLink>
    </aside>
  );
}

export { Sidebar };
