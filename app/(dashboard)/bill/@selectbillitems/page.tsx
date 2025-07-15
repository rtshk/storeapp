'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { SelectStockCategoryItem } from './select-category-item';

export default function SelectCategoryBill() {
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const supabase = createClient(); // use browser version
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('category')
        .select()
        .eq('user_id', user.id);

      if (!error && data) {
        setCategoryData(data);
      }

      setLoading(false);
    };

    fetchCategories();
  }, []);

  if (loading) return <p className="p-4">Loading categories...</p>;

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
      <div className="my-16"></div>
    </div>
  );
}
