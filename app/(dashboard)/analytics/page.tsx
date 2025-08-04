import { DailySalesBarChart } from "@/components/client-components/daily-sales-chart";
import { SalesChart } from "@/components/client-components/toady-sales-chart";

export default function Analytics() {
  return (
    <div className="flex overflow-y-scroll">
      <div className="p-2">
        <div className="mb-2">
          <SalesChart />
        </div>
        <div>
          <DailySalesBarChart />
        </div>
      </div>
    </div>
  );
}
