
const ReturnLowestRwyccBtw1and2 = ({ initialRwycc1, initialRwycc2 }) => {
 
  
  if (initialRwycc1 < initialRwycc2) {
    return initialRwycc1;
  } else {
    return initialRwycc2;
  }
  
};

export default ReturnLowestRwyccBtw1and2;
