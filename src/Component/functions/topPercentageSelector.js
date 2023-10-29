
////this code replaces initialContaminationCoverage2 /////

/////replace initialContaminationCoverage2 with TopPercentageSelectorProps ////  

const TopPercentageSelector = ({
    initialDropDownPavedOrGravel,
    initialContaminationCoverage1,
    initialContaminationCoverage2,
}) => {

    if (initialDropDownPavedOrGravel === "GRAVEL") {
        return initialContaminationCoverage1;
    }
    else { return initialContaminationCoverage2; }

}

export default TopPercentageSelector;

