import React, { FocusEvent } from "react";
import { Flex, Space } from "antd";
import DaySchedule from "./DaySchedule";
import type {
  DayScheduleDetailType,
  DayScheduleType,
} from "../DayScheduleTypes";
import { Input } from "antd";
import styles from "./TotalSchedule.module.css";

const editableTitleStyle: React.CSSProperties = {
  border: "none",
  fontSize: "20px",
  fontWeight: "bold",
};

const detail: DayScheduleDetailType = {
  spot: "ICH",
  time: "23:55",
  type: "start",
};

const detail2: DayScheduleDetailType = {
  spot: "행복",
  time: "+02:00",
  type: "middle",
};
const detail3: DayScheduleDetailType = {
  spot: "3h30m",
  time: "",
  type: " ",
};
const detail4: DayScheduleDetailType = {
  spot: "XAS",
  time: "+04:35",
  type: "end",
};

const day1: DayScheduleType = {
  day: "08.24",
  date: "토",
  weather: "좋음",
  details: [detail, detail2, detail3, detail4],
};
const day2: DayScheduleType = {
  day: "08.25",
  date: "일",
  weather: "비",
  details: [detail, detail2, detail3, detail4],
};
const day3: DayScheduleType = {
  day: "08.26",
  date: "월",
  weather: "흐림",
  details: [detail, detail2, detail3, detail4],
};
const day4: DayScheduleType = {
  day: "08.27",
  date: "화",
  weather: "눈",
  details: [detail, detail2, detail3, detail4],
};
const day5: DayScheduleType = {
  day: "08.28",
  date: "수",
  weather: "눈",
  details: [detail, detail2, detail3, detail4],
};

const TotalSchedule = () => {
  var title = "두바이 스위스 여행";
  const titleChanged = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (title !== e.target.value) {
      alert("값이 변경되었습니다. 값 변경 처리 필요합니다.");
      title = e.target.value;
    }
  };

  return (
    <Flex vertical>
      <Input
        style={editableTitleStyle}
        defaultValue={title}
        onBlur={(event) => titleChanged(event)}
      ></Input>
      <Space
        className={styles.leftScroll}
        direction="vertical"
        style={{
          backgroundColor: "green",
          width: "320px",
          padding: "10px",
          height: "97vh",
          overflowY: "scroll",
        }}
      >
        <Flex vertical>
          <DaySchedule dayScheduleType={day1} index={1}></DaySchedule>
          <DaySchedule dayScheduleType={day2} index={2}></DaySchedule>
          <DaySchedule dayScheduleType={day3} index={3}></DaySchedule>
          <DaySchedule dayScheduleType={day4} index={4}></DaySchedule>
          <DaySchedule dayScheduleType={day5} index={5}></DaySchedule>
          <DaySchedule dayScheduleType={day5} index={5}></DaySchedule>
          <DaySchedule dayScheduleType={day5} index={6}></DaySchedule>
          <DaySchedule dayScheduleType={day5} index={7}></DaySchedule>
          <DaySchedule dayScheduleType={day5} index={8}></DaySchedule>
          <DaySchedule dayScheduleType={day5} index={6}></DaySchedule>
          <DaySchedule dayScheduleType={day5} index={7}></DaySchedule>
          <DaySchedule dayScheduleType={day5} index={8}></DaySchedule>
          <DaySchedule dayScheduleType={day5} index={6}></DaySchedule>
          <DaySchedule dayScheduleType={day5} index={7}></DaySchedule>
          <DaySchedule dayScheduleType={day5} index={8}></DaySchedule>
        </Flex>
      </Space>
    </Flex>
  );
};

export default TotalSchedule;
