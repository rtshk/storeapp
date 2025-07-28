// app/(billing)/bill-view/loading.tsx

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-4 mx-auto lg:min-w-md md:min-w-sm w-full">
      <h2 className="text-2xl font-bold mb-4">🧾 Bill</h2>

      {/* Input field */}
      <div className="mb-4">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* Item cards */}
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

      {/* Sticky footer */}
      <div className="fixed bottom-16 left-0 w-full bg-white border-t p-4 flex items-center justify-between font-semibold text-lg md:pl-18 md:bottom-0">
        <Skeleton className="w-28 h-6" />
        <Skeleton className="w-36 h-10 rounded-md" />
      </div>
    </div>
  );
}
