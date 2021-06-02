import DateFnsUtils from '@date-io/date-fns';
import zhLocale from "date-fns/locale/zh-TW";
import React, { useState } from "react";
import {DatePicker, MuiPickersUtilsProvider, addMonths } from "@material-ui/pickers";
import './App.css';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))
var changeyear = function (a, b) {
  return a - b
}
export default function Datepicker() {
  const [currentTime, onClick] = useState(new Date());
  const year = changeyear(currentTime.getFullYear(), 1911)
  console.log(year)

  const classes = useStyles();
  return (
    <div>
      <form className={classes.container} noValidate>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={zhLocale}>
          <DatePicker
            value={currentTime}
            label="阿公店開店日選擇(民國年)"
            onChange={onClick}
            format={year + "/MM/dd"}
            InputLabelProps={{
            shrink: true,
          }}
          />
        </MuiPickersUtilsProvider>
      </form>
    </div>
  );
}