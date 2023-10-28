

const RccToUsePerColumnPaved4 = ({
  initialRunwayConditionDescriptionPaved4,
    RccTotalPercentageBasic2p0State
  }) => {
  
    const parsedRccTotalPercentageBasic2p0State = parseInt(RccTotalPercentageBasic2p0State, 10);
  
  
    let rccValue = -1;
  
  
    if (initialRunwayConditionDescriptionPaved4 === 'SELECT PAVED CONTAMINANT') {
      rccValue = -1;
    } else if (parsedRccTotalPercentageBasic2p0State > 100) {
      console.log('Condition met: rccTotalPercentageBasic2p0 > 100');
      rccValue = -1;
    } else if (initialRunwayConditionDescriptionPaved4 === 'DRY' ||
    initialRunwayConditionDescriptionPaved4 === 'Compacted snow/gravel mix at all OAT') {
      rccValue = 6;
    } else if (initialRunwayConditionDescriptionPaved4 === '-Frost' ||
    initialRunwayConditionDescriptionPaved4 === '-Wet (Damp and 0.13 in or less depth of water)' ||
    initialRunwayConditionDescriptionPaved4 === '-Wet Snow 0.13 in or less depth' ||
    initialRunwayConditionDescriptionPaved4 === '-Dry Snow 1.0 in or less depth' ||
    initialRunwayConditionDescriptionPaved4 === '-Dry Snow 1.0 in or less depth: -15ºC and Colder OAT') {
      rccValue = 5;
    } else if (initialRunwayConditionDescriptionPaved4 === '-Dry Snow 1.0 in or less depth: Warmer than -15ºC OAT' ||
    initialRunwayConditionDescriptionPaved4 === '-100% Compacted Snow: -15ºC and Colder OAT') {
      rccValue = 4;
    } else if (initialRunwayConditionDescriptionPaved4 === '-100% Compact Snow: Warmer than -15ºC OAT' ||
    initialRunwayConditionDescriptionPaved4 === '-Wet Snow 0.13 in or less depth.' ||
    initialRunwayConditionDescriptionPaved4 === '-Dry Snow more than 1.0 in depth' ||
    initialRunwayConditionDescriptionPaved4 === '-Wet (“Slippery when wet” runway)' ||
    initialRunwayConditionDescriptionPaved4 === '-Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow' ||
    initialRunwayConditionDescriptionPaved4 === '-Wet Snow greater than 0.13 in depth' ||
    initialRunwayConditionDescriptionPaved4 === '-Slush 0.13 in or less depth' ||
    initialRunwayConditionDescriptionPaved4 === '-Ice: -25ºC and colder OAT') {
      rccValue = 3;
    } else if (initialRunwayConditionDescriptionPaved4 === '-Water Greater than 0.13 in depth' ||
    initialRunwayConditionDescriptionPaved4 === '-Ice: -15ºC to -24ºC OAT') {
      rccValue = 2;
    } else if (initialRunwayConditionDescriptionPaved4 === '-Slush Greater than 0.13 in depth' ||
    initialRunwayConditionDescriptionPaved4 === '-Ice: -8ºC to -14ºC OAT') {
      rccValue = 1;
    } else if (initialRunwayConditionDescriptionPaved4 === '-Water on top of 100% Compacted Snow' ||
    initialRunwayConditionDescriptionPaved4 === '-Over Ice: Dry Snow, Wet Snow, Slush, Water' ||
    initialRunwayConditionDescriptionPaved4 === '-Ice: -7ºC and warmer OAT') {
      rccValue = 0;
    }
  
  
    return rccValue;
  };
  

export default RccToUsePerColumnPaved4;
