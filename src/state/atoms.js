import { atom } from "recoil";

export const widget = atom({
  key: "widget",
  default: null,
});

export const charts = atom({
  key: "charts",
  default: [],
});

export const chartWidth = atom({
  key: "chartWidth",
  default: "50%",
});

export const student = atom({
  key: "student",
  default: null,
});

export const year = atom({
  key: "year",
  default: 2012,
});

export const sem = atom({
  key: "sem",
  default: 1,
});

export const grade = atom({
  key: "grade",
  default: 1,
});

export const chartsConf = atom({
  key: "chartsConf",
  default: [],
});
