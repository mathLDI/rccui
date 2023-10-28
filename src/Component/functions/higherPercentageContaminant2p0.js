

const HigherPercentageContaminant2p0 = ({ initialContaminationCoverage2, initialContaminationCoverage3,
    RccToUsePerColumnWithpavedOrGravelSelected1Props, RccToUsePerColumnWithpavedOrGravelSelected2Props }) => {
  
    let result = "null"; // Default value if dropDownPavedOrGravel is not 'GRAVEL' or 'PAVED'
  
    if (
      RccToUsePerColumnWithpavedOrGravelSelected1Props === -1 ||
      RccToUsePerColumnWithpavedOrGravelSelected2Props === -1
    ) {
      result = 'Contaminant not selected';
    } else if (initialContaminationCoverage2 > initialContaminationCoverage3) {
      result = RccToUsePerColumnWithpavedOrGravelSelected1Props;
    } else if (initialContaminationCoverage3 > initialContaminationCoverage2) {
      result = RccToUsePerColumnWithpavedOrGravelSelected2Props;
    } else {
      result = '333';
    }
  
    return result;
  
  };

export default HigherPercentageContaminant2p0;
