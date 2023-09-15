const RatingFraction = (props) => {
  const { updateHistory } = props;
  //   console.log("updateHistory :", updateHistory);
  const tmp = updateHistory.filter((data) => data.status == "done");
//   console.log("tmp :", tmp.length);
  //   const rating = updateHistory.filter((data) => data.status == "done");
  return <div className="">0{tmp.length}/07</div>;
};
export default RatingFraction;
