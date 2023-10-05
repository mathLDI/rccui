

const RccToUsePerColumnGravel1 = ({
  runwayConditionDescriptionGravel1,
  RccTotalPercentageBasic2p0State,
}) => {

  const parsedRccTotalPercentageBasic2p0State = parseInt(RccTotalPercentageBasic2p0State, 10);


  let rccValue = -1;

  if (runwayConditionDescriptionGravel1 === 'SELECT GRAVEL CONTAMINANT') {
    rccValue = -1;
  } else if (parsedRccTotalPercentageBasic2p0State
    > 100) {
    rccValue = -1;
  } else if (
    runwayConditionDescriptionGravel1 === 'DRY' ||
    runwayConditionDescriptionGravel1 === 'Compacted snow/gravel mix at all OAT'
  ) {
    rccValue = 6;
  } else if (
    runwayConditionDescriptionGravel1 === '-Frost' ||
    runwayConditionDescriptionGravel1 ===
    '-Wet (Damp and 0.13 in or less depth of water)' ||
    runwayConditionDescriptionGravel1 === '-Wet Snow 0.13 in or less depth' ||
    runwayConditionDescriptionGravel1 === '-Dry Snow 1.0 in or less depth' ||
    runwayConditionDescriptionGravel1 ===
    '-Dry Snow 1.0 in or less depth: -15ºC and Colder OAT'
  ) {
    rccValue = 5;
  } else if (
    runwayConditionDescriptionGravel1 ===
    '-Dry Snow 1.0 in or less depth: Warmer than -15ºC OAT' ||
    runwayConditionDescriptionGravel1 === '-100% Compacted Snow: -15ºC and Colder OAT'
  ) {
    rccValue = 4;
  } else if (
    runwayConditionDescriptionGravel1 ===
    '-100% Compact Snow: Warmer than -15ºC OAT' ||
    runwayConditionDescriptionGravel1 === '-Wet Snow 0.13 in or less depth.' ||
    runwayConditionDescriptionGravel1 === '-Dry Snow more than 1.0 in depth' ||
    runwayConditionDescriptionGravel1 === '-Wet (“Slippery when wet” runway)' ||
    runwayConditionDescriptionGravel1 ===
    '-Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow' ||
    runwayConditionDescriptionGravel1 === '-Wet Snow greater than 0.13 in depth' ||
    runwayConditionDescriptionGravel1 === '-Slush 0.13 in or less depth' ||
    runwayConditionDescriptionGravel1 === '-Ice: -25ºC and colder OAT'
  ) {
    rccValue = 3;
  } else if (
    runwayConditionDescriptionGravel1 === '-Water Greater than 0.13 in depth' ||
    runwayConditionDescriptionGravel1 === '-Ice: -15ºC to -24ºC OAT'
  ) {
    rccValue = 2;
  } else if (
    runwayConditionDescriptionGravel1 === '-Slush Greater than 0.13 in depth' ||
    runwayConditionDescriptionGravel1 === '-Ice: -8ºC to -14ºC OAT'
  ) {
    rccValue = 1;
  } else if (
    runwayConditionDescriptionGravel1 === '-Water on top of 100% Compacted Snow' ||
    runwayConditionDescriptionGravel1 ===
    '-Over Ice: Dry Snow, Wet Snow, Slush, Water' ||
    runwayConditionDescriptionGravel1 === '-Ice: -7ºC and warmer OAT' ||
    runwayConditionDescriptionGravel1 ===
    '-Wet Snow greater than 0.13 in depth over Compacted snow/gravel mix'
  ) {
    rccValue = 0;
  }

  return rccValue;
};

export default RccToUsePerColumnGravel1;



