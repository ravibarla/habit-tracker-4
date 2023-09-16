const RatingFraction = (props) => {
  // destructuring the update history
  const { updateHistory } = props;
  //filtering the updatehistory based on the status done
  const tmp = updateHistory.filter((data) => data.status == "done");
  return <div className="">0{tmp.length}/07</div>;
};
export default RatingFraction;
