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
  cursor:"pointer",
};

const detail: DayScheduleDetailType = {
  spot: "ICH",
  time: "23:55",
  type: "start",
};
const detail2: DayScheduleDetailType = {
  spot: "XAS",
  time: "+04:35",
  type: "end",
};

const detail3: DayScheduleDetailType = {
  spot: "3h30m",
  time: "",
  type: " ",
};

const detail4: DayScheduleDetailType = {
  spot: "행복",
  time: "+02:00",
  type: "middle",
};



const DaySchedule = (props: {
  dayScheduleType: DayScheduleType;
  index: number;
}) => {

  function handleClick() {
    alert('You clicked me!');
  }

  const daySchedule = props.dayScheduleType;

  return (
    <div style={{ width: "330px", padding: "0 10px", marginTop: "10px" }}>
      <div>
        <b>day{props.index}</b> {daySchedule.day}/{daySchedule.date} {daySchedule.weather}
      </div>
      <Flex gap={0} style={dayScheduleStyle} onClick={handleClick}>
        <DayScheduleDetail detail={detail}></DayScheduleDetail>
        <DayScheduleDetail detail={detail3}></DayScheduleDetail>
        <DayScheduleDetail detail={detail4}></DayScheduleDetail>
        <DayScheduleDetail detail={detail3}></DayScheduleDetail>
        <DayScheduleDetail detail={detail2}></DayScheduleDetail>
      </Flex>
    </div>
  );
};

export default DaySchedule;
