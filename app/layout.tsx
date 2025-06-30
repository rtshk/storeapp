import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Search, Bell } from "lucide-react";
import FooterSection from "@/components/footer-section";

export const metadata: Metadata = {
  title: "Store App",
  description: "Store App for shopkeepers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {" "}
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <nav className="flex items-center justify-between p-2">
              <SidebarTrigger />
              <div className="flex items-center">
                <Bell className="mx-3" />
              </div>
            </nav>
            {children}
          </main>
        </SidebarProvider>
        <FooterSection/>
      </body>
    </html>
  );
}
