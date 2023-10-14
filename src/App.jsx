import { useState } from "react";
import { ChoiceListbox } from "./Component/ListBox";
import { Card } from "./Component/Card";

import RccTotalPercentageBasic2p0 from './Component/functions/RccTotalPercentageBasic2p0.js';
import FromPercentageToContamCounter2p0 from './Component/functions/fromPercentageToContamCounter2p0.js';
import LowerRccContaminant2p0 from './Component/functions/lowerRccContaminant2p0.js';
import LowerRccContaminantWithBTW0To22p0 from './Component/functions/lowerRccContaminantWithBTW0To22p0.js';
import HigherPercentageContaminant2p0 from './Component/functions/higherPercentageContaminant2p0.js';
import HigherPercentageContaminantWithBTW0To22p0 from './Component/functions/higherPercentageContaminantWithBTW0To22p0.js';
import RccToUsePerColumnWithpavedOrGravelSelected1 from './Component/functions/rccToUsePerColumnWithpavedOrGravelSelected1.js';
import RccToUsePerColumnWithpavedOrGravelSelected2 from './Component/functions/rccToUsePerColumnWithpavedOrGravelSelected2.js';
import RccToUsePerColumnGravel1 from './Component/functions/rccToUsePerColumnGravel1.js';
import RccToUsePerColumnGravel3 from './Component/functions/rccToUsePerColumnGravel3.js';
import RccToUsePerColumnPaved2 from './Component/functions/rccToUsePerColumnPaved2.js';
import RccToUsePerColumnPaved4 from './Component/functions/rccToUsePerColumnPaved4.js';
import FinalRccToUse2p0 from './Component/functions/finalRccToUse2p0.js';
import SelectedRccToMaxXwindDash8 from './Component/functions/selectedRccToMaxXwindDash82p0.js';
import SelectedRccToMaxXwindHS748 from './Component/functions/selectedRccToMaxXwindHS748.js';
import DispatchPerformanceCheck from './Component/functions/dispatchPerformanceCheck.js';
import SeventyPercentBareAndDryUpgradeTo0 from './Component/functions/seventyPercentBareAndDryUpgradeTo0.js';



