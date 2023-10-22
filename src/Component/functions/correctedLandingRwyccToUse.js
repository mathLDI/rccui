


const CorrectedLandingRwyccToUse = ({ 
  rwycc1,
  integerCorrectedLandingDistance,
  integerRunwayLength,
  ReturnLowestRwyccBtw1and2Props,
  ReturnLowestRwyccBtw1and2and3Props, }

) => {

  if (integerCorrectedLandingDistance > integerRunwayLength) {
    return "Corrected distance is longer than runway length!";
  } else if ((integerCorrectedLandingDistance <=
    integerRunwayLength * 0.3333) &&
    (integerCorrectedLandingDistance !== 0 && integerRunwayLength !== 0)) {
    return rwycc1;
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
    return "Enter Distances";
  }
}

export default CorrectedLandingRwyccToUse;
