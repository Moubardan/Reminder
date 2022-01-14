import { ADD_REMAINDER, REMOVE_REMAINDER, CREAR_REMINDERS } from "../types";

export const add_reminder = (text, date) => {
  const action = {
    type: ADD_REMAINDER,
    text,
    date,
  };

  return action;
};

export const remove_reminder = (id) => {
  const action = {
    type: REMOVE_REMAINDER,
    id,
  };
  console.log("remove", action);
  return action;
};

export const clear_reminder = () => {
  const action = {
    type: CREAR_REMINDERS,
  };

  return action;
};
