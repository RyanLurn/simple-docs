"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  className,
  children,
  ...props
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "font-semibold",
        pathname.startsWith(`${href}/`) || pathname === href
          ? "text-blue-500"
          : "text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export { NavLink };
