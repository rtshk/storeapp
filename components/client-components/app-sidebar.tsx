"use client";

import {
  Box,
  ChartColumn,
  ClipboardList,
  Home,
  LogOut,
  X,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Stock",
    url: "/stock",
    icon: Box,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartColumn,
  },
  {
    title: "Billing",
    url: "/bill",
    icon: ClipboardList,
  },
];

export function AppSidebar() {
  const router = useRouter();
  const { isMobile, setOpenMobile, setOpen } = useSidebar();

  async function handleLogout() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
    router.push("/auth/login");
  }

  function handleCloseSidebarMobile() {
    if (isMobile) {
      setOpenMobile(false);
    }
  }

  function handleCloseSidebarDesktop() {
    if (!isMobile) {
      setOpen(false); // this is what replaces setCollapsed
    }
  }

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarContent>
        <div className="flex items-center justify-between px-4 pt-4">
          <SidebarGroupLabel className="text-md">Store Saathi</SidebarGroupLabel>

          {/* Only show cross button on desktop */}
          {!isMobile && (
            <Button
              size="icon"
              variant="ghost"
              onClick={handleCloseSidebarDesktop}
              className="text-muted-foreground hover:text-black"
            >
              <X className="w-5 h-5" />
            </Button>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="p-2 m-2 transition-all active:scale-95 rounded-md focus:bg-gray-200"
                    onClick={handleCloseSidebarMobile}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={handleLogout}
                  className="p-2 m-2 text-white bg-gray-900 rounded-md"
                >
                  <LogOut />
                  Logout
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
