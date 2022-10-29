import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import data from "../state/data.json";
import { chartsConf as chartsConfAtom } from "../state/atoms";
import { useRecoilState } from "recoil";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  parsing: {
    xAxisKey: "subject",
    yAxisKey: "data",
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Marks Total & Average",
    },
  },
};

const BarChart = ({ type }) => {
  const [chartsConf] = useRecoilState(chartsConfAtom);
  let chartData;
  let filteredData;
  console.log("cccccc", chartsConf);
  const chartConf = chartsConf?.find((c) => c.type === type);

  if (chartConf) {
    const { year, grade, sem } = chartConf;
    filteredData = data.filter(
      (d) => d.year === +year && d.grade === grade && d.semester === sem
    );

    if (filteredData?.length !== 0) {
      const totalMarksDataSet = [
        {
          subject: "Maths",
          data: filteredData
            .filter((d) => d.subject === "Maths")
            .map((d) => d.mark)
            .reduce((a, c) => a + c),
        },
        {
          subject: "Science",
          data: filteredData
            .filter((d) => d.subject === "Science")
            .map((d) => d.mark)
            .reduce((a, c) => a + c),
        },
        {
          subject: "History",
          data: filteredData
            .filter((d) => d.subject === "History")
            .map((d) => d.mark)
            .reduce((a, c) => a + c),
        },
      ];

      const averageDataSet = [
        {
          subject: "Maths",
          data:
            filteredData
              .filter((d) => d.subject === "Maths")
              .map((d) => d.mark)
              .reduce((a, c) => a + c) /
            data.filter((d) => d.subject === "Maths").length,
        },
        {
          subject: "Science",
          data:
            filteredData
              .filter((d) => d.subject === "Science")
              .map((d) => d.mark)
              .reduce((a, c) => a + c) /
            data.filter((d) => d.subject === "Science").length,
        },
        {
          subject: "History",
          data:
            filteredData
              .filter((d) => d.subject === "History")
              .map((d) => d.mark)
              .reduce((a, c) => a + c) /
            data.filter((d) => d.subject === "History").length,
        },
      ];
      chartData = {
        datasets: [
          {
            type: "bar",
            label: "Total Marks",
            data: totalMarksDataSet,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            type: "line",
            label: "Average",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,
            fill: false,
            data: averageDataSet,
          },
        ],
      };
    }
  }

  return chartData ? (
    <Chart type="bar" data={chartData} options={options} />
  ) : (
    "No Records"
  );
};

export default BarChart;
