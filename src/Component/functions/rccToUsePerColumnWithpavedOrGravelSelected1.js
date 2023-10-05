



const RccToUsePerColumnWithpavedOrGravelSelected1 = ({
  dropDownPavedOrGravel,
  RccToUsePerColumnGravel1Props,
  RccToUsePerColumnPaved2Props
}) => {


  let result = -1; // Default value if dropDownPavedOrGravel is not 'GRAVEL' or 'PAVED'

  if (dropDownPavedOrGravel === 'GRAVEL') {
    result = RccToUsePerColumnGravel1Props;
  } else if (dropDownPavedOrGravel === 'PAVED') {
    result = RccToUsePerColumnPaved2Props;
  }


  return parseInt(result);
};

export default RccToUsePerColumnWithpavedOrGravelSelected1;