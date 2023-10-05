

const FromPercentageToContamCounter2p0 = ({contaminationCoverage2,contaminationCoverage3}) => {


  let result = -1;

  const contaminationCoverage2ToInt = parseInt(contaminationCoverage2);
  const contaminationCoverage3ToInt = parseInt(contaminationCoverage3);

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
