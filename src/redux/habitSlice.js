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
    updateHabitName: (state, action) => {
      const { id, name } = action.payload;
      const habitIndex = state.findIndex((habit) => habit.id == id);
      if (habitIndex !== -1) {
        // Create a new copy of the habit with the updated name
        console.log("hii")
        return (state[habitIndex] = { ...state[habitIndex], name });
      }
    },
  },
});

export const { addHabit, removeHabit, updateHabit, updateHabitName } =
  habitSlice.actions;
export default habitSlice.reducer;
