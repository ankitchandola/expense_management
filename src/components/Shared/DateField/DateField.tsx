import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./DateField.style.module.css";
import { IDateFieldProps } from "./DateField.d";
import { useState } from "react";

const DateField = ({ setSelectedDate, placeholder }: IDateFieldProps) => {
  const [selectedDate, setLocalSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setLocalSelectedDate(date);
    setSelectedDate(date);
  };
  return (
    <div className="date-picker-container">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        customInput={<CustomInput />}
        minDate={new Date()}
        placeholderText={placeholder}
      />
    </div>
  );
};

const CustomInput = (props: any) => {
  return (
    <div className={style.customInput}>
      <img src={"/calendar.png"} alt="calendar icon" />
      <input
        onClick={props.onClick}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};
export default DateField;
