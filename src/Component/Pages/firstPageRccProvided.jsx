import { useState } from "react";
import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"
import { CustomButton } from "../Button.jsx";

import ReturnLowestRwyccBtw1and2and3 from '../functions/returnLowestRccBtw1and2and3.js';


const FirstPageRccProvided = () => {

    const rwyccChoices = ["0", "1", "2", "3", "4", "5", "6"];
    const buttonAircraftType = ["DHC-8", "HS-748"];
    const [showAlert] = useState(false);
    const [callDxp] = useState(null);
    const [rwycc1, setRwycc1] = useState(6);
    const [rwycc2, setRwycc2] = useState(6);
    const [rwycc3, setRwycc3] = useState(6);
    const [landingRunwayLength, setLandingRunwayLength] = useState(0);
    const [correctedTlrUsingRwyCC, setCorrectedTlrUsingRwyCC] = useState(0);

    const ReturnLowestRwyccBtw1and2and3Props = ReturnLowestRwyccBtw1and2and3(
        { rwycc1, rwycc2, rwycc3, landingRunwayLength, correctedTlrUsingRwyCC }
    )




    const rwycc1Handler = (v) => {
        return setRwycc1(v);
    }

    const rwycc2Handler = (v) => {
        return setRwycc2(v);
    }

    const rwycc3Handler = (v) => {
        return setRwycc3(v);
    }



    //////////////////////////////


    /////////////////////////////////////////////////



    return (

        <div>


            <Card cardTitle={"RWYCC Provided"} status={null}>
                <div>
                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Aircraft type:</div>
                        <ChoiceListbox choices={buttonAircraftType} callback={null} />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>RWYCC: </div>
                        <ChoiceListbox
                            value={rwycc1}
                            choices={rwyccChoices}
                            callback={rwycc1Handler} />
                        <ChoiceListbox
                            value={rwycc2}
                            choices={rwyccChoices}
                            callback={rwycc2Handler} />
                        <ChoiceListbox
                            value={rwycc3}
                            choices={rwyccChoices}
                            callback={rwycc3Handler} />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Corrected TLR Landing Distance:</div>
                        <input
                            type="number"
                            max={99999}
                            min={0}
                            value={correctedTlrUsingRwyCC} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // You can add validation here to ensure the number is not longer than 5 digits
                                if (v.length <= 5) {
                                    setCorrectedTlrUsingRwyCC(v); // Update the state with the new value
                                }
                            }}
                        />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Landing Runway Length:</div>
                        <input
                            type="number"
                            max={99999}
                            min={0}
                            value={landingRunwayLength} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // You can add validation here to ensure the number is not longer than 5 digits
                                if (v.length <= 5) {
                                    setLandingRunwayLength(v); // Update the state with the new value
                                }
                            }}
                        />
                    </div>


                    <div className="p-2">
                        <CustomButton
                            title={"Reset Contaminant"} onClickCallback={null} />
                    </div>
                </div>

            </Card>

            <Card cardTitle={"Results"} status={callDxp}>
                <div>
                    <div className="flex flex-row justify-between p-2">
                        <div>RCC code:</div>
                        <div>
                            <ReturnLowestRwyccBtw1and2and3
                                rwycc1={rwycc1}
                                rwycc2={rwycc2}
                                rwycc3={rwycc3}
                                landingRunwayLength={landingRunwayLength}
                                correctedTlrUsingRwyCC={correctedTlrUsingRwyCC}

                            />
                        </div>

                    </div>

                    <div className="flex flex-row justify-between p-2">
                        <div>Max crosswind:</div>

                    </div>
                    {showAlert && <div className="flex flex-row bg-red-500 rounded-md p-2 text-white">Please contact dispatch</div>}

                </div>





            </Card>
            {/****RWYCCC NOT PROVIDED CARS ABOVE****/}



        </div>




    );


}

export default FirstPageRccProvided;
