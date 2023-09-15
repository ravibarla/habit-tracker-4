import { useParams, useNavigate } from "react-router-dom";
import Heading from "./Heading";
import HistoryCard from "./HistoryCard";
import { useSelector, useDispatch } from "react-redux";

import { removeHabit } from "../redux/habitSlice";
const HabitTracker = (props) => {
  const { habitId } = useParams();
  const habits = useSelector((state) => state.habits);
  const selectedHabit = habits.filter((habit) => habit.id == habitId);

  const dispatch = useDispatch();

  // debugger;
  const navigate = useNavigate();
  const removeHabitHandle = () => {
    dispatch(removeHabit(habitId));
    navigate(-1);
  };
  return (
    <div>
      {selectedHabit.length > 0 && (
        <>
          <Heading heading={selectedHabit[0].name} />
          <div className="d-flex justify-content-center">
            {selectedHabit[0].updateHistory.map((data, i) => (
              <HistoryCard data={data} />
            ))}
          </div>
          <button
            onClick={() => navigate(-1)}
            type="button"
            class="btn btn-secondary rounded d-inline-flex justify-content-center m-2 p-2"
          >
            back
          </button>
          <button
            onClick={() => removeHabitHandle()}
            type="button"
            className="btn btn-danger rounded d-inline-flex justify-content-center m-2 p-2"
          >
            Remove
          </button>
        </>
      )}
    </div>
  );
};
export default HabitTracker;
