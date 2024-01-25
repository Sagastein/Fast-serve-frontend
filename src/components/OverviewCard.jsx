import ProgressBar from "./ProgressBar";
export default function OverviewCard() {
  return (
    <section className=" bg-white p-4 flex justify-between items-center  rounded-[25px] shadow-lg">
      <div>
        <h3 className="text-center text-xs font-bold">Total Sales</h3>
        <p className="text-center text-lg font-bold">65,080 rwf</p>
      </div>
      <div>
        <ProgressBar percentage={80} />
      </div>
    </section>
  );
}
