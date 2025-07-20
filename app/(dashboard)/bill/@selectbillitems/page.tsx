// app/(your-path)/select-category/page.tsx or any Server Component

import { SelectStockCategoryItem } from './select-category-item';
import { createClient } from '@/lib/supabase/server';

export default async function SelectCategoryBill() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <p className="p-4">You must be signed in to view categories.</p>;
  }

  const { data: categoryData, error } = await supabase
    .from('category')
    .select()
    .eq('user_id', user.id);

  if (error) {
    return <p className="p-4">Error fetching categories.</p>;
  }

  return (
    <div className="px-3">
      <h2 className="font-bold text-2xl py-3 px-4 mt-3 mb-2">
        Add items to bill
      </h2>
      <div className="grid grid-cols-3 lg:grid-cols-7 md:grid-cols-4">
        {categoryData.map((dataItem) => (
          <SelectStockCategoryItem
            key={dataItem.id}
            id={dataItem.id}
            categoryName={dataItem.category_name}
            categoryImageURL={dataItem.category_img_url}
          />
        ))}
      </div>
      <div className="my-16" />
    </div>
  );
}
