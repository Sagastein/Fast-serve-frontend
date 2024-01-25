/* eslint-disable react/prop-types */

export default function ProgressBar({ percentage }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = ((100 - percentage) / 100) * circumference;

  return (
    <div className="progress-bar relative bg-white rounded-full h-16 w-16">
      <svg
        className="absolute  top-0 left-0"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
      >
        {/* <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#ddd"
          strokeWidth="10"
          fill="transparent"
        /> */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#007BFF"
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
