import { useState } from "react";
import Navbar from './Component/NavBar.jsx';
import SecondPage from './Component/Pages/SecondPage.jsx';
import FirstPageSelector from './Component/Pages/firstPage.jsx';
import ThirdPageTest from './Component/Pages/thirdPage.jsx';

function App() {
  // Log the result to the console
  const [selectedNavItem, setSelectedNavItem] = useState('RCC Calculator');
  const [count, setCount] = useState(0);
  const [aircraftType, setAircraftType] = useState("DHC-8")
  const [runwayConditionDescriptionGravel1, setRunwayConditionDescriptionGravel1] = useState("SELECT GRAVEL CONTAMINANT");
  const [typeOfReport, setTypeOfReport] = useState('RCC Not Provided');

  const [contaminationCoverage2, setContaminationCoverage2] = useState(0);




  // Function to handle navigation item selection
  const handleNavItemClick = (v) => {
    setSelectedNavItem(v);
  }



  return (
    <div>
      <Navbar selectedNavItem={selectedNavItem} onNavItemClick={handleNavItemClick} />

      {selectedNavItem === 'RCC Calculator' && <FirstPageSelector initialRunwayConditionDescriptionGravel1={runwayConditionDescriptionGravel1} runwayConditionDescriptionGravel1Handler={setRunwayConditionDescriptionGravel1}
        initialAircraftType={aircraftType} setAircraftTypeHandler={setAircraftType}
        initialTypeOfReport={typeOfReport} setTypeOfReportHandler={setTypeOfReport}
        initialContaminationCoverage2={contaminationCoverage2} setContaminationCoverage2Handler={setContaminationCoverage2}



      />}

      {selectedNavItem === 'X-Wind' && <SecondPage initialAircraftType={aircraftType} setAircraftTypeHandler={setAircraftType} />
      }
      {selectedNavItem === 'Projects' && <ThirdPageTest countTest={count} countHandler={() => setCount(count + 1)} />}


    </div>
  );
}


export default App;
