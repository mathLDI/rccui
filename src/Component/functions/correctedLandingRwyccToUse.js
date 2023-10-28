
const CorrectedLandingRwyccToUse = ({ 
  initialRwycc1,
  integerCorrectedLandingDistance,
  integerRunwayLength,
  ReturnLowestRwyccBtw1and2Props,
  ReturnLowestRwyccBtw1and2and3Props, }

) => {

  if (integerCorrectedLandingDistance > integerRunwayLength) {
    return true;
  } else if ((integerCorrectedLandingDistance <=
    integerRunwayLength * 0.3333) &&
    (integerCorrectedLandingDistance !== 0 && integerRunwayLength !== 0)) {
    return initialRwycc1;
  } else if ((integerCorrectedLandingDistance >
    integerRunwayLength * 0.3333 &&
    integerCorrectedLandingDistance < integerRunwayLength * 0.6666) &&
    (integerCorrectedLandingDistance !== 0 && integerRunwayLength !== 0)) {
    return ReturnLowestRwyccBtw1and2Props;
  } else if ((integerCorrectedLandingDistance >=
    integerRunwayLength * 0.6666) &&
    (integerCorrectedLandingDistance !== 0 && integerRunwayLength !== 0)) {
    return ReturnLowestRwyccBtw1and2and3Props;
  } else {
    return false;
  }
}

export default CorrectedLandingRwyccToUse;
