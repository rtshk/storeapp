export function HeaderSection() {
  return (
    <section>
      <div className="rounded-2xl py-3 mx-2">
        <h2 className="font-bold text-2xl px-4">Good evening!</h2>
        <p className="font-bold px-4">Here's today’s performance summary</p>
      </div>
      <div className="bg-gray-50 mx-2 pb-4 rounded-2xl shadow-sm">
        <h2 className="font-bold text-2xl py-3 px-4 mt-3 mb-2">Your Sales</h2>
        <div className="flex justify-between px-4">
          <div className="flex flex-col p-2 px-5 w-full mx-2 bg-gray-100 rounded-2xl">
            <p className="font-semibold text-3xl">0</p>
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
  );
}
