

const FromPercentageToContamCounter2p0 = ({TopPercentageSelectorProps,BottomPercentageSelectorProps}) => {


  let result = -1;

  const contaminationCoverage2ToInt = parseInt(TopPercentageSelectorProps);
  const contaminationCoverage3ToInt = parseInt(BottomPercentageSelectorProps);

  if (contaminationCoverage2ToInt === 0 && contaminationCoverage3ToInt === 0) {
    result = 0;
  } else if (contaminationCoverage2ToInt !== 0 && contaminationCoverage3ToInt === 0) {
    result = 1;
  } else if (contaminationCoverage2ToInt === 0 && contaminationCoverage3ToInt !== 0) {
    result = 1;
  } else if (contaminationCoverage2ToInt !== 0 && contaminationCoverage3ToInt !== 0) {
    result = 2;
  } else {
    result = 0;
  }

  return result;

};

export default FromPercentageToContamCounter2p0;
