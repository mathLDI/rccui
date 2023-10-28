
const RccToUsePerColumnWithpavedOrGravelSelected2 = ({
  initialDropDownPavedOrGravel,
  RccToUsePerColumnGravel3Props,
  RccToUsePerColumnPaved4Props
}) => {

  let result = -1; // Default value if dropDownPavedOrGravel is not 'GRAVEL' or 'PAVED'

  if (initialDropDownPavedOrGravel === 'GRAVEL') {
    result = RccToUsePerColumnGravel3Props;
  } else if (initialDropDownPavedOrGravel === 'PAVED') {
    result = RccToUsePerColumnPaved4Props;
  }



  return parseInt(result);
};

export default RccToUsePerColumnWithpavedOrGravelSelected2;