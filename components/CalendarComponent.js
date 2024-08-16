import moment from "moment";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

const CalendarComponent = () => {
  const minDate = new Date(); //Today
  const maxDate = new Date(2026, 6, 3);
  const [selectedStartDate, setSelectedStartDate] = useState("DD/MM/YYYY");
  const [selectedEndDate, setSelectedEndDate] = useState("DD/MM/YYYY");
  const onDateChange = (date, type) => {
    console.log(JSON.stringify(date));
    const newDate = JSON.stringify(date);
    const newDate1 = newDate.substring(1, newDate.length - 1);
    const dates = newDate1.split("T");
    const date1 = dates[0].split("-");
    const day = date1[2];
    const month = date1[1];
    const year = date1[0];
    console.log(day + "-" + month + "-" + year);

    if (type == "END_DATE") {
      if (day == undefined) {
        setSelectedEndDate("DD/MM/YYYY");
      } else {
        setSelectedEndDate(day + "/" + month + "/" + year);
      }
    } else {
      setSelectedStartDate(day + "/" + month + "/" + year);
    }
  };

  return (
    <View>
      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        minDate={minDate}
        maxDate={maxDate}
        weekdays={["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"]}
        months={[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]}
        previousTitle="Previous"
        nextTitle="Next"
        todayBackgroundColor="#e6ffe6"
        selectedDayColor="#7300e6"
        selectedDayTextColor="#FFFFFF"
        onDateChange={onDateChange}
      />
      <Text>{"Start Date: " + selectedStartDate}</Text>
      <Text>{"End Date: " + selectedEndDate}</Text>
    </View>
  );
};

export default CalendarComponent;
