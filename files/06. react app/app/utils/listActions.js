// import moment from "moment";
import dayjs from "dayjs";

// function to get the length of the list
export const _getLength = (lists) => {
  const n = lists.length;
  return n <= 1 ? `${n} item` : `${n} items`;
};

export const _getTime = (time) => {
  const now = new Date().getTime();

  const t = minHr(time, now);

  // return by minutes
  if (t.min < 60) {
    return `${t.min}${t.min < 2 ? "min" : "mins"} ago`;
  }

  // return by hour
  if (t.hr < 3 && t.hr > 0) {
    return `${t.hr}${t.hr < 2 ? "hr" : "hrs"} ago`;
  }

  // return by day
  if (t.hr >= 3 && t.day < 6) {
    const today = dayjs(now).format("ddd");
    if (today === t.dayNow) {
      return t.hrFmt;
    }
    return `${t.dayNow} ${t.hrFmt}`;
  }

  // return by date
  return t.dateFmt;
};

const minHr = (time, now) => {
  return {
    min: dayjs(time).diff(now, "minutes") * -1,
    hr: dayjs(time).diff(now, "hour") * -1,
    day: dayjs(time).diff(now, "day") * -1,
    dayNow: dayjs(time).format("ddd"),
    hrFmt: dayjs(time).format("ha"),
    dateFmt: dayjs(time).format("MMM D"),
  };
};
