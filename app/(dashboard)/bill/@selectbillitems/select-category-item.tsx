import Image from "next/image";
import Link from "next/link";


export function SelectStockCategoryItem({
  id,
  categoryName,
  categoryImageURL,
}: {
  id: string;
  categoryName: string;
  categoryImageURL: string;
}) {


  return (
    <Link href={`/bill/${id}`}>
      <div className="p-2 flex flex-col justify-center items-center ">
        <div className="bg-gray-100 rounded-2xl px-1 flex justify-center items-center h-18 w-18">
          <Image src={categoryImageURL} alt="vegitable-image" width={100} height={100} />
        </div>
        <p className="text-xs text-center">{categoryName}</p>
      </div>
    </Link>
  );
}
