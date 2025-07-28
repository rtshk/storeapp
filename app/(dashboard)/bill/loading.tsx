// app/your-parallel-segment/loading.tsx

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Loading() {
  return (
    <div className="flex w-full h-full">
      {/* Left Section: Category Grid */}
      <div className="px-3 w-full">
        <h2 className="font-bold text-2xl py-3 px-4 mt-3 mb-2">
          Add items to bill
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-7 md:grid-cols-4 gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-2">
              <Skeleton className="w-16 h-16 rounded-full" />
              <Skeleton className="w-20 h-4" />
            </div>
          ))}
        </div>
        <div className="my-16" />
      </div>

      {/* Right Section: Bill View */}
      <div className="p-4 mx-auto lg:min-w-md md:min-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">🧾 Bill</h2>

        {/* Input Field Skeleton */}
        <div className="mb-4">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Items Skeleton List */}
        <div className="overflow-scroll md:h-[500px] h-[620px] pt-2 pb-2 flex flex-col gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="border rounded-md p-3 shadow-sm bg-white mb-1"
            >
              <Skeleton className="w-1/2 h-4 mb-2" />
              <div className="flex justify-between gap-3">
                <Skeleton className="w-16 h-3" />
                <Skeleton className="w-16 h-3" />
                <Skeleton className="w-20 h-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Footer Skeleton */}
        <div className="fixed bottom-16 left-0 w-full bg-white border-t p-4 flex items-center justify-between font-semibold text-lg md:pl-18 md:bottom-0">
          <Skeleton className="w-28 h-6" />
          <Skeleton className="w-36 h-10 rounded-md" />
        </div>
      </div>
    </div>
  );
}
