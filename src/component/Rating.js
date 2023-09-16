import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";
const Rating = (props) => {
  //destructuring the update history
  const { updateHistory } = props;
  // filtering the updateHistory with statues "done"
  const tmp = updateHistory.filter((data) => data.status == "done");

  //function to render the rating in icons based on some criteria
  const handleReview = () => {
    if (tmp.length == 7) {
      return faStar;
    } else if (tmp.length > 2 && tmp.length < 7) {
      return faStarHalfStroke;
    } else {
      return faEmptyStar;
    }
  };

  return (
    <div className="">
      <FontAwesomeIcon icon={handleReview()} />
    </div>
  );
};
export default Rating;
