import { createSlice } from "@reduxjs/toolkit";
import { dummyHabits } from "../resource/dummyHabits";

export const habitSlice = createSlice({
  name: "habits",
  initialState: dummyHabits,
  reducers: {
    addHabit: (state, action) => {
      return [...state, action.payload];
    },
    removeHabit: (state, action) => {
      return state.filter((habit) => habit.id != action.payload);
    },
    updateHabit: (state, action) => {
      return action.payload;
    },
  },
});

export const { addHabit, removeHabit, updateHabit, updateHabitName } =
  habitSlice.actions;
export default habitSlice.reducer;
