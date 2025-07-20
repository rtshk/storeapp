import { Button } from "@/components/ui/button";

export function StockItem({
  itemName,
  quantity,
  price,
}: {
  itemName: string;
  quantity: number;
  price: number;
}) {
  return (
    <div className="p-4 flex flex-col items-center justify-center rounded-md bg-gray-50">
      <div className="bg-gray-100 h-36 w-36 rounded-md"></div>
      <p className="text-start w-full font-semibold ml-6">{itemName}</p>
      <p className="text-start w-full text-xs ml-6 py-1" >stock : {quantity}</p>
      <div className="w-full flex justify-between">
        <p className="py-2 px-2 font-bold">₹{price}</p>
        <Button className="my-1" variant="outline" size="sm">
          Edit
        </Button>
      </div>
    </div>
  );
}
