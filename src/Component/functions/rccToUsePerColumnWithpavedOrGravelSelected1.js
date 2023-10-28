



const RccToUsePerColumnWithpavedOrGravelSelected1 = ({
  initialDropDownPavedOrGravel,
  RccToUsePerColumnGravel1Props,
  RccToUsePerColumnPaved2Props
}) => {


  let result = -1; // Default value if dropDownPavedOrGravel is not 'GRAVEL' or 'PAVED'

  if (initialDropDownPavedOrGravel === 'GRAVEL') {
    result = RccToUsePerColumnGravel1Props;
  } else if (initialDropDownPavedOrGravel === 'PAVED') {
    result = RccToUsePerColumnPaved2Props;
  }


  return parseInt(result);
};

export default RccToUsePerColumnWithpavedOrGravelSelected1;