function App() {


  const buttonAircraftType = ["DHC-8", "HS-748"];

  

  const runwayConditionDescriptionGravel1List = ["SELECT GRAVEL CONTAMINANT", "-Frost", "-Dry Snow 1.0 in or less depth: -15ºC and Colder OAT",
    "-Dry Snow 1.0 in or less depth: Warmer than -15ºC OAT", "-Dry Snow more than 1.0 in depth", "-Wet Snow 0.13 in or less depth.",
    "-Wet Snow greater than 0.13 in depth over Compacted snow/gravel mix", "-Water Greater than 0.13 in depth",
    "-Wet (Damp and 0.13 in or less depth of water)", "-Slush 0.13 in or less depth", "-Slush Greater than 0.13 in depth",
    "-Ice: -25ºC and colder OAT", "-Ice: -15ºC to -24ºC OAT", "-Ice: -8ºC to -14ºC OAT",
    "-Ice: -7ºC and warmer OAT", "-Over Ice: Dry Snow, Wet Snow, Slush, Water"]

  const runwayConditionDescriptionPaved2List = ["SELECT PAVED CONTAMINANT", "-Frost", "-Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow",
    "-Dry Snow more than 1.0 in depth", "-Dry Snow 1.0 in or less depth", "-Wet Snow 0.13 in or less depth", "-Wet Snow greater than 0.13 in depth",
    "-100% Compacted Snow: -15ºC and Colder OAT", "-100% Compact Snow: Warmer than -15ºC OAT", "-Water Greater than 0.13 in depth",
    "-Water on top of 100% Compacted Snow", "-Wet (Damp and 0.13 in or less depth of water)", "-Wet (“Slippery when wet” runway)",
    "-Slush 0.13 in or less depth", "-Slush Greater than 0.13 in depth", "-Ice: -25ºC and colder OAT", "-Ice: -15ºC to -24ºC OAT",
    "-Ice: -8ºC to -14ºC OAT", "-Ice: -7ºC and warmer OAT", "-Over Ice: Dry Snow, Wet Snow, Slush, Water"]

  const runwayConditionDescriptionGravel3List = ["SELECT GRAVEL CONTAMINANT", "-Frost", "-Dry Snow 1.0 in or less depth: -15ºC and Colder OAT",
    "-Dry Snow 1.0 in or less depth: Warmer than -15ºC OAT", "-Dry Snow more than 1.0 in depth", "-Wet Snow 0.13 in or less depth.",
    "-Wet Snow greater than 0.13 in depth over Compacted snow/gravel mix", "-Water Greater than 0.13 in depth",
    "-Wet (Damp and 0.13 in or less depth of water)", "-Slush 0.13 in or less depth", "-Slush Greater than 0.13 in depth",
    "-Ice: -25ºC and colder OAT", "-Ice: -15ºC to -24ºC OAT", "-Ice: -8ºC to -14ºC OAT",
    "-Ice: -7ºC and warmer OAT", "-Over Ice: Dry Snow, Wet Snow, Slush, Water"]

  const runwayConditionDescriptionPaved4List = ["SELECT PAVED CONTAMINANT", "-Frost", "-Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow",
    "-Dry Snow more than 1.0 in depth", "-Dry Snow 1.0 in or less depth", "-Wet Snow 0.13 in or less depth", "-Wet Snow greater than 0.13 in depth",
    "-100% Compacted Snow: -15ºC and Colder OAT", "-100% Compact Snow: Warmer than -15ºC OAT", "-Water Greater than 0.13 in depth",
    "-Water on top of 100% Compacted Snow", "-Wet (Damp and 0.13 in or less depth of water)", "-Wet (“Slippery when wet” runway)",
    "-Slush 0.13 in or less depth", "-Slush Greater than 0.13 in depth", "-Ice: -25ºC and colder OAT", "-Ice: -15ºC to -24ºC OAT",
    "-Ice: -8ºC to -14ºC OAT", "-Ice: -7ºC and warmer OAT", "-Over Ice: Dry Snow, Wet Snow, Slush, Water"]

  const contaminationCoverage2List = [0, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100,];

  const contaminationCoverage3List = [0, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100,];

  const [aircraftType, setAircraftType] = useState("DHC-8");

  const [runwayConditionDescriptionGravel1, setRunwayConditionDescriptionGravel1] = useState("SELECT GRAVEL CONTAMINANT");

  const [runwayConditionDescriptionPaved2, setRunwayConditionDescriptionPaved2] = useState("SELECT PAVED CONTAMINANT");

  const [runwayConditionDescriptionGravel3, setRunwayConditionDescriptionGravel3] = useState("SELECT GRAVEL CONTAMINANT");

  const [runwayConditionDescriptionPaved4, setRunwayConditionDescriptionPaved4] = useState("SELECT PAVED CONTAMINANT");



  const [contaminationCoverage2, setContaminationCoverage2] = useState(0);

  const dropdownPercentCoverageTopHandler = (v) => {
    console.log(v);
    setContaminationCoverage2(v)
  }

  const [contaminationCoverage3, setContaminationCoverage3] = useState(0);

  const dropdownPercentCoverageLowerHandler = (v) => {
    console.log(v);
    setContaminationCoverage3(v)
  }

  const [showAlert] = useState(false);

  const [showContaminant2, setShowContaminant2] = useState(false);

  const [dropDownPavedOrGravel, setDropDownPavedOrGravel] = useState("GRAVEL");

  const runwayConditionDescriptionGravel1Handler = (v) => {
    setRunwayConditionDescriptionGravel1(v);
  }

  const runwayConditionDescriptionPaved2Handler = (v) => {
    setRunwayConditionDescriptionPaved2(v);
  }

  const runwayConditionDescriptionGravel3Handler = (v) => {
    setRunwayConditionDescriptionGravel3(v);
  }


  const runwayConditionDescriptionPaved4Handler = (v) => {
    setRunwayConditionDescriptionPaved4(v);
  }

  const [callDxp] = useState(true);

  //TODO insert rest of the logic


  const runwayTypeHandler = (v) => {
    setDropDownPavedOrGravel(v);
    setContaminationCoverage2(0);
    setContaminationCoverage3(0);

  }

  const aircraftTypeHandler = (v) => {

    console.log(v);
    setAircraftType(v);
  }


  ////////////////////////////////////PROPS//////////////////////////////////////////////


  const RccTotalPercentageBasic2p0State = RccTotalPercentageBasic2p0({
    contaminationCoverage2, contaminationCoverage3
  });

  const fromPercentageState = FromPercentageToContamCounter2p0({
    contaminationCoverage2, contaminationCoverage3
  });

  const RccToUsePerColumnGravel1Props = RccToUsePerColumnGravel1({
    runwayConditionDescriptionGravel1,
    RccTotalPercentageBasic2p0State
  })

  const RccToUsePerColumnPaved2Props = RccToUsePerColumnPaved2({
    runwayConditionDescriptionPaved2,
    RccTotalPercentageBasic2p0State
  })


  const RccToUsePerColumnPaved4Props = RccToUsePerColumnPaved4({
    runwayConditionDescriptionPaved4,
    RccTotalPercentageBasic2p0State
  })

  const RccToUsePerColumnGravel3Props = RccToUsePerColumnGravel3({
    runwayConditionDescriptionGravel3,
    RccTotalPercentageBasic2p0State
  })

  const RccToUsePerColumnWithpavedOrGravelSelected1Props = RccToUsePerColumnWithpavedOrGravelSelected1({
    dropDownPavedOrGravel,
    RccToUsePerColumnGravel1Props,
    RccToUsePerColumnPaved2Props
  })

  const RccToUsePerColumnWithpavedOrGravelSelected2Props = RccToUsePerColumnWithpavedOrGravelSelected2({
    dropDownPavedOrGravel,
    RccToUsePerColumnGravel3Props,
    RccToUsePerColumnPaved4Props
  })


  const LowerRccContaminant2p0Props = LowerRccContaminant2p0({
    RccToUsePerColumnWithpavedOrGravelSelected1Props,
    RccToUsePerColumnWithpavedOrGravelSelected2Props
  })


  const LowerRccContaminantWithBTW0To22p0Props = LowerRccContaminantWithBTW0To22p0({
    contaminationCoverage2,
    contaminationCoverage3,
    RccToUsePerColumnWithpavedOrGravelSelected1Props,
    RccToUsePerColumnWithpavedOrGravelSelected2Props
  })

  const HigherPercentageContaminant2p0Props = HigherPercentageContaminant2p0({
    contaminationCoverage2, contaminationCoverage3,
    RccToUsePerColumnWithpavedOrGravelSelected1Props,
    RccToUsePerColumnWithpavedOrGravelSelected2Props
  })


  const HigherPercentageContaminantWithBTW0To22p0Props = HigherPercentageContaminantWithBTW0To22p0({
    contaminationCoverage2,
    contaminationCoverage3, RccToUsePerColumnWithpavedOrGravelSelected1Props, RccToUsePerColumnWithpavedOrGravelSelected2Props
  })

  const FinalRccToUse2p0Props = FinalRccToUse2p0({
    RccTotalPercentageBasic2p0State,
    fromPercentageState,
    contaminationCoverage2,
    contaminationCoverage3,
    LowerRccContaminant2p0Props,
    LowerRccContaminantWithBTW0To22p0Props,
    HigherPercentageContaminant2p0Props,
    HigherPercentageContaminantWithBTW0To22p0Props,
    RccToUsePerColumnWithpavedOrGravelSelected1Props,
    RccToUsePerColumnWithpavedOrGravelSelected2Props,
  })


  const DispatchPerformanceCheckProps = DispatchPerformanceCheck({

    FinalRccToUse2p0Props,
    runwayConditionDescriptionPaved2,
    runwayConditionDescriptionGravel1,
    runwayConditionDescriptionPaved4,
    runwayConditionDescriptionGravel3,
    RccTotalPercentageBasic2p0State,
  })


  const SeventyPercentBareAndDryUpgradeTo0Props = SeventyPercentBareAndDryUpgradeTo0({
    RccTotalPercentageBasic2p0State,
    fromPercentageState,
    runwayConditionDescriptionPaved2,
    runwayConditionDescriptionGravel1,
    runwayConditionDescriptionPaved4,
    runwayConditionDescriptionGravel3,
    FinalRccToUse2p0Props
  })


  const SelectedRccToMaxXwindHS748Props = SelectedRccToMaxXwindHS748({
    FinalRccToUse2p0Props
  })

  console.log("SelectedRccToMaxXwindHS748Props:", SelectedRccToMaxXwindHS748Props);

  const SelectedRccToMaxXwindDash8Props = SelectedRccToMaxXwindDash8({
    FinalRccToUse2p0Props
  })

  console.log("SelectedRccToMaxXwindDash8Props:", SelectedRccToMaxXwindDash8Props);



  return (
    <div className="grid h-screen md:place-items-center bg-gray-100 justify-center">

      <div className="container mx-auto pt-10 md:pt-0 bg-gray-100">

        <Card cardTitle={"Calculator"} status={null}>

          <div>
            <div className="flex flex-row justify-between items-center p-2">
              <div>Aircraft type:</div>
              <ChoiceListbox choices={buttonAircraftType} callback={aircraftTypeHandler} />
            </div>

            <div className="flex flex-row justify-between items-center p-2">
              <div>Runway type: </div>
              <ChoiceListbox choices={["GRAVEL", "PAVED"]} callback={runwayTypeHandler} />
            </div>

            {dropDownPavedOrGravel === "PAVED" && (
              <div className="flex flex-row justify-between items-center p-2">
                <div>Contaminant 1: </div>
                <div className="flex flex-row gap-4">
                  <ChoiceListbox choices={runwayConditionDescriptionPaved2List} callback={runwayConditionDescriptionPaved2Handler} width={"w-96"} />

                  <ChoiceListbox choices={contaminationCoverage2List} callback={dropdownPercentCoverageTopHandler} width={"w-28"} />
                </div>
              </div>
            )}


            {runwayConditionDescriptionPaved2 !== "SELECT PAVED CONTAMINANT" && dropDownPavedOrGravel === "PAVED"
              && runwayConditionDescriptionPaved2 !== '-Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow' &&
              runwayConditionDescriptionPaved2 !== '-100% Compacted Snow: -15ºC and Colder OAT' &&
              runwayConditionDescriptionPaved2 !== '-100% Compact Snow: Warmer than -15ºC OAT' &&
              runwayConditionDescriptionPaved2 !== '-Water on top of 100% Compacted Snow'
              && (
                <div className="flex flex-row justify-between items-center p-2 mb-2">
                  <div>Contaminant 2: </div>
                  <div className="flex flex-row gap-4">
                    <ChoiceListbox choices={runwayConditionDescriptionPaved4List} callback={runwayConditionDescriptionPaved4Handler} width={"w-96"} />
                    <ChoiceListbox choices={contaminationCoverage3List} callback={dropdownPercentCoverageLowerHandler} width={"w-28"} />
                  </div>
                </div>
              )}

            {dropDownPavedOrGravel === "GRAVEL" && (
              <div className="flex flex-row justify-between items-center p-2">
                <div>Contaminant 1: </div>
                <div className="flex flex-row gap-4">
                  <ChoiceListbox choices={runwayConditionDescriptionGravel1List} callback={runwayConditionDescriptionGravel1Handler} width={"w-96"} />
                  <ChoiceListbox choices={contaminationCoverage2List} callback={dropdownPercentCoverageTopHandler} width={"w-28"} />
                </div>
              </div>
            )}


            {runwayConditionDescriptionGravel1 !== "SELECT GRAVEL CONTAMINANT" && dropDownPavedOrGravel === "GRAVEL" && (
              <div className="flex flex-row justify-between items-center p-2 mb-2">
                <div>Contaminant 2: </div>
                <div className="flex flex-row gap-4">
                  <ChoiceListbox choices={runwayConditionDescriptionGravel3List} callback={runwayConditionDescriptionGravel3Handler} width={"w-96"} />
                  <ChoiceListbox choices={contaminationCoverage3List} callback={dropdownPercentCoverageLowerHandler} width={"w-28"} />
                </div>
              </div>
            )}


          </div>


        </Card>


        <Card cardTitle={"Results"} status={callDxp}>
          <div>
            <div className="flex flex-row justify-between p-2">
              <div>RCC code:</div>
              <div>
                <FinalRccToUse2p0
                  RccTotalPercentageBasic2p0State={RccTotalPercentageBasic2p0State}
                  fromPercentageState={fromPercentageState}
                  contaminationCoverage2={contaminationCoverage2}
                  contaminationCoverage3={contaminationCoverage3}
                  LowerRccContaminant2p0Props={LowerRccContaminant2p0Props}
                  LowerRccContaminantWithBTW0To22p0Props={LowerRccContaminantWithBTW0To22p0Props}
                  HigherPercentageContaminant2p0Props={HigherPercentageContaminant2p0Props}
                  HigherPercentageContaminantWithBTW0To22p0Props={HigherPercentageContaminantWithBTW0To22p0Props}
                  RccToUsePerColumnWithpavedOrGravelSelected1Props={RccToUsePerColumnWithpavedOrGravelSelected1Props}
                  RccToUsePerColumnWithpavedOrGravelSelected2Props={RccToUsePerColumnWithpavedOrGravelSelected2Props}
                /></div>

            </div>


            <div className="flex flex-row justify-between p-2">
              <div>Max crosswind:</div>
              {(aircraftType === "DHC-8") ? (
                <div>
                  {SelectedRccToMaxXwindDash8Props}
                </div>
              ) : <div> {SelectedRccToMaxXwindHS748Props}</div>

              }
            </div>
            {showAlert && <div className="flex flex-row bg-red-500 rounded-md p-2 text-white">Please contact dispatch</div>}

          </div>



          {DispatchPerformanceCheckProps === true && (<div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
            Dispatch may have to verify the takeoff or Landing distances on the DASH8
          </div>)}



          {SeventyPercentBareAndDryUpgradeTo0Props === true && (<div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
            Code 0 does not need to be considered  when the runway is 70% bare and dry or 70% bare and wet, in this case upgrade code 0 to 1. Dispatch may have to verify the takeoff or Landing distances on the DASH8
          </div>)}


          {(runwayConditionDescriptionPaved2.includes("100") && contaminationCoverage2 !== 100) ?
            (
              <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                Runway must be completely covered with Compacted Snow to select this contaminant. If that is the case, select 100%
              </div>
            ) : null

          }


        </Card>


      </div >

    </div >
  );

}

export default App;
