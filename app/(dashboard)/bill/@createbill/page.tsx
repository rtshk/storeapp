"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BillitemsContext } from "@/lib/context/billitemsContext";
import { createClient } from "@/lib/supabase/client";
import { ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "sonner";


export default function BillItems() {
  
  const billItems = useContext(BillitemsContext);
  if (!billItems) return null;

  const { value, setValue } = billItems;

  const total = value?.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  async function handleGenerateBill() {
    const supabase = createClient();
    const userResult = await supabase.auth.getUser();

    const insertBillResult = await supabase
      .from("bills")
      .insert([{ user_id: userResult.data.user?.id, total_amount: total }])
      .select();
    if (insertBillResult.error) {
      throw new Error(insertBillResult.error.message);
    }
    const billId = insertBillResult?.data?.[0].id;
    const insertBillItemsResult = await supabase.from("bill_items").insert(
      value?.map((valueItem) => ({
        bill_id: billId,
        item_id: valueItem.id,
        item_quantity: valueItem.quantity,
      }))
    );
    if (insertBillItemsResult.error) {
      throw new Error(insertBillItemsResult.error.message);
    }

    await Promise.all(
      (value ?? []).map((item) =>
        supabase.rpc("decrease_stock", {
          item_id_input: item.id,
          quantity_input: item.quantity,
        })
      )
    );

    toast.success("Bill Generated Sucessfully");
    setValue(null);
  }

  return (
    <div className="flex">
      <div className="p-4 mx-auto lg:min-w-md md:min-w-sm">
        <h2 className="text-2xl font-bold mb-4">🧾 Bill</h2>
        <div className="mb-2">
          <Input />
        </div>

        {/* Items Container */}
        <div className="flex flex-col gap-3">
          {value ? (
            <div className="overflow-scroll md:h-[500px] h-[620px]  pt-2 pb-2">
              {value.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-md p-3 shadow-sm bg-white mb-1"
                >
                  <div className="text-base font-medium">{item.itemName}</div>
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>Qty: {item.quantity}</span>
                    <span>Price: ₹{item.price}</span>
                    <span>Total: ₹{item.quantity * item.price}</span>
                  </div>
                </div>
              ))}
              <div className="fixed bottom-16 left-0 w-full bg-white border-t p-4 flex items-center justify-between font-semibold text-lg md:pl-18 md:bottom-0">
                <span>Total: ₹{total}</span>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleGenerateBill}
                >
                  Generate Bill
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center align-middle h-[450px] w-full flex flex-col items-center justify-center font-semibold ">
              <div className="text-gray-500 flex flex-col justify-center items-center">
                <span>
                  <ShoppingCart size="40" className="mb-4" />
                </span>
                Add items to generate bill!
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer Total */}
      </div>
    </div>
  );
}
