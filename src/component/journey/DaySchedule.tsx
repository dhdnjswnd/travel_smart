import React from "react";
import { Button, Space, DatePicker, version } from "antd";
import DayScheduleDetail from "./DayScheduleDetail";
import type {
  DayScheduleDetailType,
  DayScheduleType,
} from "../DayScheduleTypes";
import { Flex } from "antd";
import {} from "./DaySchedule.module.css";

const dayScheduleStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 15,
  border: "1px solid #40a9ff",
  marginTop: "5px",
  padding: "8px",
  cursor: "pointer",
};

const DaySchedule = (props: {
  dayScheduleType: DayScheduleType;
  index: number;
}) => {
  function handleClick() {
    alert("You clicked me!");
  }

  const daySchedule = props.dayScheduleType;
  const details = daySchedule.details;

  return (
    <Space
      direction="vertical"
      style={{ paddingTop: "10px" }}
    >
      <div>
        <b>day{props.index}</b> {daySchedule.day}/{daySchedule.date}{" "}
        {daySchedule.weather}
      </div>
      <Flex gap={0} style={dayScheduleStyle} onClick={handleClick}>
        {details.map((child) => {
          return <DayScheduleDetail detail={child}></DayScheduleDetail>;
        })}
      </Flex>
    </Space>
  );
};

export default DaySchedule;
