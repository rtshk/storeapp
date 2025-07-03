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

interface Sale {
  item: string;
  quantity: number;
  amount: string;
}

const sales: Sale[] = [

];

export function RecentSales() {
  return (
    <div className="rounded-xl border p-4 m-2 mt-4 bg-background shadow-sm mb-17">
      <h2 className="text-lg font-semibold mb-2">Recent Sales</h2>
    {sales.length != 0?(      <Table>
        <TableCaption>Last few recorded sales from your shop.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Item</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sales.map((sale, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{sale.item}</TableCell>
              <TableCell>{sale.quantity}</TableCell>
              <TableCell className="text-right">{sale.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>) : ( <div className="w-full flex justify-center"> <p className="text center font-semibold text-sm">No recent sales</p></div> )}
    </div>
  );
}
