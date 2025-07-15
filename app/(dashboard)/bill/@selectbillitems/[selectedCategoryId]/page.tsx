"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { SelectStockItem } from "./select-stock-item";

type item = {
  id: string;
  item_name: string;
  quantity: number;
  image_url: string;
  price: number;
  user_id: string;
  created_at: string;
  category_id: string;
};

export default function SelectCategoryItem() {
  const params = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [items, setItems] = useState<item[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("category")
        .select("category_name")
        .eq("id", params.selectedCategoryId)
        .single();

      if (data) {
        setCategoryName(data.category_name);
      } else {
        console.error("Error fetching category:", error);
      }
      const itemsResult = await supabase
        .from("items")
        .select()
        .eq("category_id", params.selectedCategoryId);
      if (itemsResult.error) {
        throw new Error(itemsResult.error.message);
      }
      setItems(itemsResult?.data);
    };

    fetchCategory();
  }, [params.selectedCategoryId]);

  return (
    <div>
      <div className="font-bold text-2xl py-3 px-4 mt-3 mb-2">
        {categoryName}
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5 px-2 pt-2 mb-18">
        {items.map((item) =>
          item.quantity > 0 ? (
            <SelectStockItem
              key={item.id}
              id={item.id}
              itemName={item.item_name}
              stock={item.quantity}
              price={item.price}
            />
          ) : (
            []
          )
        )}
      </div>
    </div>
  );
}
