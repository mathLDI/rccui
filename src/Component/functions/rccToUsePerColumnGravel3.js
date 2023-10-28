
const RccToUsePerColumnGravel3 = ({
  initialRunwayConditionDescriptionGravel3,
  RccTotalPercentageBasic2p0State,

}) => {

  const parsedRccTotalPercentageBasic2p0State = parseInt(RccTotalPercentageBasic2p0State, 10);


  let rccValue = -1;

  if (initialRunwayConditionDescriptionGravel3 === 'SELECT GRAVEL CONTAMINANT') {
    rccValue = -1;
  } else if (parsedRccTotalPercentageBasic2p0State
    > 100) {
    rccValue = -1;
  } else if (
    initialRunwayConditionDescriptionGravel3 === 'DRY' ||
    initialRunwayConditionDescriptionGravel3 === 'Compacted snow/gravel mix at all OAT'
  ) {
    rccValue = 6;
  } else if (
    initialRunwayConditionDescriptionGravel3 === '-Frost' ||
    initialRunwayConditionDescriptionGravel3 ===
    '-Wet (Damp and 0.13 in or less depth of water)' ||
    initialRunwayConditionDescriptionGravel3 === '-Wet Snow 0.13 in or less depth' ||
    initialRunwayConditionDescriptionGravel3 === '-Dry Snow 1.0 in or less depth' ||
    initialRunwayConditionDescriptionGravel3 ===
    '-Dry Snow 1.0 in or less depth: -15ºC and Colder OAT'
  ) {
    rccValue = 5;
  } else if (
    initialRunwayConditionDescriptionGravel3 ===
    '-Dry Snow 1.0 in or less depth: Warmer than -15ºC OAT' ||
    initialRunwayConditionDescriptionGravel3 === '-100% Compacted Snow: -15ºC and Colder OAT'
  ) {
    rccValue = 4;
  } else if (
    initialRunwayConditionDescriptionGravel3 ===
    '-100% Compact Snow: Warmer than -15ºC OAT' ||
    initialRunwayConditionDescriptionGravel3 === '-Wet Snow 0.13 in or less depth.' ||
    initialRunwayConditionDescriptionGravel3 === '-Dry Snow more than 1.0 in depth' ||
    initialRunwayConditionDescriptionGravel3 === '-Wet (“Slippery when wet” runway)' ||
    initialRunwayConditionDescriptionGravel3 ===
    '-Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow' ||
    initialRunwayConditionDescriptionGravel3 === '-Wet Snow greater than 0.13 in depth' ||
    initialRunwayConditionDescriptionGravel3 === '-Slush 0.13 in or less depth' ||
    initialRunwayConditionDescriptionGravel3 === '-Ice: -25ºC and colder OAT'
  ) {
    rccValue = 3;
  } else if (
    initialRunwayConditionDescriptionGravel3 === '-Water Greater than 0.13 in depth' ||
    initialRunwayConditionDescriptionGravel3 === '-Ice: -15ºC to -24ºC OAT'
  ) {
    rccValue = 2;
  } else if (
    initialRunwayConditionDescriptionGravel3 === '-Slush Greater than 0.13 in depth' ||
    initialRunwayConditionDescriptionGravel3 === '-Ice: -8ºC to -14ºC OAT'
  ) {
    rccValue = 1;
  } else if (
    initialRunwayConditionDescriptionGravel3 === '-Water on top of 100% Compacted Snow' ||
    initialRunwayConditionDescriptionGravel3 ===
    '-Over Ice: Dry Snow, Wet Snow, Slush, Water' ||
    initialRunwayConditionDescriptionGravel3 === '-Ice: -7ºC and warmer OAT' ||
    initialRunwayConditionDescriptionGravel3 ===
    '-Wet Snow greater than 0.13 in depth over Compacted snow/gravel mix'
  ) {
    rccValue = 0;
  }

  return rccValue;
};

export default RccToUsePerColumnGravel3;



