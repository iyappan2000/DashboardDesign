import React, { useState, useEffect } from "react";
import { Scatter } from "@ant-design/charts";
import Skeleton from "./Skeleton/Skeleton";

const SalesActivity = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    setTimeout(async () => {
      const res = await fetch(
        "https://gw.alipayobjects.com/os/antfincdn/t81X1wXdoj/scatter-data.json"
      );
      const data = await res.json();
      setData(data);
    }, 5000);
  };
  var config = {
    appendPadding: 30,
    data: datas,
    xField: "x",
    yField: "y",
    colorField: "genre",
    color: [
      "r(0.4, 0.3, 0.7) 0:rgba(255,255,255,0.5) 1:#5B8FF9",
      "r(0.4, 0.4, 0.7) 0:rgba(255,255,255,0.5) 1:#61DDAA",
    ],
    sizeField: "size",
    size: [5, 20],
    shape: "circle",
    yAxis: {
      nice: true,
      line: { style: { stroke: "#eee" } },
    },
    xAxis: {
      grid: { line: { style: { stroke: "#eee" } } },
      line: { style: { stroke: "#eee" } },
    },
  };
  return (
    <div>
      <Scatter {...config} style={{ height: "250px" }} />{" "}
      {!datas && (
        <p style={{ color: "white" }}>
          Loading...
          <Skeleton type="title" />
          <Skeleton type="text" />
        </p>
      )}
    </div>
  );
};

export default SalesActivity;
