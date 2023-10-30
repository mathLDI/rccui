import { useState } from "react";
import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"
import { CustomButton } from "../Button.jsx";
import CrosswindComponent from '../functions/crosswindComponent.js';
import CrosswindComponentNoNegOneDigit from '../functions/crosswindComponentNoNegOneDigit.js';
import HeadwindTailwindComponent from '../functions/headwindTailwindComponent.js';
import HeadwindTailwindComponentNoNegOneDigit from '../functions/headwindTailwindComponentNoNegOneDigit.js';
import PropTypes from "prop-types";


const SecondPageCrosswindCalculator = ({ initialAircraftType, setAircraftTypeHandler,
    initialRunwayHeading, setRunwayHeadingHandler, initialWindDirection, setWindDirectionHandler,
    initialWindSpeed, setWindSpeedHandler,

}) => {

    ////the props for initialAircraftType, setAircraftTypeHandler will need to be checked, not working
    ///all the props and state ar ok,, but dropdown doesnt keep the correct state///



    const buttonAircraftType = ["DHC-8", "HS-748"];
    const [callDxp] = useState(null);
    const integerWindDirection = parseInt(initialWindDirection, 10);
    const integerWindSpeed = parseInt(initialWindSpeed, 10);
    const integerRunwayHeading = parseInt(initialRunwayHeading, 10);
    const [resetListBox, setResetListBox] = useState(false);


    const CrosswindComponentProps = CrosswindComponent({
        integerWindDirection,
        integerRunwayHeading,
        integerWindSpeed,

    })


    const CrosswindComponentNoNegOneDigitProps = CrosswindComponentNoNegOneDigit({
        CrosswindComponentProps,
    })



    const HeadwindTailwindComponentProps = HeadwindTailwindComponent({
        integerWindDirection,
        integerRunwayHeading,
        integerWindSpeed,
    })



    const HeadwindTailwindComponentNoNegOneDigitProps = HeadwindTailwindComponentNoNegOneDigit({
        HeadwindTailwindComponentProps,
    })



    const resetButtonHandler = () => {
        setResetListBox(true);
        setWindDirectionHandler(0);
        setRunwayHeadingHandler(0);
        setWindSpeedHandler(0);
        setAircraftTypeHandler("DHC-8");
    };


    const resetListbox1Handler = () => {
        setResetListBox(false);
    };



    return (

        <div>


            <Card cardTitle={"Crosswind Calculator"} status={null}>
                <div>
                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Aircraft type: </div>
                        <ChoiceListbox
                            value={initialAircraftType}
                            choices={buttonAircraftType}
                            callback={setAircraftTypeHandler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler}

                        />
                    </div>



                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Runway Heading:</div>
                        <input
                            type="number"
                            max={360}
                            min={0}
                            value={initialRunwayHeading} // Replace 'yourValueState' with the state you want to manage the input's value
                            onChange={(e) => {
                                // Handle input value changes here
                                const v = e.target.value;
                                // You can add validation here to ensure the number is not longer than 5 digits
                                if (!isNaN(v) && v >= 0 && v <= 360) {
                                    setRunwayHeadingHandler(v); // Update the state with the new value
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
                                    setWindDirectionHandler(v); // Update the state with the new value
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
                                    setWindSpeedHandler(v); // Update the state with the new value
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
                    <Card cardTitle={"Results Crosswind"} status={callDxp}>
                        <div>
                            <div className="flex flex-row justify-between p-2">
                                {HeadwindTailwindComponentProps < 0 && (
                                    <div>Tailwind:</div>
                                )}

                                {HeadwindTailwindComponentProps > 0 && (
                                    <div>Headwind:</div>
                                )}

                                <div >
                                    {HeadwindTailwindComponentNoNegOneDigitProps} kts
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
                                    {CrosswindComponentNoNegOneDigitProps} kts
                                </div>
                            </div>

                        </div>


                    </Card>

                </div>


            </div>

            <div style={{ marginBottom: '10px' }}>
                {initialAircraftType === "DHC-8" && CrosswindComponentNoNegOneDigitProps > 36 &&
                    (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                        Over Max Crosswind
                    </div>)}
            </div>

            <div style={{ marginBottom: '10px' }}>
                {initialAircraftType === "DHC-8" && HeadwindTailwindComponentProps < -10 && HeadwindTailwindComponentProps > -21 &&
                    (<div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                        Over Max Tailwind for the DHC-8 106 and DHC-8 300
                    </div>)}
            </div>

            <div style={{ marginBottom: '10px' }}>
                {initialAircraftType === "DHC-8" && HeadwindTailwindComponentProps < -20 &&
                    (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                        Over Max Tailwind
                    </div>)}
            </div>

            <div style={{ marginBottom: '10px' }}>
                {initialAircraftType === "HS-748" && CrosswindComponentNoNegOneDigitProps > 30 &&
                    (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                        Over Max Crosswind
                    </div>)}
            </div>

            <div style={{ marginBottom: '10px' }}>
                {initialAircraftType === "HS-748" && HeadwindTailwindComponentProps < -10 &&
                    (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                        Over Max Tailwind
                    </div>)}
            </div>

            <div style={{ marginBottom: '10px' }}>
                {integerWindSpeed > 50 &&
                    (<div className="flex flex-row bg-red-600 rounded-md p-2 text-white justify-center items-center">
                        Over Max Speed on the Ground
                    </div>)}
            </div>


        </div>

    );

}

export default SecondPageCrosswindCalculator;


SecondPageCrosswindCalculator.propTypes = {
    initialAircraftType: PropTypes.string,
    setAircraftTypeHandler: PropTypes.string,
    initialRunwayHeading: PropTypes.number,
    setRunwayHeadingHandler: PropTypes.number,
    initialWindDirection: PropTypes.number,
    setWindDirectionHandler: PropTypes.number,
    initialWindSpeed: PropTypes.number,
    setWindSpeedHandler: PropTypes.number,


};
