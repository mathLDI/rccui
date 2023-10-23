import { useState } from "react";
import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"
import { CustomButton } from "../Button.jsx";
import CrosswindComponent from '../functions/crosswindComponent.js';
import CrosswindComponentNoNegOneDigit from '../functions/crosswindComponentNoNegOneDigit.js';
import HeadwindTailwindComponent from '../functions/headwindTailwindComponent.js';
import HeadwindTailwindComponentNoNegOneDigit from '../functions/headwindTailwindComponentNoNegOneDigit.js';

const SecondPageCrosswindCalculator = () => {

    const buttonAircraftType = ["DHC-8", "HS-748"];
    const [callDxp] = useState(null);
    const [runwayHeading, setRunwayHeading] = useState(0);
    const [windDirection, setWindDirection] = useState(0);
    const integerWindDirection = parseInt(windDirection, 10);
    const [windSpeed, setWindSpeed] = useState(0);
    const integerWindSpeed = parseInt(windSpeed, 10);
    const [resetListBox, setResetListBox] = useState(false);
    const [aircraftType, setAircraftType] = useState("DHC-8")

    const integerRunwayHeading = parseInt(runwayHeading, 10);


    const CrosswindComponentProps = CrosswindComponent({
        integerWindDirection,
        integerRunwayHeading,
        integerWindSpeed,

    })


    const CrosswindComponentNoNegOneDigitProps = CrosswindComponentNoNegOneDigit({
        CrosswindComponentProps,
    })

    console.log("CrosswindComponentNoNegOneDigitProps:", CrosswindComponentNoNegOneDigitProps);


    const HeadwindTailwindComponentProps = HeadwindTailwindComponent({
        integerWindDirection,
        integerRunwayHeading,
        integerWindSpeed,
    })

    console.log("HeadwindTailwindComponentProps:", HeadwindTailwindComponentProps)


    const HeadwindTailwindComponentNoNegOneDigitProps = HeadwindTailwindComponentNoNegOneDigit({
        HeadwindTailwindComponentProps,
    })


    console.log("HeadwindTailwindComponentNoNegOneDigitProps:", HeadwindTailwindComponentNoNegOneDigitProps)

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
                            max={360}
                            min={0}
                            value={integerRunwayHeading} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // You can add validation here to ensure the number is not longer than 5 digits
                                if (!isNaN(v) && v >= 0 && v <= 360) {
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
                            value={integerWindDirection} // Replace 'yourValueState' with the state you want to manage the input's value
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
                            max={200}
                            min={0}
                            value={integerWindSpeed} // Replace 'yourValueState' with the state you want to manage the input's value
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
                                {HeadwindTailwindComponentProps < 0 && (
                                    <div>Tailwind:</div>
                                )}

                                {HeadwindTailwindComponentProps > 0 && (
                                    <div>Headwind:</div>
                                )}



                                <div >
                                    {HeadwindTailwindComponentNoNegOneDigitProps}
                                </div>
                            </div>

                            <div className="flex flex-row justify-between p-2">

                                {CrosswindComponentProps === 0 && (
                                    <div>No Crosswind:</div>)}

                                {CrosswindComponentProps < 0 && (
                                    <div>Left Crosswind:</div>)}

                                {CrosswindComponentProps > 0 && (
                                    <div>Right Crosswind:</div>)}

                                <div >
                                    {CrosswindComponentNoNegOneDigitProps}
                                </div>
                            </div>

                        </div>


                    </Card>

                </div>


            </div>

            {aircraftType === "DHC-8" && CrosswindComponentNoNegOneDigitProps > 36 &&
                (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                    Over Max Crosswind
                </div>)}

            {aircraftType === "DHC-8" && HeadwindTailwindComponentProps < -10 && HeadwindTailwindComponentProps > -21 &&
                (<div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                    Over Max Tailwind for the DHC-8 106 and DHC-8 300
                </div>)}

            {aircraftType === "DHC-8" && HeadwindTailwindComponentProps < -20 &&
                (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                    Over Max Tailwind
                </div>)}



            {aircraftType === "HS-748" && CrosswindComponentNoNegOneDigitProps > 30 &&
                (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                    Over Max Crosswind
                </div>)}


            {aircraftType === "HS-748" && HeadwindTailwindComponentProps < -10 &&
                (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                    Over Max Tailwind
                </div>)}

            {integerWindSpeed > 50 &&
                (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                    Over Max Speed on the Ground
                </div>)}


        </div>




    );


}

export default SecondPageCrosswindCalculator;
