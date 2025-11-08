import { Sidebar } from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="flex size-full">
      <Sidebar />
      <Separator orientation="vertical" />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
