import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "./Heading.js";
import Habit from "./Habit.js";
import { useSelector } from "react-redux";
const HabitList = (props) => {
  const habitList = useSelector((state) => state.habits);
  const navigate = useNavigate();
  const [heading] = useState("Activity List");
  return (
    <div>
      <Heading heading={heading} />
      {habitList.map((habit, i) => (
        <Habit habit={habit} key={i} />
      ))}
      <button
        onClick={() => navigate("create")}
        type="button"
        class="btn btn-secondary"
      >
        Create
      </button>
    </div>
  );
};
export default HabitList;
