import { OverviewCard } from "../components";
import { LineChartExample } from "../components/LineCharts";
import Recent from "../components/Recent";

function Overview() {
  return (
    <main className="h-[90vh] overflow-auto">
      <h1 className="text-xl font-mono font-bold my-2">Overview</h1>
      <article className="flex gap-6">
        <main className="flex-1">
          <section className="grid gap-4 flex-1 grid-cols-3 items-center">
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
          </section>
          <section className="my-2">
            <h1 className="my-2">chart</h1>
            <div>
              <LineChartExample />
            </div>
          </section>
        </main>
        <aside className="w-3/12   px-2">
          <section className="h-24 bg-white p-4 flex justify-center items-center  rounded-[25px] shadow-lg">
            <div>
              <h3 className="text-center text-xs font-bold">Total Sales</h3>
              <p className="text-center text-lg font-bold">65,080 rwf</p>
            </div>
          </section>
          <h1 className="my-2">Recent</h1>
          <Recent />
        </aside>
      </article>
    </main>
  );
}

export default Overview;
