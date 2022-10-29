import React from "react";
import { Col, Dropdown, Menu, Row, Space, Typography } from "antd";
import {
  widget as widgetAtom,
  charts as chartAtom,
  chartWidth as chartWidthAtom,
} from "../state/atoms";
import { useRecoilState } from "recoil";

const ChartsMenu = () => {
  const [widget, setWidget] = useRecoilState(widgetAtom);
  const [charts, setCharts] = useRecoilState(chartAtom);
  const [chartWidth, setChartWidth] = useRecoilState(chartWidthAtom);

  const onWidget = ({ key }) => {
    setWidget(key);
  };

  const onChart = ({ key }) => {
    setCharts((state) => [...state, `${key}-${charts.length}`]);
  };

  const onWidth = ({ key }) => {
    setChartWidth(key);
  };

  const widgetsMenu = (
    <Menu
      onClick={onWidget}
      selectable
      items={[
        {
          key: "Chart",
          label: "Chart",
        },
        {
          key: "Summery",
          label: "Summery",
        },
      ]}
    />
  );

  const chartsMenu = (
    <Menu
      onClick={onChart}
      selectable
      items={[
        {
          key: "Bar",
          label: "Bar",
        },
        {
          key: "Line",
          label: "Line",
        },
      ]}
    />
  );

  const widthsMenu = (
    <Menu
      onClick={onWidth}
      selectable
      items={[
        {
          key: "50%",
          label: "50%",
        },
        {
          key: "100%",
          label: "100%",
        },
      ]}
    />
  );

  return (
    <div>
      <Row>
        {" "}
        <Col span={12}>
          <Dropdown overlay={widgetsMenu} arrow>
            <Typography>
              <Space>{widget || "Widget"}</Space>
            </Typography>
          </Dropdown>
          {widget === "Chart" && (
            <Dropdown overlay={chartsMenu} arrow>
              <Typography>
                <Space>Charts </Space>
              </Typography>
            </Dropdown>
          )}
        </Col>
        <Col span={12}>
          <Dropdown overlay={widthsMenu} arrow>
            <Typography>
              <Space> Chart Width : {chartWidth}</Space>
            </Typography>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

export default ChartsMenu;
