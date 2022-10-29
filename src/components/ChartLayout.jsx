import { Button } from "antd";
import React from "react";
import {
  chartWidth as chartWidthAtom,
  charts as chartAtom,
} from "../state/atoms";
import { useRecoilState } from "recoil";

const ChartLayout = ({ children, type, component: Component }) => {
  const [chartWidth] = useRecoilState(chartWidthAtom);
  const [charts, setCharts] = useRecoilState(chartAtom);

  const onRemove = () => {
    const chrts = [...charts];
    const indx = chrts.indexOf(type);
    delete chrts[indx];
    setCharts(chrts);
  };

  return (
    <div className="layout-con" style={{ width: chartWidth }}>
      <div className="close-btn-con">
        <Button
          onClick={onRemove}
          className="close-btn"
          danger
          ghost
          size="small"
        >
          X
        </Button>
      </div>
      <div>{Component && <Component type={type} />}</div>
      {children}
    </div>
  );
};

export default ChartLayout;
