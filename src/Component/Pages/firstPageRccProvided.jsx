import { useState } from "react";
import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"
import { CustomButton } from "../Button.jsx";
import PropTypes from "prop-types";


import ReturnLowestRwyccBtw1and2and3 from '../functions/returnLowestRccBtw1and2and3.js';
import ReturnLowestRwyccBtw1and2 from '../functions/returnLowestRwyccBtw1and2.js';
import CorrectedLandingRwyccToUse from '../functions/correctedLandingRwyccToUse.js';
import SelectedRccToMaxXwindLanding from '../functions/selectedRccToMaxXwindLanding.js';
import SelectedRccToMaxXwindTakeoff from '../functions/selectedRccToMaxXwindTakeoff.js';


const FirstPageRccProvided = ({ initialAircraftType, setAircraftTypeHandler,
    initialRwycc1, setRwycc1Handler, initialRwycc2, setRwycc2Handler, initialRwycc3, setRwycc3Handler,
    initialCorrectedLandingDistance, setCorrectedLandingDistanceHandler, initialRunwayLength, setRunwayLengthHandler,
}) => {

    const rwyccChoices = [6, 5, 4, 3, 2, 1, 0];
    const buttonAircraftType = ["DHC-8", "HS-748"];
    const [callDxp] = useState(null);
    const [resetListBox, setResetListBox] = useState(false);
    ///////
    const integerRunwayLength = parseInt(initialRunwayLength, 10);
    const integerCorrectedLandingDistance = parseInt(initialCorrectedLandingDistance, 10);

    const ReturnLowestRwyccBtw1and2Props = ReturnLowestRwyccBtw1and2({
        initialRwycc1, initialRwycc2
    })

    const ReturnLowestRwyccBtw1and2and3Props = ReturnLowestRwyccBtw1and2and3({
        initialRwycc1,
        initialRwycc2,
        initialRwycc3,
        integerCorrectedLandingDistance,
        integerRunwayLength,
    })

    const CorrectedLandingRwyccToUseProps = CorrectedLandingRwyccToUse({
        initialRwycc1,
        integerCorrectedLandingDistance,
        integerRunwayLength,
        ReturnLowestRwyccBtw1and2Props,
        ReturnLowestRwyccBtw1and2and3Props
    })


    const SelectedRccToMaxXwindTakeoffProps = SelectedRccToMaxXwindTakeoff({
        ReturnLowestRwyccBtw1and2and3Props,
        initialAircraftType
    })


    const resetButtonHandler = () => {
        setResetListBox(true);
        setRwycc1Handler(6);
        setRwycc2Handler(6);
        setRwycc3Handler(6);
        setRunwayLengthHandler(0);
        setCorrectedLandingDistanceHandler(0)
        setAircraftTypeHandler("DHC-8");
    };


    const resetListbox1Handler = () => {
        setResetListBox(false);
    };



    return (

        <div>


            <Card cardTitle={"RWYCC Provided"} status={null}>
                <div>
                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Aircraft type:</div>
                        <ChoiceListbox
                            value={initialAircraftType}
                            choices={buttonAircraftType}
                            callback={setAircraftTypeHandler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler} />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>RWYCC: </div>
                        <ChoiceListbox
                            value={initialRwycc1}
                            choices={rwyccChoices}
                            callback={setRwycc1Handler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler} />
                        <ChoiceListbox
                            value={initialRwycc2}
                            choices={rwyccChoices}
                            callback={setRwycc2Handler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler} />
                        <ChoiceListbox
                            value={initialRwycc3}
                            choices={rwyccChoices}
                            callback={setRwycc3Handler}
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
                                    setCorrectedLandingDistanceHandler(v); // Update the state with the new value
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
                                    setRunwayLengthHandler(v); // Update the state with the new value
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
                                        initialRwycc1={initialRwycc1} // Pass rwycc1 as a prop
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
                                        initialAircraftType={initialAircraftType}
                                    />

                                </div>
                            </div>

                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            {CorrectedLandingRwyccToUseProps === true &&
                                (<div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                                    Corrected distance is longer than runway length!
                                </div>)}
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            {CorrectedLandingRwyccToUseProps === false &&
                                (<div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                                    Enter Distances
                                </div>)}
                        </div>





                    </Card>

                </div>


            </div>




        </div>




    );


}

export default FirstPageRccProvided;


FirstPageRccProvided.propTypes = {
    initialAircraftType: PropTypes.string,
    setAircraftTypeHandler: PropTypes.string,
    initialRwycc1: PropTypes.number,
    setRwycc1Handler: PropTypes.number,
    initialRwycc2: PropTypes.number,
    setRwycc2Handler: PropTypes.number,
    initialRwycc3: PropTypes.number,
    setRwycc3Handler: PropTypes.number,
    initialCorrectedLandingDistance: PropTypes.number,
    setCorrectedLandingDistanceHandler: PropTypes.number,
    initialRunwayLength: PropTypes.number,
    setRunwayLengthHandler: PropTypes.number,
};
