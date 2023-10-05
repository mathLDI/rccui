
const RccToUsePerColumnWithpavedOrGravelSelected2 = ({
  dropDownPavedOrGravel,
  RccToUsePerColumnGravel3Props,
  RccToUsePerColumnPaved4Props
}) => {

  let result = -1; // Default value if dropDownPavedOrGravel is not 'GRAVEL' or 'PAVED'

  if (dropDownPavedOrGravel === 'GRAVEL') {
    result = RccToUsePerColumnGravel3Props;
  } else if (dropDownPavedOrGravel === 'PAVED') {
    result = RccToUsePerColumnPaved4Props;
  }



  return parseInt(result);
};

export default RccToUsePerColumnWithpavedOrGravelSelected2;