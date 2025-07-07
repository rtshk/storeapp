"use client";
import {
  Box,
  ChartColumn,
  ClipboardList,
  Home,
  LogOut,
  Plus,
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
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
    url: "/",
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
  const {isMobile, setOpenMobile} = useSidebar()
  async function handleLogout() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
    router.push("/auth/login");
  }
  function handleCloseSidebarMobile(){
    if(isMobile){
      setOpenMobile(false);
    }
  }

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
        <SidebarGroupLabel className="text-md py-6">Store Saathi</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-2 m-2 transition-all active:scale-95 rounded-md focus:bg-gray-200"
                  onClick={handleCloseSidebarMobile}>
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
