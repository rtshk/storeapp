import { AppSidebar } from "@/components/client-components/app-sidebar";
import FooterSection from "@/components/client-components/footer-section";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { BillitemsProvider } from "@/lib/context/billitemsContext";
import { Bell } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute w-full">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full max-h-screen">
          <nav className="w-full sticky top-0 flex items-center justify-between h-12 p-2 backdrop-blur-xs shadow-md">
            <div>
              <SidebarTrigger />
            </div>
            <div className="flex items-center">
              <Bell className="mx-3" />
            </div>
          </nav>
          <BillitemsProvider>{children}</BillitemsProvider>
        </main>
      </SidebarProvider>
      <FooterSection />
    </div>
  );
}
