// src/utils/date.ts
import moment from "moment-jalaali";
import "moment"; // This import brings in the moment types globally

// Utility function to get the current Persian date and time
export const getPersianDate = (): string => {
  return moment().format("jYYYY/jMM/jDD HH:mm");
};
