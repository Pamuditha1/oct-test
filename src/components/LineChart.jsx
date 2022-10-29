import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import data from "../state/data.json";
import { student as studentAtom } from "../state/atoms";
import { useRecoilState } from "recoil";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  parsing: {
    xAxisKey: "sem",
    yAxisKey: "mark",
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

const LineChart = () => {
  const [student] = useRecoilState(studentAtom);

  const marksDataSet = [
    {
      subject: "Maths",
      marks: data
        .filter((d) => d.studentId === +student && d.subject === "Maths")
        .sort((a, b) => a.grade - b.grade)
        .map((d) => ({ sem: `${d.year} - ${d.semester}`, mark: d.mark })),
    },
    {
      subject: "Science",
      marks: data
        .filter((d) => d.studentId === +student && d.subject === "Science")
        .sort((a, b) => a.grade - b.grade)
        .map((d) => ({ sem: `${d.year} - ${d.semester}`, mark: d.mark })),
    },
    {
      subject: "History",
      marks: data
        .filter((d) => d.studentId === +student && d.subject === "History")
        .sort((a, b) => a.grade - b.grade)
        .map((d) => {
          return { sem: `${d.year} - ${d.semester}`, mark: d.mark };
        }),
    },
  ];

  const chartData = {
    datasets: [
      {
        label: "Maths",
        borderColor: "rgb(155, 19, 132)",
        borderWidth: 2,
        fill: false,
        data: marksDataSet[0].marks,
      },
      {
        label: "Science",
        borderColor: "rgb(65, 20, 5)",
        borderWidth: 2,
        fill: false,
        data: marksDataSet[1].marks,
      },
      {
        label: "History",
        borderColor: "rgb(0,0,0)",
        borderWidth: 2,
        fill: false,
        data: marksDataSet[2].marks,
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

export default LineChart;
