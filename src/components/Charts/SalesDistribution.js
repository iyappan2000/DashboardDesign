import React from "react";
import { Pie } from "@ant-design/charts";

const DemoGeneral = () => {
  const data = [
    {
      type: "Beauty",
      value: 27,
    },
    {
      type: "Fashion",
      value: 25,
    },
    {
      type: "Food",
      value: 18,
    },
    {
      type: "Alcohol",
      value: 15,
    },
    {
      type: "Sovueries",
      value: 10,
    },
    {
      type: "Other Categories",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    innerRadius: 0.64,
    label: {
      type: "inner",
      offset: "-50%",
      content: ({ percent }) => `${percent * 100}%`,
      style: {
        fill: "#fff",
        fontSize: 14,
        textAlign: "center",
      },
    },
    statistic: null,
    annotations: [
      {
        type: "image",
        src: "https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ELYbTIVCgPoAAAAAAAAAAABkARQnAQ",
        position: ["50%", "50%"],
        style: {
          width: 50,
          height: 50,
        },
        offsetX: -25,
        offsetY: 40,
      },
    ],
  };
  return <Pie {...config} style={{ height: "250px" }} />;
};

export default DemoGeneral;
