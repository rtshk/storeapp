import { createClient } from "@/lib/supabase/server";
import { StockCategoryItem } from "./stock-category-item";
import StockCategoryDialog from "./stock-category-dialog";


export default async function StockCategory() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const categoryResult = await supabase
    .from("category")
    .select()
    .eq("user_id", user?.id);

  return (
    <div className="px-3">
      <h2 className="font-bold text-2xl py-3 px-4 mt-3 mb-2">
        Inventory Breakdown
      </h2>
      <div className="grid grid-cols-3 lg:grid-cols-7 md:grid-cols-4">
        {categoryResult.data?.map((dataItem) => {
          return (
            <StockCategoryItem
              key={dataItem.id}
              id={dataItem.id}
              categoryName={dataItem.category_name}
              categoryImageURL={dataItem.category_img_url}
            />
          );
        })}
      </div>
      <StockCategoryDialog/>
    </div>
  );
}
