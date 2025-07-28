// app/dashboard/loading.tsx

import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";

export default function Loading() {
  return (
    <>
      <section>
        <div className="rounded-2xl py-5 mx-2">
          <Skeleton className="h-6 w-48 mb-2 px-4" />
          <Skeleton className="h-4 w-60 px-4" />
        </div>

        <div className="bg-gray-50 mx-2 pb-4 rounded-2xl shadow-sm text-center">
          <h2 className="font-bold text-2xl py-3 px-4 mt-3 mb-2">Your Sales</h2>
          <div className="flex justify-between px-4 gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col p-2 px-5 w-full mx-2 bg-gray-100 rounded-2xl"
              >
                <Skeleton className="h-8 w-16 mb-2 mx-auto" />
                <Skeleton className="h-4 w-20 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Hero Section Placeholder */}
        <section>
          <div className="m-2 flex">
            <div className="flex flex-col w-[50%] gap-2">
              {[1, 2].map((_, i) => (
                <div
                  key={i}
                  className="mx-1 bg-gray-100 p-3 mt-2 rounded-md space-y-2"
                >
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32" />
                </div>
              ))}
            </div>

            <div className="h-[144px] w-[50%] bg-gray-100 mx-1 p-3 mt-2 rounded-md relative flex flex-col justify-between">
              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-3 w-32" />
              </div>
              <div className="absolute bottom-3 right-3">
                <button className="bg-gray-300 rounded-full text-white p-2">
                  <Plus className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Skeleton */}
          <div className="hidden md:block px-2">
            <Skeleton className="h-62 w-full rounded-md mt-2" />
          </div>
        </section>

        {/* Today's Sales Skeleton */}
        <div className="rounded-xl border p-4 m-2 mt-4 bg-background shadow-sm mb-17 md:mb-0 md:h-[404px]">
          <Skeleton className="h-6 w-40 mb-4" />


          {/* 4 fake sales rows */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center px-4 py-2 border-b text-sm"
            >
              <Skeleton className="h-4 w-24 rounded-md" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
