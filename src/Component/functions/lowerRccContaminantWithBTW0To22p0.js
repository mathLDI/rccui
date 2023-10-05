const LowerRccContaminantWithBTW0To22p0 = ({ contaminationCoverage2,
  contaminationCoverage3,
  RccToUsePerColumnWithpavedOrGravelSelected1Props,
  RccToUsePerColumnWithpavedOrGravelSelected2Props }) => {


  const contaminationCoverage2AsInteger = parseInt(contaminationCoverage2);
  const contaminationCoverage3AsInteger = parseInt(contaminationCoverage3);

  let result = 'null';

  if (RccToUsePerColumnWithpavedOrGravelSelected1Props <
    RccToUsePerColumnWithpavedOrGravelSelected2Props &&
    RccToUsePerColumnWithpavedOrGravelSelected1Props <= 2 &&
    contaminationCoverage2AsInteger >= 10 &&
    contaminationCoverage3AsInteger >= 10) {
    result = 3;
  } else if (RccToUsePerColumnWithpavedOrGravelSelected1Props <=
    RccToUsePerColumnWithpavedOrGravelSelected2Props &&
    RccToUsePerColumnWithpavedOrGravelSelected1Props > 2 &&
    contaminationCoverage2AsInteger >= 10 &&
    contaminationCoverage3AsInteger >= 10) {
    result = RccToUsePerColumnWithpavedOrGravelSelected1Props;
  } else if (RccToUsePerColumnWithpavedOrGravelSelected2Props <
    RccToUsePerColumnWithpavedOrGravelSelected1Props &&
    RccToUsePerColumnWithpavedOrGravelSelected2Props <= 2 &&
    contaminationCoverage2AsInteger >= 10 &&
    contaminationCoverage3AsInteger >= 10) {
    result = 3;
  } else if (RccToUsePerColumnWithpavedOrGravelSelected2Props <=
    RccToUsePerColumnWithpavedOrGravelSelected1Props &&
    RccToUsePerColumnWithpavedOrGravelSelected2Props > 2 &&
    contaminationCoverage2AsInteger >= 10 &&
    contaminationCoverage3AsInteger >= 10) {
    result = RccToUsePerColumnWithpavedOrGravelSelected2Props;
  } else {
    //need to add NULL*****************
    result = 'null';
  }


  return result;
};


export default LowerRccContaminantWithBTW0To22p0;
