////this code replaces initialContaminationCoverage3 /////

/////replace initialContaminationCoverage3 with BottomPercentageSelectorProps ////  


const BottomPercentageSelector = ({
    initialDropDownPavedOrGravel,
    initialContaminationCoverage3,
    initialContaminationCoverage4,
}
 

) => {

   
    if (initialDropDownPavedOrGravel === "GRAVEL") {
        return initialContaminationCoverage3;
    }
    else { return initialContaminationCoverage4; }

}

export default BottomPercentageSelector;

