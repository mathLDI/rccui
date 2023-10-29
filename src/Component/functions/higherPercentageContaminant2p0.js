

const HigherPercentageContaminant2p0 = ({ TopPercentageSelectorProps, BottomPercentageSelectorProps,
    RccToUsePerColumnWithpavedOrGravelSelected1Props, RccToUsePerColumnWithpavedOrGravelSelected2Props }) => {
  
    let result = "null"; // Default value if dropDownPavedOrGravel is not 'GRAVEL' or 'PAVED'
  
    if (
      RccToUsePerColumnWithpavedOrGravelSelected1Props === -1 ||
      RccToUsePerColumnWithpavedOrGravelSelected2Props === -1
    ) {
      result = 'Contaminant not selected';
    } else if (TopPercentageSelectorProps > BottomPercentageSelectorProps) {
      result = RccToUsePerColumnWithpavedOrGravelSelected1Props;
    } else if (BottomPercentageSelectorProps > TopPercentageSelectorProps) {
      result = RccToUsePerColumnWithpavedOrGravelSelected2Props;
    } else {
      result = '333';
    }
  
    return result;
  
  };

export default HigherPercentageContaminant2p0;
