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
    <div >
      <Heading heading={heading} />
      {/* mapping every habits and passing each habit as props*/}
      <div className="d-flex flex-row h-50 px-2 my-2 mx-2 w-auto">
        {habitList.map((habit, i) => (
          <Habit habit={habit} key={i} />
        ))}
      </div>
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
