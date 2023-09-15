import { useNavigate } from "react-router-dom";
import Rating from "./Rating";
import RatingFraction from "./RatingFraction";
const Habit = (props) => {
  const { habit } = props;

  const navigate = useNavigate();
  return (
    <div
      className="d-flex flex-row  justify-content-between  border  border-primary-subtle rounded-top rounded-bottom rounded-end border-2 h-50 px-2 my-2 mx-2 w-100"
      onClick={() => navigate(`tracker/${habit.id}`)}
    >
      <div className="text-md-end justify-content-center">{habit.name}</div>
      <Rating updateHistory={habit.updateHistory} />
      <RatingFraction updateHistory={habit.updateHistory} />
      <div className="">weekly</div>
    </div>
  );
};

export default Habit;
