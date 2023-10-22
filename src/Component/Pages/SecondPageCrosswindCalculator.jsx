import { useState } from "react";
import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"
import { CustomButton } from "../Button.jsx";





const SecondPageCrosswindCalculator = () => {

    const buttonAircraftType = ["DHC-8", "HS-748"];
    const [callDxp] = useState(null);
    const [runwayHeading, setRunwayHeading] = useState(0);
    const [windDirection, setWindDirection] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);
    const [resetListBox, setResetListBox] = useState(false);
    const [aircraftType, setAircraftType] = useState("DHC-8")

    


    const resetButtonHandler = () => {
        setResetListBox(true);
        setWindDirection(0);
        setRunwayHeading(0);
        setWindSpeed(0);
    };



    const setAircraftTypeHandler = (v) => {

        setAircraftType(v);
    }




    return (

        <div>


            <Card cardTitle={"Crosswind Calculator"} status={null}>
                <div>
                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Aircraft type:</div>
                        <ChoiceListbox
                            value={aircraftType}
                            choices={buttonAircraftType}
                            callback={setAircraftTypeHandler} />
                    </div>

            

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Runway Heading:</div>
                        <input
                            type="number"
                            max={9999}
                            min={0}
                            value={runwayHeading} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // You can add validation here to ensure the number is not longer than 5 digits
                                if (!isNaN(v) && v >= 0) {
                                    setRunwayHeading(v); // Update the state with the new value
                                }
                            }}
                        />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Wind Direction:</div>
                        <input
                            type="number"
                            max={360}
                            min={0}
                            value={windDirection} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // Ensure the input value is a non-negative number
                                if (!isNaN(v) && v >= 0 && v <= 360) {
                                    setWindDirection(v); // Update the state with the new value
                                }
                            }}
                        />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Wind Speed:</div>
                        <input
                            type="number"
                            max={9999}
                            min={1000}
                            value={windSpeed} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // Ensure the input value is a non-negative number
                                if (!isNaN(v) && v >= 0) {
                                    setWindSpeed(v); // Update the state with the new value
                                }
                            }}
                        />
                    </div>


                    <div className="p-2">
                        <CustomButton
                            title={"Reset"} onClickCallback={resetButtonHandler} />
                    </div>
                </div>

            </Card>

            <div >

                <div>
                    <Card cardTitle={"Results Crosswind (delete)"} status={callDxp}>
                        <div>
                            <div className="flex flex-row justify-between p-2">
                                <div>RCC code:</div>
                                <div >
                                  
                                </div>
                            </div>

                            <div className="flex flex-row justify-between p-2">
                                <div>Max crosswind:</div>
                                <div >
                                   

                                </div>
                            </div>

                        </div>


                    </Card>

                </div>


            </div>

{/*ADD WARNING THE RUNWAY HEADING IS OVER 360*/}


        </div>




    );


}

export default SecondPageCrosswindCalculator;
