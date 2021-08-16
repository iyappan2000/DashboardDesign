import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";

const CardContent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    setTimeout(async () => {
      const res = await fetch(
        "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
      );
      const data = await res.json();
      setData(data);
    }, 5000);
  };
  var config = {
    data: data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: { tickCount: 5 },
    smooth: true,
    style: {
      fill: "white",
    },
  };
  return <Line {...config} style={{ height: "250px" }} />;
};

export default CardContent;
