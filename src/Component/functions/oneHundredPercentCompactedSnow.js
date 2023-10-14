

const OneHundredPercentCompactedSnow = ({ runwayConditionDescriptionPaved2, dropDownPavedOrGravel, contaminationCoverage2 }) => {

    if (
        (runwayConditionDescriptionPaved2 !== "SELECT PAVED CONTAMINANT" && dropDownPavedOrGravel === "PAVED"

            && (runwayConditionDescriptionPaved2 === '-Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow' ||

                runwayConditionDescriptionPaved2 === '-100% Compacted Snow: -15ºC and Colder OAT' ||

                runwayConditionDescriptionPaved2 === '-100% Compact Snow: Warmer than -15ºC OAT' ||

                runwayConditionDescriptionPaved2 === '-Water on top of 100% Compacted Snow') &&

            (

                contaminationCoverage2 === 0 || contaminationCoverage2 === 0 || contaminationCoverage2 < 100

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
