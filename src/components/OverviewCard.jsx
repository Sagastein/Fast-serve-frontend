/* eslint-disable react/prop-types */
// import ProgressBar from "./ProgressBar";

function ProgressBar({ percentage }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = ((100 - percentage) / 100) * circumference;
  //if percentage is less that 50% then stroke color is red else blue
  // const strokeColor = percentage < 50 ? "#EF4444" : "#3B82F6";

  return (
    <div className="progress-bar relative bg-white rounded-full h-16 w-16">
      <svg
        className="absolute  top-0 left-0"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={percentage < 50 ? "red" : "green"}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
      <div className="progress-bar__value absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-center font-bold">
        {percentage}%
      </div>
    </div>
  );
}

export default function OverviewCard() {
  return (
    <section className=" bg-white p-4 flex justify-between items-center  rounded-[25px] shadow-lg">
      <div>
        <h3 className="text-center text-xs font-bold">Total Sales</h3>
        <p className="text-center text-lg font-bold"> rwf</p>
      </div>
      <div>
        <ProgressBar percentage={80} />
      </div>
    </section>
  );
}
