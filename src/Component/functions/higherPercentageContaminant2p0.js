

const HigherPercentageContaminant2p0 = ({ contaminationCoverage2, contaminationCoverage3,
    RccToUsePerColumnWithpavedOrGravelSelected1Props, RccToUsePerColumnWithpavedOrGravelSelected2Props }) => {
  
    let result = "null"; // Default value if dropDownPavedOrGravel is not 'GRAVEL' or 'PAVED'
  
    if (
      RccToUsePerColumnWithpavedOrGravelSelected1Props === -1 ||
      RccToUsePerColumnWithpavedOrGravelSelected2Props === -1
    ) {
      result = 'Contaminant not selected';
    } else if (contaminationCoverage2 > contaminationCoverage3) {
      result = RccToUsePerColumnWithpavedOrGravelSelected1Props;
    } else if (contaminationCoverage3 > contaminationCoverage2) {
      result = RccToUsePerColumnWithpavedOrGravelSelected2Props;
    } else {
      result = '333';
    }
  
    return result;
  
  };

export default HigherPercentageContaminant2p0;
