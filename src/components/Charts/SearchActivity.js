import React from "react";
import { Column } from "@ant-design/charts";

const SalesDistribution = () => {
  var data = [
    {
      month: "jan",
      value: 1078,
    },
    {
      month: "feb",
      value: 1216,
    },
    {
      month: "mar",
      value: 758,
    },
    {
      month: "apr",
      value: 623,
    },
    {
      month: "may",
      value: 319,
    },
    {
      month: "jun",
      value: 422,
    },
    {
      month: "jul",
      value: -4,
    },
    {
      month: "aug",
      value: -217,
    },
    {
      month: "sep",
      value: -358,
    },
    {
      month: "oct",
      value: 1513,
    },
    {
      month: "nov",
      value: 1388,
    },
    {
      month: "dec",
      value: 597,
    },
  ];
  var config = {
    data: data,
    padding: "auto",
    xField: "month",
    yField: "value",
    meta: {
      value: {
        max: 2000,
        min: -1000,
      },
      month: {
        formatter: function formatter(val) {
          return "".concat(val);
        },
      },
    },
    annotations: [
      {
        type: "region",
        start: function start(xScale) {
          var ratio = xScale.ticks ? 1 / xScale.ticks.length : 1;
          var x = xScale.scale("7") - ratio / 2;
          return ["".concat(x * 100, "%"), "0%"];
        },
        end: function end(xScale) {
          var ratio = xScale.ticks ? 1 / xScale.ticks.length : 1;
          var x = xScale.scale("9") + ratio / 2;

          return ["".concat(x * 100, "%"), "100%"];
        },
      },
    ],
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} style={{ height: "250px" }} />;
};

export default SalesDistribution;
