import React from "react";
import { Chart } from "react-google-charts";

const dataOld = [
  ["Name", "Popularity"],
  ["2019", 787],
  ["2020", 685],
  ["2021", 720],
  ["2022", 709],
  ["2023", 727],
];

const dataNew = [
  ["Name", "Popularity"],
  ["2019", 787],
  ["2020", 685],
  ["2021", 720],
  ["2022", 709],
  ["2023", 727],
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};

export function ColumnChart() {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      diffdata={diffdata}
    />
  );
}
