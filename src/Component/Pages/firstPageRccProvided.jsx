import { useState } from "react";
import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"
import { CustomButton } from "../Button.jsx";

import ReturnLowestRwyccBtw1and2and3 from '../functions/returnLowestRccBtw1and2and3.js';
import ReturnLowestRwyccBtw1and2 from '../functions/returnLowestRwyccBtw1and2.js';
import CorrectedLandingRwyccToUse from '../functions/correctedLandingRwyccToUse.js';
import SelectedRccToMaxXwindLanding from '../functions/selectedRccToMaxXwindLanding.js';
import SelectedRccToMaxXwindTakeoff from '../functions/selectedRccToMaxXwindTakeoff.js';


const FirstPageRccProvided = () => {

    const rwyccChoices = [6, 5, 4, 3, 2, 1, 0]; 
    const buttonAircraftType = ["DHC-8", "HS-748"];
    const [callDxp] = useState(null);
    const [rwycc1, setRwycc1] = useState(6);
    const [rwycc2, setRwycc2] = useState(6);
    const [rwycc3, setRwycc3] = useState(6);
    const [runwayLength, setRunwayLength] = useState(0);
    const integerRunwayLength = parseInt(runwayLength, 10);
    const [correctedLandingDistance, setCorrectedLandingDistance] = useState(0);
    const integerCorrectedLandingDistance = parseInt(correctedLandingDistance, 10);
    const [resetListBox, setResetListBox] = useState(false);
    const [aircraftType, setAircraftType] = useState("DHC-8")

    const rwycc1Handler = (v) => {
        return setRwycc1(v);
    }

    const rwycc2Handler = (v) => {
        return setRwycc2(v);
    }

    const rwycc3Handler = (v) => {
        return setRwycc3(v);
    }


    const ReturnLowestRwyccBtw1and2Props = ReturnLowestRwyccBtw1and2({
        rwycc1, rwycc2
    })


    const ReturnLowestRwyccBtw1and2and3Props = ReturnLowestRwyccBtw1and2and3({
        rwycc1,
        rwycc2,
        rwycc3,
        integerCorrectedLandingDistance,
        integerRunwayLength,

    })

    const CorrectedLandingRwyccToUseProps = CorrectedLandingRwyccToUse({
        rwycc1,
        integerCorrectedLandingDistance,
        integerRunwayLength,
        ReturnLowestRwyccBtw1and2Props,
        ReturnLowestRwyccBtw1and2and3Props
    })


    const SelectedRccToMaxXwindTakeoffProps = SelectedRccToMaxXwindTakeoff({
        ReturnLowestRwyccBtw1and2and3Props,
        aircraftType

    })



    const resetButtonHandler = () => {
        setResetListBox(true);
        setRwycc1(6);
        setRwycc2(6);
        setRwycc3(6);
        setRunwayLength(0);
        setCorrectedLandingDistance(0)

    };


    const resetListbox1Handler = () => {
        setResetListBox(false);
    };


    const setAircraftTypeHandler = (v) => {

        setAircraftType(v);
    }




    return (

        <div>


            <Card cardTitle={"RWYCC Provided"} status={null}>
                <div>
                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Aircraft type:</div>
                        <ChoiceListbox
                            value={aircraftType}
                            choices={buttonAircraftType}
                            callback={setAircraftTypeHandler} />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>RWYCC: </div>
                        <ChoiceListbox
                            value={rwycc1}
                            choices={rwyccChoices}
                            callback={rwycc1Handler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler} />
                        <ChoiceListbox
                            value={rwycc2}
                            choices={rwyccChoices}
                            callback={rwycc2Handler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler} />
                        <ChoiceListbox
                            value={rwycc3}
                            choices={rwyccChoices}
                            callback={rwycc3Handler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler} />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Corrected TLR Landing Distance:</div>
                        <input
                            type="number"
                            max={99999}
                            min={1000}
                            value={integerCorrectedLandingDistance} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // You can add validation here to ensure the number is not longer than 5 digits
                                if (!isNaN(v) && v >= 0) {
                                    setCorrectedLandingDistance(v); // Update the state with the new value
                                }
                            }}
                        />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Landing Runway Length:</div>
                        <input
                            type="number"
                            max={99999}
                            min={1000}
                            value={integerRunwayLength} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // Ensure the input value is a non-negative number
                                if (!isNaN(v) && v >= 0) {
                                    setRunwayLength(v); // Update the state with the new value
                                }
                            }}
                        />
                    </div>


                    <div className="p-2">
                        <CustomButton
                            title={"Reset RCC and Distances"} onClickCallback={resetButtonHandler} />
                    </div>
                </div>

            </Card>

            <div >
                <div >
                    <Card cardTitle={"Results Takeoff"} status={callDxp}>
                        <div>
                            <div className="flex flex-row justify-between p-2">
                                <div>RCC code:</div>
                                {CorrectedLandingRwyccToUseProps === "Corrected distance is longer than runway length!" || CorrectedLandingRwyccToUseProps === "Enter Distances" ? "" :

                                    <div className={`flex ${ReturnLowestRwyccBtw1and2and3Props === 0 ? 'text-red-500' : ''}`}>
                                        {ReturnLowestRwyccBtw1and2and3Props}
                                    </div>
                                }


                            </div>

                            <div className="flex flex-row justify-between p-2">
                                <div>Max crosswind:</div>
                                <div className={`flex ${ReturnLowestRwyccBtw1and2and3Props === 0 ? 'text-red-500' : ''}`}>
                                    {SelectedRccToMaxXwindTakeoffProps}
                                </div>
                            </div>

                        </div>

                    </Card>

                </div>

                <div>
                    <Card cardTitle={"Results Landing"} status={callDxp}>
                        <div>
                            <div className="flex flex-row justify-between p-2">
                                <div>RCC code:</div>
                                <div className={`flex ${CorrectedLandingRwyccToUseProps === 0 ? 'text-red-500' : ''}`}>
                                    <CorrectedLandingRwyccToUse
                                        rwycc1={rwycc1} // Pass rwycc1 as a prop
                                        integerCorrectedLandingDistance={integerCorrectedLandingDistance}
                                        integerRunwayLength={integerRunwayLength}
                                        ReturnLowestRwyccBtw1and2Props={ReturnLowestRwyccBtw1and2Props}
                                        ReturnLowestRwyccBtw1and2and3Props={ReturnLowestRwyccBtw1and2and3Props}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row justify-between p-2">
                                <div>Max crosswind:</div>
                                <div className={`flex ${CorrectedLandingRwyccToUseProps === 0 ? 'text-red-500' : ''}`}>
                                    <SelectedRccToMaxXwindLanding
                                        CorrectedLandingRwyccToUseProps={CorrectedLandingRwyccToUseProps}
                                        aircraftType={aircraftType}
                                    />

                                </div>
                            </div>

                        </div>

                        {CorrectedLandingRwyccToUseProps === true &&
                            (<div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                                Corrected distance is longer than runway length!
                            </div>)}

                        {CorrectedLandingRwyccToUseProps === false &&
                            (<div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                                Enter Distances
                            </div>)}

                    </Card>

                </div>


            </div>




        </div>




    );


}

export default FirstPageRccProvided;
