import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Flex, Space } from "antd";
import reportWebVitals from "./reportWebVitals";
import DaySchedule from "./component/journey/DaySchedule";
import type { DayScheduleType } from "./component/DayScheduleTypes";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";

const day1: DayScheduleType = {
  day: "08.24",
  date: "토",
  weather: "좋음",
};
const day2: DayScheduleType = {
  day: "08.25",
  date: "일",
  weather: "비",
};
const day3: DayScheduleType = {
  day: "08.26",
  date: "월",
  weather: "흐림",
};
const day4: DayScheduleType = {
  day: "08.27",
  date: "화",
  weather: "눈",
};
const day5: DayScheduleType = {
  day: "08.28",
  date: "수",
  weather: "눈",
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),

  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),

    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Flex>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={true}
        items={items}
      />
      <Space direction="vertical">
        <h1>두바이 스위스 여행</h1>
        <DaySchedule dayScheduleType={day1} index={1}></DaySchedule>
        <DaySchedule dayScheduleType={day2} index={2}></DaySchedule>
        <DaySchedule dayScheduleType={day3} index={3}></DaySchedule>
        <DaySchedule dayScheduleType={day4} index={4}></DaySchedule>
        <DaySchedule dayScheduleType={day5} index={5}></DaySchedule>
      </Space>
    </Flex>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
