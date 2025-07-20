import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { SelectStockItem } from "./select-stock-item";

type Props = {
  params: {
    selectedCategoryId: string;
  };
};

export default async function SelectCategoryItem({ params }: Props) {
  const supabase = await createClient();

  // Get the category name
  const { data: categoryData, error: categoryError } = await supabase
    .from("category")
    .select("category_name")
    .eq("id", params.selectedCategoryId)
    .single();

  const categoryName = categoryData?.category_name || "Unknown Category";

  // Get the items for the category
  const { data: items, error: itemsError } = await supabase
    .from("items")
    .select()
    .eq("category_id", params.selectedCategoryId);

  if (itemsError) {
    throw new Error(itemsError.message);
  }

  return (
    <div>
      <div className="font-bold text-2xl py-3 px-4 mt-3 mb-2">
        {categoryName}
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5 px-2 pt-2 mb-18">
        {items
          ?.filter((item) => item.quantity > 0)
          .map((item) => (
            <SelectStockItem
              key={item.id}
              id={item.id}
              itemName={item.item_name}
              stock={item.quantity}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
}
