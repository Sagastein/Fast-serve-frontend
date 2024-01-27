import ProgressBar from "../components/ProgressBar";
import { LineChartExample } from "../components/LineCharts";
import Recent from "../components/Recent";
import axios from "axios";
import useSwr from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);
function Overview() {
  const { data, error, isLoading } = useSwr("api/dashboards/stats", fetcher);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <main className="h-[90vh] overflow-auto">
      <h1 className="text-xl font-mono font-bold my-2">Overview</h1>
      <article className="flex gap-6">
        <main className="flex-1">
          <section className="grid gap-4 flex-1 grid-cols-3 items-center">
            <section className=" bg-white p-4 flex justify-between items-center  rounded-[25px] shadow-lg">
              <div>
                <h3 className="text-center text-xs font-bold">Total Sales</h3>
                <p className="text-center text-lg font-bold">
                  {data.totalCredits} rwf
                </p>
              </div>
              <div>
                <ProgressBar percentage={40} />
              </div>
            </section>
            <section className=" bg-white p-4 flex justify-between items-center  rounded-[25px] shadow-lg">
              <div>
                <h3 className="text-center text-xs font-bold">Total income</h3>
                <p className="text-center text-lg font-bold">
                  {data.totalDebits} rwf
                </p>
              </div>
              <div>
                <ProgressBar percentage={70} />
              </div>
            </section>
            <section className=" bg-white p-4 flex justify-between items-center  rounded-[25px] shadow-lg">
              <div>
                <h3 className="text-center text-xs font-bold">Today Sales</h3>
                <p className="text-center text-lg font-bold">
                  {data.totalCreditsToday || 0} rwf
                </p>
              </div>
              <div>
                <ProgressBar percentage={10} />
              </div>
            </section>
          </section>
          <section className="my-2">
            <h1 className="my-2">Chart</h1>
            <div>
              <LineChartExample />
            </div>
          </section>
        </main>
        <aside className="w-3/12   px-2">
          <section className="h-24 bg-white p-4 flex justify-center items-center  rounded-[25px] shadow-lg">
            <div>
              <h3 className="text-center text-xs font-bold">Total Balance</h3>
              <p className="text-center text-lg font-bold">
                {data.totalCredits} rwf
              </p>
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
