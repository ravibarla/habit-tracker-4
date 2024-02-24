import { useState } from "react";
import Heading from "./Heading";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { updateHabit } from "../redux/habitSlice";
const EditHabit = (props) => {
  const { habitId } = useParams();
  const habits = useSelector((state) => state.habits);
  const currentHabit = habits.filter((habit) => habit.id == Object(habitId));
  const [heading] = useState("Edit Habit :");
  const [name, setName] = useState(currentHabit[0].name);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const changedName = name;
    const updatedHabit = habits.map((habit) =>
      habit.id == habitId ? { ...habit, name: changedName } : habit
    );
    dispatch(updateHabit(updatedHabit));
    navigate("/");
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
        <button
          className="btn btn-primary m-2"
          type="submit"
          onClick={(e) => handleForm(e)}
        >
          Update
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => navigate(-1)}
          type="button"
        >
          BACK
        </button>
      </form>
    </div>
  );
};
export default EditHabit;
