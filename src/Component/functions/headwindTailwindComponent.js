
const HeadwindTailwindComponent = ({
    integerWindDirection,
    integerRunwayHeading,
    integerWindSpeed,
}) => {

    let degree = integerWindDirection - integerRunwayHeading;

    if (integerWindDirection > 0 && integerRunwayHeading > 0) {
        return ((integerWindSpeed) * ((Math.cos(degree * (3.14159265 / 180.0)))));
    } else {
        return 0;
    }
}

export default HeadwindTailwindComponent;
