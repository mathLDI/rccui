import { useState } from "react";
import { ChoiceListbox } from "./Component/ListBox";
import { Card } from "./Component/Card";



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

const dropdownPercentCoverageTopList = [0, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100,];

const dropdownPercentCoverageLowerList = [0, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100,];

  const [aircraftType, setAircraftType] = useState("DHC-8");

  const [runwayConditionDescriptionGravel1, setRunwayConditionDescriptionGravel1] = useState("SELECT GRAVEL CONTAMINANT");

  const [runwayConditionDescriptionPaved2, setRunwayConditionDescriptionPaved2] = useState("SELECT PAVED CONTAMINANT");

  const [runwayConditionDescriptionGravel3, setRunwayConditionDescriptionGravel3] = useState("SELECT GRAVEL CONTAMINANT");

  const [runwayConditionDescriptionPaved4, setRunwayConditionDescriptionPaved4] = useState("SELECT PAVED CONTAMINANT");

  const dropdownPercentCoverageTop = [0, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100,];

  const dropdownPercentCoverageLower = [0, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100,];

  ////////////////////////////////

///create dropdownPercentCoverageTop && dropdownPercentCoverageLower states///

  ///////////////////////////

  const [showAlert] = useState(false);

  //TODO Set all the callbacks from ChoiceListBox components and state to update the interface
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

  const [callDxp] = useState(null);

  //TODO insert rest of the logic


  const runwayTypeHandler = (v) => {
    setDropDownPavedOrGravel(v);
  }

  const aircraftTypeHandler = (v) => {
    setAircraftType(v);
  }


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
                  <ChoiceListbox choices={dropdownPercentCoverageTopList} width={"w-28"} />
                </div>
              </div>
            )}


            {runwayConditionDescriptionPaved2 !== "SELECT PAVED CONTAMINANT" && dropDownPavedOrGravel === "PAVED" && (
              <div className="flex flex-row justify-between items-center p-2 mb-2">
                <div>Contaminant 2: </div>
                <div className="flex flex-row gap-4">
                  <ChoiceListbox choices={runwayConditionDescriptionPaved4List} callback={runwayConditionDescriptionPaved4Handler} width={"w-96"} />
                  <ChoiceListbox choices={dropdownPercentCoverageLowerList} width={"w-28"} />
                </div>
              </div>
            )}

            {dropDownPavedOrGravel === "GRAVEL" && (
              <div className="flex flex-row justify-between items-center p-2">
                <div>Contaminant 1: </div>
                <div className="flex flex-row gap-4">
                  <ChoiceListbox choices={runwayConditionDescriptionGravel1List} callback={runwayConditionDescriptionGravel1Handler} width={"w-96"} />
                  <ChoiceListbox choices={dropdownPercentCoverageTopList} width={"w-28"} />
                </div>
              </div>
            )}


            {runwayConditionDescriptionGravel1 !== "SELECT GRAVEL CONTAMINANT" && dropDownPavedOrGravel === "GRAVEL" && (
              <div className="flex flex-row justify-between items-center p-2 mb-2">
                <div>Contaminant 2: </div>
                <div className="flex flex-row gap-4">
                  <ChoiceListbox choices={runwayConditionDescriptionGravel3List} callback={runwayConditionDescriptionGravel3Handler} width={"w-96"} />
                  <ChoiceListbox choices={dropdownPercentCoverageLowerList} width={"w-28"} />
                </div>
              </div>
            )}


          </div>


        </Card>

        <Card cardTitle={"Results"} status={callDxp}>
          <div>
            <div className="flex flex-row justify-between p-2">
              <div>RCC code:</div>
              <div>0</div>
            </div>
            <div className="flex flex-row justify-between p-2">
              <div>Max crosswind:</div>
              <div>0 kts</div>
            </div>
            {showAlert && <div className="flex flex-row bg-red-500 rounded-md p-2 text-white">Please contact dispatch</div>}
          </div>
        </Card>


      </div>

    </div>
  );

}

export default App;
