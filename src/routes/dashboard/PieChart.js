import React from "react";
import { Chart } from "react-google-charts";

export const data = [
//   ["Year", "Sales", "Expenses"],
//   ["2004", 1000, 400],
//   ["2005", 1170, 460],
//   ["2006", 660, 1120],
//   ["2007", 1030, 540],
    ["year", "Television", "Digital media", "Print", "Filmed entertainment", "Online gaming", "Animation and VFX", "Live events", "Out of Home media", "Music", "Radio", "Total", "Growth"],
    ["2019", 787, 308, 296, 191, 65, 95, 83, 39, 15, 31, 1910, 0],
    ["2020", 685, 326, 190, 72, 79, 53, 27, 15, 15, 14, 1476, -23.2],
    ["2021", 720, 439, 227, 93, 101, 83, 73, 37, 19, 16, 1750, 19.3],
    ["2022", 709, 571, 250, 172, 135, 107, 95, 41, 21, 21, 2098, 19.9],
    ["2023E", 727, 671, 262, 196, 167, 117, 113, 53, 23, 22, 2339, 11.5],
    ["2025E", 796, 862, 279, 231, 231, 147, 101, 55, 26, 26, 2832, 10.6],
    ["CAGR", 3.90, 14.70, 3.70, 9.80, 19.50, 21.10, 22.20, 12.80, 14.70, 7.50, 10.00, 0]
];

export const options = {
  title: "Movie & Entertainment Collections",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: -50 },
  // chartArea: { width: "50%", height: "70%" },
  focusTarget: 'category',
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      // width="90vw"
      // height="400px"
      data={data}
      options={options}
      legendToggle
    />
  );
}
