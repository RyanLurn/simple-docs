import { NavLink } from "@/components/header/nav-link";

function Navbar() {
  return (
    <nav className="flex items-center gap-x-4">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/docs">Docs</NavLink>
      <NavLink href="/updates">Updates</NavLink>
    </nav>
  );
}

export { Navbar };
