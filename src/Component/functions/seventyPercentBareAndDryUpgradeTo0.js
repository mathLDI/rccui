const SeventyPercentBareAndDryUpgradeTo0 = ({
  RccTotalPercentageBasic2p0State,
  fromPercentageState,
  initialRunwayConditionDescriptionPaved2,
  initialRunwayConditionDescriptionGravel1,
  initialRunwayConditionDescriptionPaved4,
  initialRunwayConditionDescriptionGravel3,
  FinalRccToUse2p0Props,
}) => {
  const isUpgradeRCCNeeded =
    fromPercentageState === 1 &&
    FinalRccToUse2p0Props === 0 &&
    RccTotalPercentageBasic2p0State === 30 &&
    ((initialRunwayConditionDescriptionGravel1 === '-Water on top of 100% Compacted Snow' ||
    initialRunwayConditionDescriptionGravel1 === '-Over Ice: Dry Snow, Wet Snow, Slush, Water' ||
    initialRunwayConditionDescriptionGravel1 === '-Ice: -7ºC and warmer OAT' ||
    initialRunwayConditionDescriptionGravel1 === '-Wet Snow greater than 0.13 in depth over Compacted snow/gravel mix' ||
    initialRunwayConditionDescriptionPaved2 === '-Water on top of 100% Compacted Snow' ||
    initialRunwayConditionDescriptionPaved2 === '-Over Ice: Dry Snow, Wet Snow, Slush, Water' ||
    initialRunwayConditionDescriptionPaved2 === '-Ice: -7ºC and warmer OAT') ||
      initialRunwayConditionDescriptionGravel3 === '-Water on top of 100% Compacted Snow' ||
      initialRunwayConditionDescriptionGravel3 === '-Over Ice: Dry Snow, Wet Snow, Slush, Water' ||
      initialRunwayConditionDescriptionGravel3 === '-Ice: -7ºC and warmer OAT' ||
      initialRunwayConditionDescriptionGravel3 === '-Wet Snow greater than 0.13 in depth over Compacted snow/gravel mix' ||
      initialRunwayConditionDescriptionPaved4 === '-Water on top of 100% Compacted Snow' ||
      initialRunwayConditionDescriptionPaved4 === '-Over Ice: Dry Snow, Wet Snow, Slush, Water' ||
      initialRunwayConditionDescriptionPaved4 === '-Ice: -7ºC and warmer OAT')

  return isUpgradeRCCNeeded;
};


export default SeventyPercentBareAndDryUpgradeTo0

/////"Code 0 does not need to be considered  when the runway is 70% bare and dry or 70% bare and wet,
//in this case upgrade code 0 to 1. Dispatch may have to verify the takeoff or Landing distances on the DASH8";//