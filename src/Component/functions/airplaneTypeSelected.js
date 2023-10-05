///////probably not usefull anuymore since I can use the string DHC-8 AND HS-748  directly///


function airplaneTypeSelected(buttonAircraftType) {
    if (buttonAircraftType == "DHC-8") {
      return 'DASH8';
    } else if (buttonAircraftType == 2) {
      return 'HS748';
    } else if (buttonAircraftType == 3) {
      return 'B190';
    } else if (buttonAircraftType == 4) {
      return 'BE10';
    } else {
      return '';
    }
  }