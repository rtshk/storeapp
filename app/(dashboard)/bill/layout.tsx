export default function BillLayout({
  createbill,
  selectbillitems,
}: {
  createbill: React.ReactNode;
  selectbillitems: React.ReactNode;
}) {
  return (
    <div className="flex justify-between ">
      <div className="flex-1">{selectbillitems}</div>
      <div>{createbill}</div>
    </div>
  );
}
