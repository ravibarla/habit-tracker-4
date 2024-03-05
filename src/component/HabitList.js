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
    <div style={{ height: "100vh", width: "100vw", margin: "0", padding: "0" }}>
      <Heading heading={heading} />
      {/* mapping every habits and passing each habit as props*/}
      <div
        className="d-flex flex-row h-50  flex-wrap "
        style={{ fontFamily: "serif", width: "100vw"}}
      >
        {habitList.map((habit, i) => (
          <Habit habit={habit} key={i} />
        ))}
      </div>
      <button
        onClick={() => navigate("create")}
        type="button"
        // className="btn btn-secondary btn-lg "
        className="  btn btn-success btn-lg"
        style={{top:"0.5%",right:"32%",position:"fixed"}}
      >
        Create
      </button>
    </div>
  );
};
export default HabitList;
