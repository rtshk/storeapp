import React from "react";

export default function BillLayout({
  createbill,
  selectbillitems,
}: {
  createbill: React.ReactNode;
  selectbillitems: React.ReactNode;
}) {
  return (
    <div className="md:flex md:justify-between  ">
      <div className="flex-1">{selectbillitems}</div>
      <div className="hidden md:block">{createbill}</div>
    </div>
  );
}
