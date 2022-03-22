import React, { useState } from "react";
import { enGB } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import { TextField } from "@material-ui/core";
import "react-nice-dates/build/style.css";
export default function DateRangePickerExample({startDate,endDate,setStartDate,setEndDate}) {
  

  console.log(startDate, endDate)
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      minimumLength={1}
      format="dd MMM yyyy"
      locale={enGB}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className="date-range">
         
         <TextField
            name="startDate"
            variant="outlined"
            className={"input" + (focus === START_DATE ? " -focused" : "")}
            {...startDateInputProps}
            label="Set Campaign Start date"
            fullWidth
          />
          <span className="date-range_arrow" />
         
          <TextField
            name="endDate"
            variant="outlined"
            className={"input" + (focus === END_DATE ? " -focused" : "")}
            {...endDateInputProps}
            label="Set Campaign End date"
            fullWidth
          />
        </div>
      )}
    </DateRangePicker>
  );
}
