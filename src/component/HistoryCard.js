import { useParams } from "react-router-dom";
import { updateHabit } from "../redux/habitSlice";
import { useDispatch, useSelector } from "react-redux";
const HistoryCard = (props) => {
  const { data, i } = props;
  const { habitId } = useParams();
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);
  const handleUpdateHabit = (id, date, currentStatus) => {
    const newstatus = currentStatus == "done" ? "not done" : "done";

    const a1 = habits.map((habit) =>
      habit.id == id
        ? {
            ...habit,
            updateHistory: habit.updateHistory.map((data) =>
              data.date === date ? { ...data, status: newstatus } : data
            ),
          }
        : habit
    );
    dispatch(updateHabit(a1));
  };
  return (
    <div
      className={`border 
        ${
          data.status == "done"
            ? "bg-info"
            : `${data.status == "not done" ? "bg-warning" : "bg-light"}`
        }
       rounded border-3 m-1 p-1 d-flex flex-column justify-content-end
       `}
      key={i}
      onClick={(e) => handleUpdateHabit(habitId, data.date, data.status)}
    >
      <p className="m-2">{data.date}</p>
      <p className="text-uppercase m-1">{data.status}</p>
    </div>
  );
};
export default HistoryCard;
