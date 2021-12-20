import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);
  const createChartBar = (data) => {
    return (
      <ChartBar
        key={data.label}
        value={data.value}
        maxValue={totalMax}
        label={data.label}
      />
    );
  };
  return <div className="chart">{props.dataPoints.map(createChartBar)}</div>;
};

export default Chart;
