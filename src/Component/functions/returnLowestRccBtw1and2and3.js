

const ReturnLowestRwyccBtw1and2and3 = ({
    rwycc1,
    rwycc2,
    rwycc3,
    integerCorrectedLandingDistance,
    integerRunwayLength,
}) => {
    

    const list = [rwycc1, rwycc2, rwycc3];
  
    if (integerCorrectedLandingDistance > integerRunwayLength) {
      return "null";
    } else {
      return list.reduce((curr, next) => (curr < next ? curr : next));
    }
  }


 export default ReturnLowestRwyccBtw1and2and3;