

const ReturnLowestRwyccBtw1and2and3 = ({
  initialRwycc1,
  initialRwycc2,
  initialRwycc3,
    integerCorrectedLandingDistance,
    integerRunwayLength,
}) => {
    

    const list = [initialRwycc1, initialRwycc2, initialRwycc3];
  
    if (integerCorrectedLandingDistance > integerRunwayLength) {
      return "";
    } else {
      return list.reduce((curr, next) => (curr < next ? curr : next));
    }
  }


 export default ReturnLowestRwyccBtw1and2and3;