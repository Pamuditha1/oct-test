import React from "react";
import { chartsConf as chartsConfAtom } from "../state/atoms";
import { useRecoilState } from "recoil";
import { Col, Row, Select } from "antd";
const { Option } = Select;

const years = [
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
];

const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ChartFilters = ({ type }) => {
  const [chartsConf, setChartsConf] = useRecoilState(chartsConfAtom);

  const onChangeChartsConf = (key, val) => {
    const chartConf = chartsConf.find((c) => c.type === type);
    if (chartConf) {
      setChartsConf((state) => [...state, { ...chartConf, [key]: val }]);
    } else {
      setChartsConf((state) => [...state, { type, [key]: val }]);
    }
  };

  return (
    <Row>
      <Col span={4}>
        <p> Grade</p>

        <Select
          showSearch
          placeholder="Grade"
          onChange={(val) => onChangeChartsConf("grade", val)}
        >
          {grades.map((y) => (
            <Option value={y}>{y}</Option>
          ))}
        </Select>
      </Col>
      <Col span={4}>
        <p>Year</p>
        <Select
          showSearch
          placeholder="Year"
          onChange={(val) => onChangeChartsConf("year", val)}
        >
          {years.map((y) => (
            <Option value={y}>{y}</Option>
          ))}
        </Select>
      </Col>
      <Col span={4}>
        <p>Semester</p>
        <Select
          showSearch
          placeholder="Semester"
          onChange={(val) => onChangeChartsConf("sem", val)}
        >
          {[1, 2].map((y) => (
            <Option value={y}>{y}</Option>
          ))}
        </Select>
      </Col>
    </Row>
  );
};

export default ChartFilters;
