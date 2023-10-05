

const RccToUsePerColumnPaved4 = ({
    runwayConditionDescriptionPaved4,
    RccTotalPercentageBasic2p0State
  }) => {
  
    const parsedRccTotalPercentageBasic2p0State = parseInt(RccTotalPercentageBasic2p0State, 10);
  
  
    let rccValue = -1;
  
  
    if (runwayConditionDescriptionPaved4 === 'SELECT PAVED CONTAMINANT') {
      rccValue = -1;
    } else if (parsedRccTotalPercentageBasic2p0State > 100) {
      console.log('Condition met: rccTotalPercentageBasic2p0 > 100');
      rccValue = -1;
    } else if (runwayConditionDescriptionPaved4 === 'DRY' ||
      runwayConditionDescriptionPaved4 === 'Compacted snow/gravel mix at all OAT') {
      rccValue = 6;
    } else if (runwayConditionDescriptionPaved4 === '-Frost' ||
      runwayConditionDescriptionPaved4 === '-Wet (Damp and 0.13 in or less depth of water)' ||
      runwayConditionDescriptionPaved4 === '-Wet Snow 0.13 in or less depth' ||
      runwayConditionDescriptionPaved4 === '-Dry Snow 1.0 in or less depth' ||
      runwayConditionDescriptionPaved4 === '-Dry Snow 1.0 in or less depth: -15ºC and Colder OAT') {
      rccValue = 5;
    } else if (runwayConditionDescriptionPaved4 === '-Dry Snow 1.0 in or less depth: Warmer than -15ºC OAT' ||
      runwayConditionDescriptionPaved4 === '-100% Compacted Snow: -15ºC and Colder OAT') {
      rccValue = 4;
    } else if (runwayConditionDescriptionPaved4 === '-100% Compact Snow: Warmer than -15ºC OAT' ||
      runwayConditionDescriptionPaved4 === '-Wet Snow 0.13 in or less depth.' ||
      runwayConditionDescriptionPaved4 === '-Dry Snow more than 1.0 in depth' ||
      runwayConditionDescriptionPaved4 === '-Wet (“Slippery when wet” runway)' ||
      runwayConditionDescriptionPaved4 === '-Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow' ||
      runwayConditionDescriptionPaved4 === '-Wet Snow greater than 0.13 in depth' ||
      runwayConditionDescriptionPaved4 === '-Slush 0.13 in or less depth' ||
      runwayConditionDescriptionPaved4 === '-Ice: -25ºC and colder OAT') {
      rccValue = 3;
    } else if (runwayConditionDescriptionPaved4 === '-Water Greater than 0.13 in depth' ||
      runwayConditionDescriptionPaved4 === '-Ice: -15ºC to -24ºC OAT') {
      rccValue = 2;
    } else if (runwayConditionDescriptionPaved4 === '-Slush Greater than 0.13 in depth' ||
      runwayConditionDescriptionPaved4 === '-Ice: -8ºC to -14ºC OAT') {
      rccValue = 1;
    } else if (runwayConditionDescriptionPaved4 === '-Water on top of 100% Compacted Snow' ||
      runwayConditionDescriptionPaved4 === '-Over Ice: Dry Snow, Wet Snow, Slush, Water' ||
      runwayConditionDescriptionPaved4 === '-Ice: -7ºC and warmer OAT') {
      rccValue = 0;
    }
  
  
    return rccValue;
  };
  

export default RccToUsePerColumnPaved4;
