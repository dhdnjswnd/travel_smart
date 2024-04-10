type DayScheduleType = {
  day: string;
  date: string;
  weather: string;
  details : DayScheduleDetailType[];
};

type DayScheduleDetailType = {
  spot: string;
  time: string;
  type: string;
};

export type { DayScheduleDetailType, DayScheduleType };
