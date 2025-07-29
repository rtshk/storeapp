"use client";
import { useContext, useState } from "react";
import { BillitemsContext } from "@/lib/context/billitemsContext";
import { toast } from "sonner";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SelectStockItem({
  id,
  itemName,
  stock,
  price,
}: {
  id: string;
  itemName: string;
  stock: number;
  price: number;
}) {
  const billItems = useContext(BillitemsContext);
  const [quantity, setQuantity] = useState<number>(1);
  const [isDisable, setIsDisable] = useState<boolean>(false);

  function handleAddBillItem() {
    if (!billItems) return;
    const { value, setValue } = billItems;
    setValue([...(value || []), { id, itemName, quantity, price }]);
    toast.success("item has been added to bill");
    setQuantity(1);
    setIsDisable((prev) => !prev);
  }

  return (
    <div className="p-4 flex flex-col items-center justify-center rounded-md bg-gray-50 min-w-40">
      <div className="bg-gray-100 h-36 w-36 rounded-md"></div>
      <p className="text-start w-full font-semibold ml-6">{itemName}</p>
      <p className="py-1 px-3 text-xs font-semibold text-start w-full">
        ₹{price}
      </p>
      <div className="w-full flex justify-between">
        <div className="mx-3">
          <div className="flex">
            <p className="font-semibold text-sm mt-0.5">Qty</p>
            <input
              value={quantity}
              onChange={(e) => {
                setQuantity(Number(e.target.value));
              }}
              className="w-8 px-1 text-xs font-medium bg-gray-200 rounded-md ml-1 text-center"
            />
          </div>
          <div className="mt-1">
            <button
              onClick={() => {
                setQuantity((prev) => Math.max(0, prev - 1));
              }}
              className="border border-[#862716] bg-[#fff9f6] text-[#862716] w-7 rounded-md mr-1 active:scale-90 transition-all"
              disabled={isDisable}
            >
              -
            </button>
            <button
              onClick={() => {
                setQuantity((prev) => {
                  if(prev+1>stock){
                    toast.warning("Item not in stock")
                  }
                  return Math.min(prev + 1, stock)
                });
              }}
              className="border border-[#328616] bg-[#F6FFF9] text-[#328616] w-7 rounded-md active:scale-90 transition-all"
              disabled={isDisable}
            >
              +
            </button>
          </div>
        </div>
        <Button
          className="my-3"
          variant="green"
          size="sm"
          onClick={handleAddBillItem}
          disabled={isDisable}
        >
          {isDisable ? <Check /> : "Add"}
        </Button>
      </div>
    </div>
  );
}
