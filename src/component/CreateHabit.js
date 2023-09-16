import { useState } from "react";
import Heading from "./Heading";
import { v4 as uuid } from "uuid";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/habitSlice";
const CreateHabit = (props) => {
  const uniqueId = uuid();
  const [heading] = useState("Create Habit :");
  const [name, setName] = useState("enter a new habit:");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function getPreviousDay(date) {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() - 1);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleForm = (e) => {
    e.preventDefault();
    if (name === "enter a new habit:") {
      alert("empty input");
    }
    const newSubArray = [];
    const currentDate = new Date();
    for (let i = 0; i < 7; i++) {
      newSubArray.push({
        date: getPreviousDay(currentDate.toISOString().split("T")[0]), // Start with the current date
        status: null,
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    dispatch(
      addHabit({
        id: uniqueId,
        name,
        status: null,
        updateHistory: newSubArray,
      })
    );
    navigate(-1);
  };
  return (
    <div className="d-flex flex-column mb-3">
      <Heading heading={heading} />
      <form onSubmit={(e) => handleForm(e)}>
        <input
          placeholder={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <button className="btn btn-primary m-2">ADD</button>
      </form>
    </div>
  );
};
export default CreateHabit;
