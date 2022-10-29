import React from "react";
import { useRecoilState } from "recoil";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import ChartLayout from "./ChartLayout";
import { charts as chartAtom } from "../state/atoms";
import StudentCom from "./StudentCom";
import ChartFilters from "./ChartFilters";

const ChartCom = () => {
  const [charts] = useRecoilState(chartAtom);

  return (
    <div className="charts-con">
      {charts?.map((c) => {
        if (c.includes("Bar")) {
          return (
            <ChartLayout type={c} component={ChartFilters}>
              <BarChart type={c} />
            </ChartLayout>
          );
        }
        if (c.includes("Line")) {
          return (
            <ChartLayout type={c} component={StudentCom}>
              <LineChart type={c} />
            </ChartLayout>
          );
        }
      })}
    </div>
  );
};

export default ChartCom;
