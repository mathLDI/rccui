

const SeventyPercentBareAndDryUpgradeTo0 = ({
    RccTotalPercentageBasic2p0State,
    fromPercentageState,
    runwayConditionDescriptionPaved2,
    runwayConditionDescriptionGravel1,
    runwayConditionDescriptionPaved4,
    runwayConditionDescriptionGravel3,
    FinalRccToUse2p0Props, }) => {


        if ((fromPercentageState === 1 &&
        FinalRccToUse2p0Props === 0 &&
        RccTotalPercentageBasic2p0State === 30) &&
    ((runwayConditionDescriptionGravel1 === '-Water on top of 100% Compacted Snow' ||
    runwayConditionDescriptionGravel1 ===
                '-Over Ice: Dry Snow, Wet Snow, Slush, Water' ||
                runwayConditionDescriptionGravel1 === '-Ice: -7ºC and warmer OAT' ||
                runwayConditionDescriptionGravel1 ===
                '-Wet Snow greater than 0.13 in depth over Compacted snow/gravel mix' ||
                runwayConditionDescriptionPaved2 ===
                '-Water on top of 100% Compacted Snow' ||
                runwayConditionDescriptionPaved2 ===
                '-Over Ice: Dry Snow, Wet Snow, Slush, Water' ||
                runwayConditionDescriptionPaved2 === '-Ice: -7ºC and warmer OAT') ||
                runwayConditionDescriptionGravel3 === '-Water on top of 100% Compacted Snow' ||
                runwayConditionDescriptionGravel3 ===
            '-Over Ice: Dry Snow, Wet Snow, Slush, Water' ||
            runwayConditionDescriptionGravel3 === '-Ice: -7ºC and warmer OAT' ||
            runwayConditionDescriptionGravel3 ===
            '-Wet Snow greater than 0.13 in depth over Compacted snow/gravel mix' ||
            runwayConditionDescriptionPaved4 === '-Water on top of 100% Compacted Snow' ||
            runwayConditionDescriptionPaved4 ===
            '-Over Ice: Dry Snow, Wet Snow, Slush, Water' ||
            runwayConditionDescriptionPaved4 === '-Ice: -7ºC and warmer OAT')) {
  return "Code 0 does not need to be considered  when the runway is 70% bare and dry or 70% bare and wet, in this case upgrade code 0 to 1. Dispatch may have to verify the takeoff or Landing distances on the DASH8";
} else {
  return ('');
    }
}

export default SeventyPercentBareAndDryUpgradeTo0