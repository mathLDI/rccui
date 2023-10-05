
const LowerRccContaminant2p0 = ({ RccToUsePerColumnWithpavedOrGravelSelected1Props,
  RccToUsePerColumnWithpavedOrGravelSelected2Props }) => {

  let result = 'null';

  if (RccToUsePerColumnWithpavedOrGravelSelected1Props === -1 ||
    RccToUsePerColumnWithpavedOrGravelSelected2Props === -1) {
    result = 'null';
  } else if (RccToUsePerColumnWithpavedOrGravelSelected1Props <
    RccToUsePerColumnWithpavedOrGravelSelected2Props) {
    result = RccToUsePerColumnWithpavedOrGravelSelected1Props;
  } else if (RccToUsePerColumnWithpavedOrGravelSelected2Props <
    RccToUsePerColumnWithpavedOrGravelSelected1Props) {
    result = RccToUsePerColumnWithpavedOrGravelSelected2Props;
  } else {
    result = RccToUsePerColumnWithpavedOrGravelSelected2Props;
  }

  return result;
};

export default LowerRccContaminant2p0;
