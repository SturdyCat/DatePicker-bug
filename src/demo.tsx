import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import moment from "moment";
import { DatePicker, Space } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";

const { RangePicker } = DatePicker;

const onChange = (
  value: DatePickerProps["value"] | RangePickerProps["value"],
  dateString: [string, string] | string
) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};

const onOk = (value: DatePickerProps["value"] | RangePickerProps["value"]) => {
  console.log("onOk: ", value);
};

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker
      picker="time"
      value={[new moment(`2024-1-1 00:00:00`), new moment(`2024-1-1 00:00:00`)]}
      format="HH:mm:ss"
      onChange={onChange}
      onOk={onOk}
    />
  </Space>
);

export default App;
