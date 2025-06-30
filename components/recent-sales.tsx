import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const sales = [
  {
    item: "Toothpaste",
    status: "Completed",
    quantity: "15 pcs",
    amount: "₹375.00",
  },
  {
    item: "Cooking Oil",
    status: "Completed",
    quantity: "5 litres",
    amount: "₹750.00",
  },
  {
    item: "Chocolates",
    status: "Pending",
    quantity: "20 pcs",
    amount: "₹500.00",
  },
  {
    item: "Wheat Flour",
    status: "Completed",
    quantity: "10 kg",
    amount: "₹420.00",
  },
  {
    item: "Rice Bags",
    status: "Completed",
    quantity: "3 bags",
    amount: "₹1,200.00",
  },
  {
    item: "Face Masks",
    status: "Pending",
    quantity: "30 pcs",
    amount: "₹300.00",
  },


 
];

export function RecentSales() {
  return (
    <div className="rounded-xl border p-4 m-2 mt-4 bg-background shadow-sm mb-17">
      <h2 className="text-lg font-semibold mb-2">Recent Sales</h2>
      <Table>
        <TableCaption>Last few recorded sales from your shop.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Item</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sales.map((sale, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{sale.item}</TableCell>
              <TableCell>{sale.status}</TableCell>
              <TableCell>{sale.quantity}</TableCell>
              <TableCell className="text-right">{sale.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </div>
  );
}
