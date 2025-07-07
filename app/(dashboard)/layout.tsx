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
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <nav className="flex items-center justify-between p-2">
            <SidebarTrigger />
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
