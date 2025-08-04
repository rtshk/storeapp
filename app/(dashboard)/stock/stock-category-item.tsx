"use client"
import Image from "next/image";
import Link from "next/link";


export function StockCategoryItem({
  id,
  categoryName,
}: {
  id: string;
  categoryName: string;
}) {


  return (
    <Link href={`/stock/${id}`}>
      <div className="p-2 flex flex-col justify-center items-center ">
        <div className="bg-gray-100 rounded-2xl px-1 flex justify-center items-center h-18 w-24 md:w-32">
        <p className="text-xs text-center">{categoryName}</p>
        </div>
      </div>
    </Link>
  );
}
