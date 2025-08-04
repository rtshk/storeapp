"use client";
import { Box, House, Plus, ChartColumn, ClipboardList } from "lucide-react";
import Link from "next/link";

const navItems = [
  { icon: <House />, href: "/" },
  { icon: <Box />, href: "/stock" },
  { icon: <Plus size={46} className="bg-gray-900 p-1 rounded-full text-white" />, href: "/bill" },
  { icon: <ChartColumn />, href: "/analytics" },
  { icon: <ClipboardList />, href: "/createBillMobile" },
];

const FooterSection = () => {
  return (
    <section className="w-full fixed z-50 bottom-0 bg-[#FAFAFA] md:hidden">
      <div className="fixed bottom-16 w-full h-2 bg-gradient-to-t from-black/5 to-transparent pointer-events-none z-10" />
      <div className="flex items-center justify-between rounded-t-md h-16 px-5">
        {navItems.map(({ icon, href }, index) => (
          <Link key={index} href={href}>
            <button
              className="p-3 transition-all active:scale-95  focus:bg-gray-200 rounded-md"
            >
              {icon}
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FooterSection;
