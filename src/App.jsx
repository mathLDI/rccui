import { useState } from "react";
import Navbar from './Component/NavBar.jsx';
import SecondPage from './Component/Pages/SecondPage.jsx';
import FirstPageSelector from './Component/Pages/firstPage.jsx';


function App() {
  const [selectedNavItem, setSelectedNavItem] = useState([]);
  const [aircraftType, setAircraftType] = useState("DHC-8")
  const [runwayConditionDescriptionGravel1, setRunwayConditionDescriptionGravel1] = useState("SELECT GRAVEL CONTAMINANT");
  const [runwayConditionDescriptionGravel3, setRunwayConditionDescriptionGravel3] = useState("SELECT GRAVEL CONTAMINANT");
  const [runwayConditionDescriptionPaved2, setRunwayConditionDescriptionPaved2] = useState("SELECT PAVED CONTAMINANT");
  const [runwayConditionDescriptionPaved4, setRunwayConditionDescriptionPaved4] = useState("SELECT PAVED CONTAMINANT");
  const [dropDownPavedOrGravel, setDropDownPavedOrGravel] = useState("GRAVEL");
  const [typeOfReport, setTypeOfReport] = useState('RCC Not Provided');
  const [contaminationCoverage2, setContaminationCoverage2] = useState(0);
  const [contaminationCoverage3, setContaminationCoverage3] = useState(0);


  const [contaminationCoverage1, setContaminationCoverage1] = useState(0);
  const [contaminationCoverage4, setContaminationCoverage4] = useState(0);


  const [rwycc1, setRwycc1] = useState(6);
  const [rwycc2, setRwycc2] = useState(6);
  const [rwycc3, setRwycc3] = useState(6);
  const [correctedLandingDistance, setCorrectedLandingDistance] = useState(0);
  const [runwayLength, setRunwayLength] = useState(0);
  const [runwayHeading, setRunwayHeading] = useState(0);
  const [windDirection, setWindDirection] = useState(0);

  const [windSpeed, setWindSpeed] = useState(0);




  const handleNavItemClick = (v) => {
    if (selectedNavItem.includes(v)) {
      setSelectedNavItem((prev) => prev.filter((item) => item !== v));
    } else {
      setSelectedNavItem((prev) => [...prev, v]);
    }
  };


  return (
    <div>
      <Navbar selectedNavItem={selectedNavItem} onNavItemClick={handleNavItemClick} />
      <div className="flex-col">
        <div className="h-screen bg-amber-500 justify-center items-center">
          <div className="flex flex-wrap justify-center">

            {selectedNavItem.includes("RCC Calculator") && (
              <div className="flex-1">
                <FirstPageSelector
                  initialRunwayConditionDescriptionGravel1={runwayConditionDescriptionGravel1}
                  runwayConditionDescriptionGravel1Handler={setRunwayConditionDescriptionGravel1}
                  initialRunwayConditionDescriptionGravel3={runwayConditionDescriptionGravel3}
                  setRunwayConditionDescriptionGravel3Handler={setRunwayConditionDescriptionGravel3}
                  initialRunwayConditionDescriptionPaved2={runwayConditionDescriptionPaved2}
                  setRunwayConditionDescriptionPaved2Handler={setRunwayConditionDescriptionPaved2}
                  initialRunwayConditionDescriptionPaved4={runwayConditionDescriptionPaved4}
                  setRunwayConditionDescriptionPaved4Handler={setRunwayConditionDescriptionPaved4}
                  initialAircraftType={aircraftType} setAircraftTypeHandler={setAircraftType}
                  initialTypeOfReport={typeOfReport} setTypeOfReportHandler={setTypeOfReport}
                  initialDropDownPavedOrGravel={dropDownPavedOrGravel} setDropDownPavedOrGravelHandler={setDropDownPavedOrGravel}
                  initialContaminationCoverage2={contaminationCoverage2} setContaminationCoverage2Handler={setContaminationCoverage2}
                  initialContaminationCoverage3={contaminationCoverage3} setContaminationCoverage3Handler={setContaminationCoverage3}
                  initialContaminationCoverage1={contaminationCoverage1} setContaminationCoverage1Handler={setContaminationCoverage1}
                  initialContaminationCoverage4={contaminationCoverage4} setContaminationCoverage4Handler={setContaminationCoverage4}
                  initialRwycc1={rwycc1} setRwycc1Handler={setRwycc1}
                  initialRwycc2={rwycc2} setRwycc2Handler={setRwycc2}
                  initialRwycc3={rwycc3} setRwycc3Handler={setRwycc3}
                  initialCorrectedLandingDistance={correctedLandingDistance}
                  setCorrectedLandingDistanceHandler={setCorrectedLandingDistance}
                  initialRunwayLength={runwayLength} setRunwayLengthHandler={setRunwayLength}
                  initialSelectedNavItem={selectedNavItem}
                />
              </div>
            )}



            {selectedNavItem.includes('X-Wind') && (
              <div className="flex-1">
                <SecondPage
                  initialAircraftType={aircraftType} setAircraftTypeHandler={setAircraftType}
                  initialRunwayHeading={runwayHeading} setRunwayHeadingHandler={setRunwayHeading}
                  initialWindDirection={windDirection} setWindDirectionHandler={setWindDirection}
                  initialWindSpeed={windSpeed} setWindSpeedHandler={setWindSpeed}
                />
              </div>
            )}


          </div>
        </div>
      </div>
    </div>

  );
}


export default App;
