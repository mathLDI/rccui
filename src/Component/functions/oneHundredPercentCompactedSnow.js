

const OneHundredPercentCompactedSnow = ({ initialRunwayConditionDescriptionPaved2, initialDropDownPavedOrGravel, TopPercentageSelectorProps }) => {

    if (
        (initialRunwayConditionDescriptionPaved2 !== "SELECT PAVED CONTAMINANT" && initialDropDownPavedOrGravel === "PAVED"

            && (initialRunwayConditionDescriptionPaved2 === '-Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow' ||

            initialRunwayConditionDescriptionPaved2 === '-100% Compacted Snow: -15ºC and Colder OAT' ||

            initialRunwayConditionDescriptionPaved2 === '-100% Compact Snow: Warmer than -15ºC OAT' ||

            initialRunwayConditionDescriptionPaved2 === '-Water on top of 100% Compacted Snow') &&

            (

                TopPercentageSelectorProps === 0 || TopPercentageSelectorProps === 0 || TopPercentageSelectorProps < 100

            )

        )
    ) {

        return true;
    }
    return false;
};

export default OneHundredPercentCompactedSnow;


//////
// &&
//runwayConditionDescriptionPaved2 !== '-100% Compact Snow: Warmer than -15ºC OAT' &&
//runwayConditionDescriptionPaved2 !== '-Water on top of 100% Compacted Snow'
//&& contaminationCoverage2 !== 0 && contaminationCoverage2 !== 100 &&
