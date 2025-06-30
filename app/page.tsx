import FooterSection from "@/components/footer-section";
import { HeaderSection } from "@/components/header-section";
import { HeroSection } from "@/components/hero-section";
import { RecentSales } from "@/components/recent-sales";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
      <HeaderSection />
      <HeroSection/>
      <RecentSales/>
    </>
  );
}
