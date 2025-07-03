"use client"
import { Box, House, Plus, ChartColumn, Search } from "lucide-react";
import Link from "next/link";

const FooterSection = () => {
  
  

  return (
    <section className="flex items-center justify-between w-full fixed z-50 bottom-0 bg-gray-100 rounded-t-md h-16 px-5"  >
      <Link href="/"><button><House /></button></Link>
      <Link href="/stock"><button ><Box /></button></Link>
      <Link href="/"><button className="bg-gray-900 p-3 rounded-full"><Plus className="text-gray-100"/></button></Link>
      <Link href="/"><button><ChartColumn /></button></Link>
      <button ><Search/></button>
    </section>
  );
};

export default FooterSection;
