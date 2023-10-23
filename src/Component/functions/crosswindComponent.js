

const CrosswindComponent = ({
    integerWindDirection,
    integerRunwayHeading,
    integerWindSpeed,
}) => {
    let degree = integerWindDirection - integerRunwayHeading;
    let x = ((integerWindSpeed) * ((Math.sin(degree * (3.14159265 / 180.0)))));
    let y = x.toString();
  
    if (integerWindDirection > 0.0 && integerRunwayHeading > 0.0) {
      return y;
    } else {
      return 0;
    }
};

export default CrosswindComponent;
