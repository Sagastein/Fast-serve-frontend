import { OverviewCard } from "../components";
function Overview() {
  return (
    <main>
      <h1 className="text-xl font-mono font-bold my-2">Overview</h1>
      <article className="flex gap-6">
        <main className="flex-1">
          <section className="grid gap-4 flex-1 grid-cols-3 items-center">
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
          </section>
          <section className="my-2">
            <h1>chart</h1>
          </section>
        </main>
        <aside className="w-3/12   px-2">
          <section className="h-24 bg-white p-4 flex justify-center items-center  rounded-[25px] shadow-lg">
            <div>
              <h3 className="text-center text-xs font-bold">Total Sales</h3>
              <p className="text-center text-lg font-bold">65,080 rwf</p>
            </div>
          </section>
          <h1 className="my-2">lsjadflandflas</h1>
        </aside>
      </article>
    </main>
  );
}

export default Overview;
