import React from "react";
import { Layout, Card, Col, Row, Skeleton, List } from "antd";
import "antd/dist/antd.css";
import "./Dashboard.css";
import "./LayoutPage.css";

import CategoriesDropdown from "./Dropdowns/CategoryDropdown";
import DayDropdown from "./Dropdowns/DayDropdown";
import YearDropdown from "./Dropdowns/YearDropdown";
import SalesDistribution from "./Charts/SalesDistribution";
import SearchActivity from "./Charts/SearchActivity";
import CardContent from "./Charts/CardContent";
import TopSearch from "./Charts/TopSearch";
import SalesActivity from "./Charts/SalesActivity";
const { Content } = Layout;

const DashBoard = (loading, current) => {
  return (
    <>
      <div>
        <Content style={{ margin: "0 16px", background: "primary" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
    <Breadcrumb.Item>User</Breadcrumb.Item>
    <Breadcrumb.Item>Bill</Breadcrumb.Item>
  </Breadcrumb> */}

          <List
            grid={{
              gutter: 16,
              xs: 1,
              md: 24,
              sm: 2,
              lg: 3,
              xl: 4,
              xxl: 3,
            }}
            style={{
              margin: 0,
              padding: 2,
              minHeight: 360,
              background: "primary",
            }}
          >
            <div>
              <Row gutter={16}>
                <Col xs={24} xxl={0} sm={18} md={12} lg={12} xl={8}>
                  <Card
                    hoverable
                    title="Search Activity"
                    bordered={false}
                    style={{ width: 420 }}
                    className="Card"
                    extra={<YearDropdown />}
                  >
                    <Skeleton loading={!loading} active>
                      <SearchActivity style={{ height: "40px" }} />
                    </Skeleton>
                  </Card>
                </Col>
                <Col xs={20} xxl={0} sm={12} md={12} lg={10} xl={6}>
                  <Card
                    hoverable
                    title="65,894"
                    bordered={false}
                    style={{ width: 250, marginLeft: "90px" }}
                    className="Card"
                  >
                    <Skeleton loading={!loading} active>
                      <CardContent />
                    </Skeleton>
                  </Card>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={{ span: 20, offset: 2 }}
                  xl={8}
                  xxl={0}
                  style={{ paddingBottom: "40px" }}
                >
                  <Card
                    title="Top Search"
                    hoverable
                    bordered={false}
                    className="Card"
                    style={{ marginTop: "10px" }}
                  >
                    <Skeleton loading={!loading} active>
                      <TopSearch />
                    </Skeleton>
                  </Card>
                </Col>
                <Col
                  xxl={0}
                  xs={14}
                  sm={24}
                  md={{ span: 24, offset: 3 }}
                  lg={{ span: 24, offset: 0 }}
                  xl={12}
                >
                  <Card
                    hoverable
                    title="Sales Activity"
                    bordered={false}
                    extra={<DayDropdown />}
                    style={{ width: 500, marginRight: "70px" }}
                    className="Card"
                  >
                    <Skeleton loading={!loading} active>
                      <SalesActivity />
                    </Skeleton>
                  </Card>
                </Col>
                <Col xs={12} xxl={0} sm={26} md={{ span: 20 }} lg={12} xl={12}>
                  <Card
                    hoverable
                    title="Sales distribution"
                    bordered={false}
                    extra={<CategoriesDropdown />}
                    style={{ width: 500, marginLeft: "0px", marginTop: "10px" }}
                    className="Card"
                  >
                    <Skeleton loading={!loading} active>
                      <SalesDistribution />
                    </Skeleton>
                  </Card>
                </Col>
              </Row>
            </div>
          </List>
        </Content>
      </div>
    </>
  );
};

export default DashBoard;
