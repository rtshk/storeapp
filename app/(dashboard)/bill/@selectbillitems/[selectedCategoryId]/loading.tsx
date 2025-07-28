// app/category/[category]/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      {/* Skeleton for category title */}
      <div className="font-bold text-2xl py-3 px-4 mt-3 mb-2">
        <Skeleton className="h-6 w-32" />
      </div>

      {/* Skeleton grid for stock items */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5 px-2 pt-2 mb-28">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="p-4 flex flex-col items-center justify-center rounded-md bg-gray-50"
          >
            <Skeleton className="bg-gray-200 h-36 w-36 rounded-md" />

            <div className="w-full ml-6 mt-2">
              <Skeleton className="h-4 w-3/4 mb-1" />
              <Skeleton className="h-3 w-1/2 mb-2" />
            </div>

            <div className="w-full flex justify-between items-center px-2 mt-2">
              <Skeleton className="h-4 w-10" />
              <Skeleton className="h-8 w-14 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
