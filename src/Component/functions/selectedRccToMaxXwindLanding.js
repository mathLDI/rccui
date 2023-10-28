

const SelectedRccToMaxXwindLanding = ({ CorrectedLandingRwyccToUseProps, initialAircraftType }) => {

  const DHC8 = [6, "36 kts", 5, "30 kts", 4, "25 kts", 3, "20 kts", 2, "15 kts", 1, "10 kts", 0, "NO GO"];
  const HS748 = [6, "30 kts", 5, "30 kts", 4, "25 kts", 3, "20 kts", 2, "15 kts", 1, "10 kts", 0, "NO GO"];

  const selectedArray = initialAircraftType === "DHC-8" ? DHC8 : HS748;

  const index = selectedArray.indexOf(CorrectedLandingRwyccToUseProps);

  if (index === -1) {
    return "";
  }

  // Return the value from the array that follows the index
  return selectedArray[index + 1];
};

export default SelectedRccToMaxXwindLanding;

