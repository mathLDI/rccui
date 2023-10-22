

const  CrosswindComponentNoNegOneDigitDash8 = (
    crosswindComponent,
    runwayHeading,
    windDirection,
    airplaneType,
 ) => {

 
   let crosswindComponentNoNeg = crosswindComponent.abs();
   let crosswindComponentNoNegOneDigit = crosswindComponentNoNeg.toStringAsFixed(1);
   let crosswindComponentNoNegOneDigit1 = (crosswindComponentNoNegOneDigit);
 
   if (airplaneType == '1' &&
       crosswindComponentNoNegOneDigit != '0' &&
       windDirection < ('361') &&
       runwayHeading < ('361')) {
     return (crosswindComponentNoNegOneDigit1);
   } else {
     return 0;
   }
 }
 

 export default CrosswindComponentNoNegOneDigitDash8