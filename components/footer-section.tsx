import { Box, House, Plus, ChartColumn, Search } from "lucide-react";

const FooterSection = () => {
  return (
    <section className="flex items-center justify-between w-full fixed z-50 bottom-0 bg-gray-100 rounded-t-md h-16 px-5" >
      <button><House /></button>
      <button><Box /></button>
      <button className="bg-gray-900 p-3 rounded-full"><Plus className="text-gray-100"/></button>
      <button><ChartColumn /></button>
      <button><Search/></button>
    </section>
  );
};

export default FooterSection;
