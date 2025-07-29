import { createClient } from "@/lib/supabase/server"; // server-side Supabase client
import { StockItem } from "./stock-items";
import { StockDialog } from "./stock-dialog";

type Props = {
  params:  Promise<{
    category: string;
  }>;
};

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

export default async function Category({ params }: Props) {
  const supabase = await createClient();
  const {category} = await params;
  // Fetch category name
  const { data: categoryData, error: categoryError } = await supabase
    .from("category")
    .select("category_name")
    .eq("id", category)
    .single();

  if (categoryError) {
    console.error("Error fetching category:", categoryError.message);
    return <div className="text-red-600 p-4">Failed to load category.</div>;
  }

  // Fetch items
  const { data: items, error: itemsError } = await supabase
    .from("items")
    .select()
    .eq("category_id", category);

  if (itemsError) {
    console.error("Error fetching items:", itemsError.message);
    return <div className="text-red-600 p-4">Failed to load items.</div>;
  }

  return (
    <div>
      <div className="font-bold text-2xl py-3 px-4 mt-3 mb-2">
        {categoryData?.category_name}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 px-2 pt-2 mb-28">
        {items?.map((item: item) => (
          <StockItem
            key={item.id}
            itemName={item.item_name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </div>
        <StockDialog params={params}/>
    </div>
  );
}
