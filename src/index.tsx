import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Flex, Space } from "antd";
import reportWebVitals from "./reportWebVitals";

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
import TotalSchedule from "./component/journey/TotalSchedule";
import CompoundedSpace from "antd/es/space";

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

const openStyle: React.CSSProperties = {
  display: "block",
};

const closeStyle: React.CSSProperties = {
  display: "none",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const MainBody = () => {
  const [leftCss, setLeftCss] = useState(closeStyle);



  function handleLeft() {
    if (leftCss == closeStyle) {
      setLeftCss(openStyle);
    }else {
      setLeftCss(closeStyle);
    }
  }

  const onClick: MenuProps["onClick"] = (openKeys) => {
    console.log(openKeys);
    if(openKeys.key=="1"){
      handleLeft();
    }
  };

  const items: MenuItem[] = [
    getItem("설정", "1", <PieChartOutlined />),
    getItem("전체일정", "2", <DesktopOutlined />),
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

  return (
    <Flex style={{ height: "100vh" }}>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={true}
        items={items}
        onClick={onClick}
      />
      <TotalSchedule css={leftCss} close={handleLeft}></TotalSchedule>
    </Flex>
  );
};

root.render(
  <React.StrictMode>
    <MainBody />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
