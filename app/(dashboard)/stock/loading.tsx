import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="px-3">
      <h2 className="font-bold text-2xl py-3 px-4 mt-3 mb-2">
        Inventory Breakdown
      </h2>
      <div className="grid grid-cols-3 lg:grid-cols-7 md:grid-cols-4 gap-4">
        {Array.from({ length: 21 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2 p-2">
            <Skeleton className="w-16 h-16 rounded-md" />
            <Skeleton className="w-20 h-4" />             
          </div>
        ))}
      </div>
      <div className="my-16"></div>
    </div>
  );
}
