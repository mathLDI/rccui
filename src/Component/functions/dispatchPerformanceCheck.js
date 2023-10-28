
const DispatchPerformanceCheck = ({ FinalRccToUse2p0Props,
    initialRunwayConditionDescriptionPaved2,
    initialRunwayConditionDescriptionGravel1,
    initialRunwayConditionDescriptionPaved4,
    initialRunwayConditionDescriptionGravel3,
    RccTotalPercentageBasic2p0State, }) => {

    const runwayConditions = [
        '-Dry Snow more than 1.0 in depth',
        '-Wet (“Slippery when wet” runway)',
        '-Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow',
        '-Wet Snow greater than 0.13 in depth',
        '-Slush 0.13 in or less depth',
        '-Ice: -25ºC and colder OAT',
        '-Water Greater than 0.13 in depth',
        '-Ice: -15ºC to -24ºC OAT',
        '-Slush Greater than 0.13 in depth',
        '-Ice: -8ºC to -14ºC OAT',
        '-Dry Snow more than 1.0 in depth',
        '-Wet (“Slippery when wet” runway)',
        '-Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow',
        '-Wet Snow greater than 0.13 in depth',
        '-Slush 0.13 in or less depth',
        '-Ice: -25ºC and colder OAT',
        '-Water Greater than 0.13 in depth',
        '-Ice: -15ºC to -24ºC OAT',
        '-Slush Greater than 0.13 in depth',
        '-Ice: -8ºC to -14ºC OAT'
    ]


    const isDispatchVerificationNeeded =
        RccTotalPercentageBasic2p0State > 25 &&
        FinalRccToUse2p0Props <= 3 &&
        (runwayConditions.includes(initialRunwayConditionDescriptionPaved2) ||
            runwayConditions.includes(initialRunwayConditionDescriptionGravel1) ||
            runwayConditions.includes(initialRunwayConditionDescriptionPaved4) ||
            runwayConditions.includes(initialRunwayConditionDescriptionGravel3)

        );
///modified below with true of false to test - original code: 
// ? 'Dispatch may have to verify the takeoff or Landing distances on the DASH8': '';

    return isDispatchVerificationNeeded
   

};




export default DispatchPerformanceCheck