import { ADD_REMAINDER, REMOVE_REMAINDER, CREAR_REMINDERS } from "../types";
import { bake_cookie, read_cookie } from "sfcookies";
const remainder = (state = [], action) => {
  let reminders = [];

  state = read_cookie("reminders");

  if (action.type === ADD_REMAINDER) {
    reminders = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() },
    ];
    bake_cookie("reminders", reminders);
    return reminders;
  } else if (action.type === REMOVE_REMAINDER) {
    reminders = state.filter((reminder) => reminder.id !== action.id);
    bake_cookie("reminders", reminders);
    return reminders;
  } else if (action.type === CREAR_REMINDERS) {
    reminders = [];
    console.log("from clear ", reminders);
    bake_cookie("reminders", reminders);
    return reminders;
  } else {
    return state;
  }
};

export default remainder;
