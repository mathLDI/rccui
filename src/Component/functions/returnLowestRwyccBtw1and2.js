
const ReturnLowestRwyccBtw1and2 = ({ rwycc1, rwycc2 }) => {
 
  
  if (rwycc1 < rwycc2) {
    return rwycc1;
  } else {
    return rwycc2;
  }
  
};

export default ReturnLowestRwyccBtw1and2;
