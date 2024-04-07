import React from "react";
import { Button, Space, DatePicker, version } from "antd";
import { Flex } from "antd";
import type { DayScheduleDetailType } from "../DayScheduleTypes";
import DayTimeLine from "./DayTimeLine";
import {} from "./DaySchedule.module.css";

const heightFix: React.CSSProperties = {
  height: "15px",
};
const fillWidth: React.CSSProperties = {
  width: "100%",
};


const DayScheduleDetail = (props: { detail: DayScheduleDetailType }) => {
  const detail = props.detail;
  var widthCss: React.CSSProperties = {
    flexShrink:0,
  };
  if (detail.type !== "start" && detail.type !== "end") {
    widthCss = fillWidth;
  }
  return (
    <Flex gap="small" vertical justify={"center"} style={widthCss}>
      <Space direction="vertical" align="center" style={heightFix}>
        <span>{detail.spot}</span>
      </Space>
      <Space direction="vertical" style={{ width: "100%" }}>
        <DayTimeLine timeLineType={detail.type}></DayTimeLine>
      </Space>
      <Space direction="vertical" align="center" style={heightFix}>
        <span>{detail.time}</span>
      </Space>
    </Flex>
  );
};

export default DayScheduleDetail;
