import { Flex } from "antd";
import { Button, Space, DatePicker, version } from "antd";

const spotCSS: React.CSSProperties = {
  width: "10px",
  backgroundColor: "#40a9ff",
  borderRadius: "5px",
  height: "10px",
  alignSelf: "center",
  flexShrink: 0,
};
const lineCSS: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#40a9ff",
  height: "2px",
  alignSelf: "center",
};

const noLineCSS: React.CSSProperties = {
  width: "100%",
  alignSelf: "center",
};

const DayTimeLine = (props: { timeLineType: string }) => {
  var first: React.CSSProperties = lineCSS;
  var second: React.CSSProperties = lineCSS;
  var third: React.CSSProperties = lineCSS;
  var w: React.CSSProperties = {
    width: "100%",
  };

  if (props.timeLineType == "start") {
    second = spotCSS;
    first = noLineCSS;
  } else if (props.timeLineType == "end") {
    second = spotCSS;
    third = noLineCSS;
  } else if (props.timeLineType == "middle") {
    second = spotCSS;
  } else {
  }

  return (
    <Flex style={w}>
      <span style={first}></span>
      <span style={second}></span>
      <span style={third}></span>
    </Flex>
  );
};

export default DayTimeLine;
