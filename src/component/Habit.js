import { useNavigate } from "react-router-dom";
import Rating from "./Rating";
import RatingFraction from "./RatingFraction";
import { useDispatch } from "react-redux";
import { removeHabit } from "../redux/habitSlice";
const Habit = (props) => {
  //destructuring habit passsed as props
  const dispatch = useDispatch();

  const { habit } = props;
  const navigate = useNavigate();
  const removeHabitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeHabit(habit.id));
  };
  const handleEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`edit/${habit.id}`);
  };
  return (
    <div
      className="d-flex flex-column  border    rounded-top rounded-bottom rounded-end border-2 m-2 p-4 h-50 "
      style={{ backgroundColor: "#B4B4B8",borderColor:"#F2EFE5"}}
      onClick={() => navigate(`tracker/${habit.id}`)}
    >
      <div
        className="d-flex flex-row  justify-content-between  border   rounded-top rounded-bottom rounded-end border-2 h-75 px-2 my-2 mx-2 w-100"
        style={{ backgroundColor: "#F2EFE5" ,borderColor:"#F2EFE5"}}
        // onClick={() => navigate(`tracker/${habit.id}`)}
      >
        <div className="text-md-end justify-content-center">{habit.name}</div>
        {/* to render the ratings in icons*/}
        <Rating updateHistory={habit.updateHistory} />
        {/* to render the rating in fractyion */}
        <RatingFraction updateHistory={habit.updateHistory} />

        <div className="">weekly</div>
      </div>
      <div className="d-flex flex-column px-2 my-1 mx-1 pb-3 ps-3">
        <div className="d-flex flex-row ">
          <button
            type="button"
            className="btn btn-warning rounded d-inline-flex justify-content-center m-2 p-2"
            onClick={(e) => handleEdit(e)}
          >
            edit
          </button>
          <button
            onClick={(e) => removeHabitHandler(e)}
            type="button"
            className="btn btn-danger rounded d-inline-flex justify-content-center m-2 p-2"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Habit;
