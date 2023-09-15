import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";
const Rating = (props) => {
  const { updateHistory } = props;

  const tmp = updateHistory.filter((data) => data.status == "done");
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
