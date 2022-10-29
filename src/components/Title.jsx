import { Row, Space, Typography } from "antd";
import React from "react";

const Title = ({ title }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography.Title level={2}>{title}</Typography.Title>
    </div>
  );
};

export default Title;
