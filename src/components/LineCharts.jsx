import { Card, LineChart, Title } from "@tremor/react";

const chartdata = [
  {
    year: "jan",
    Sales: 34000,
    Income: 44000,
  },
  {
    year: "feb",
    Sales: 25000,
    Income: 55000,
  },
  {
    year: "mar",
    Sales: 43500,
    Income: 45000,
  },
  {
    year: "apr",
    Sales: 54000,
    Income: 32000,
  },
  {
    year: "may",
    Sales: 55909,
    Income: 56042,
  },
  {
    year: "jun",
    Sales: 45500,
    Income: 41200,
  },
  {
    year: "jul",
    Sales: 45200,
    Income: 45500,
  },
  {
    year: "aug",
    Sales: 48200,
    Income: 45200,
  },
  {
    year: "sep",
    Sales: 49200,
    Income: 50100,
  },
  {
    year: "oct",
    Sales: 45200,
    Income: 43200,
  },
  {
    year: "nov",
    Sales: 45200,
    Income: 50200,
  },
  {
    year: "dec",
    Sales: 41001,
    Income: 45200,
  },
];

const valueFormatter = (number) =>
  `Rwf ${new Intl.NumberFormat("us").format(number).toString()}`;

export const LineChartExample = () => (
  <Card className="bg-white rounded-lg shadow-lg">
    <Title>Sales/Incomes</Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="year"
      categories={["Sales", "Income"]}
      colors={["emerald", "gray"]}
      valueFormatter={valueFormatter}
      yAxisWidth={40}
    />
  </Card>
);
