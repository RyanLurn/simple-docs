import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="size-full flex flex-col h-dvh">
      <Header />
      <Separator />
      <div className="flex flex-1 w-full">
        <Sidebar />
        <Separator orientation="vertical" />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
