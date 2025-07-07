import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Plus } from "lucide-react";
import { CarouselDemo } from "./carouselComponent";

export default async function Dashboard() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const userQuery = await supabase
    .from("users")
    .select("username")
    .eq("id", user.id)
    .single();

  const username = userQuery.data?.username ?? "";

  const pad = (n: number) => (n < 10 ? "0" + n : n);

  const currentTime = new Date();

  const year = currentTime.getFullYear();

  const month = pad(Number(currentTime.getMonth()) + 1);

  const date = pad(currentTime.getDate());

  const hours = pad(currentTime.getHours());

  const minutes = pad(currentTime.getMinutes());

  const getRecentBillsResult = await supabase
    .from("bills")
    .select()
    .gt("created_at", `${year}-${month}-${date}T05:30Z`);

  function inIST(timeStamp: string) {
    const timeInUTC = timeStamp + "Z";
    const timeStampInIST = new Date(timeInUTC).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    const time = new Date(timeStampInIST);
    const hours = time.getHours();
    const minutes = time.getMinutes();

    return `${pad(hours)} : ${pad(minutes)}`;
  }

  const sales: { created_at: string; total_amount: number }[] =
    getRecentBillsResult?.data || [];

  return (
    <>
      {/* HeaderSection inlined */}
      <section>
        <div className="rounded-2xl py-3 mx-2">
          <h2 className="font-bold text-2xl px-4">Good evening {username}!</h2>
          <p className="font-bold px-4">Here's today’s performance summary</p>
        </div>
        <div className="bg-gray-50 mx-2 pb-4 rounded-2xl shadow-sm text-center">
          <h2 className="font-bold text-2xl py-3 px-4 mt-3 mb-2">Your Sales</h2>
          <div className="flex justify-between px-4">
            <div className="flex flex-col p-2 px-5 w-full mx-2 bg-gray-100 rounded-2xl">
              <p className="font-semibold text-3xl">
                {getRecentBillsResult.data?.length}
              </p>
              <h2 className="font-semibold text-sm mb-2">Sales</h2>
            </div>
            <div className="flex flex-col p-2 px-5 w-full mx-2 bg-gray-100 rounded-2xl">
              <p className="font-semibold text-3xl">0</p>
              <h2 className="font-semibold text-sm mb-2">Profit</h2>
            </div>
            <div className="flex flex-col p-2 px-5 bg-gray-100 mx-2 w-full rounded-2xl">
              <p className="font-semibold text-3xl">0</p>
              <h2 className="font-semibold text-sm mb-2">Customers</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* HeroSection inlined */}
        <section >
          <div className="m-2 flex">
            <div className="flex flex-col w-[50%]">
              <div className="mx-1 bg-gray-100 p-2 mt-2 rounded-md">
                <h3 className="font-semibold">History</h3>
                <p className="text-xs mb-3">Check your history</p>
              </div>
              <div className="mx-1 bg-gray-100 p-2 mt-2 rounded-md">
                <h3 className="font-semibold">Transactions</h3>
                <p className="text-xs mb-3">Check your Transactions</p>
              </div>
            </div>
            <div className="h-[144px] w-[50%] bg-gray-100 mx-1 p-2 mt-2 rounded-md relative">
              <h3 className="font-semibold">Create Bill</h3>
              <p className="text-xs mb-8">
                Click here to create bills instantly!
              </p>
              <button className="absolute right-0 bottom-0 m-3 bg-gray-950 rounded-full text-white p-2">
                <Plus />
              </button>
            </div>
          </div>
             <div className="hidden md:block">
              <CarouselDemo />
            </div>
        </section>

        {/* RecentSales inlined */}
        <div className="rounded-xl border p-4 m-2 mt-4 bg-background shadow-sm mb-17 md:mb-0 md:h-[404px]">
          <h2 className="text-lg font-semibold mb-2">Todays Sales</h2>
          {sales.length !== 0 ? (
            <div className="w-full">
              <p className="text-sm text-gray-500 mb-2">
                Last few recorded sales from your shop.
              </p>

              {/* Header row */}
              <div className="flex justify-between px-4 py-2 bg-gray-100 font-semibold text-sm">
                <div className="text-left flex-1">Amount</div>
                <div className="w-[150px] text-right">Time</div>
              </div>

              {/* Sales rows */}
              {sales.map((sale, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center px-4 py-2 border-b text-sm"
                >
                  <div className="text-left  bg-[#F6FFF9] text-[#328616] rounded-md px-1">
                    ₹{sale.total_amount}
                  </div>
                  <div className="font-medium text-right">
                    {inIST(sale.created_at)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <p className="text-center font-semibold text-sm">
                No recent sales
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
