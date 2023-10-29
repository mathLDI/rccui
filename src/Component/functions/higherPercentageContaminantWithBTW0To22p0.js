
const HigherPercentageContaminantWithBTW0To22p0 = ({ TopPercentageSelectorProps,
  BottomPercentageSelectorProps, RccToUsePerColumnWithpavedOrGravelSelected1Props, RccToUsePerColumnWithpavedOrGravelSelected2Props }) => {



  const contaminationCoverage2AsInteger = parseInt(TopPercentageSelectorProps);
  const contaminationCoverage3AsInteger = parseInt(BottomPercentageSelectorProps);

  let result = "null";

  if (
    contaminationCoverage2AsInteger > contaminationCoverage3AsInteger &&
    RccToUsePerColumnWithpavedOrGravelSelected1Props <= 2
  ) {
    result = 3;
  } else if (
    contaminationCoverage2AsInteger > contaminationCoverage3AsInteger &&
    RccToUsePerColumnWithpavedOrGravelSelected1Props > 2
  ) {
    result = RccToUsePerColumnWithpavedOrGravelSelected1Props;
  } else if (
    contaminationCoverage3AsInteger > contaminationCoverage2AsInteger &&
    RccToUsePerColumnWithpavedOrGravelSelected2Props <= 2
  ) {
    result = 3;
  } else if (
    contaminationCoverage3AsInteger > contaminationCoverage2AsInteger &&
    RccToUsePerColumnWithpavedOrGravelSelected2Props > 2
  ) {
    result = RccToUsePerColumnWithpavedOrGravelSelected2Props;
  } else {
    result = 'null';
  }

  return result;
};
export default HigherPercentageContaminantWithBTW0To22p0;
