import React from "react";
import { List } from "antd";
function TopSearch() {
  const data = [
    {
      id: 1,
      title: "Material",
      score: 5473,
    },
    {
      id: 2,

      title: "Accesories",
      score: 4403,
    },
    {
      id: 3,

      title: "Shoes",
      score: 4301,
    },
    {
      id: 4,

      title: "Designing Items",
      score: 2343,
    },
  ];
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <p style={{ padding: "0 20px", color: "#4d7cff" }}>{item.id}</p>
            <List.Item.Meta title={<a href="#2">{item.title}</a>} />
            <div style={{ color: "#4d7cff" }}>{item.score}</div>
          </List.Item>
        )}
      />
    </>
  );
}

export default TopSearch;
