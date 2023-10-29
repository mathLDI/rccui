import { useState } from "react";
import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"
import { CustomButton } from "../Button.jsx";
import PropTypes from "prop-types";




import RccTotalPercentageBasic2p0 from '../functions/RccTotalPercentageBasic2p0.js';
import FromPercentageToContamCounter2p0 from '../functions/fromPercentageToContamCounter2p0.js';
import LowerRccContaminant2p0 from '../functions/lowerRccContaminant2p0.js';
import LowerRccContaminantWithBTW0To22p0 from '../functions/lowerRccContaminantWithBTW0To22p0.js';
import HigherPercentageContaminant2p0 from '../functions/higherPercentageContaminant2p0.js';
import HigherPercentageContaminantWithBTW0To22p0 from '../functions/higherPercentageContaminantWithBTW0To22p0.js';
import RccToUsePerColumnWithpavedOrGravelSelected1 from '../functions/rccToUsePerColumnWithpavedOrGravelSelected1.js';
import RccToUsePerColumnWithpavedOrGravelSelected2 from '../functions/rccToUsePerColumnWithpavedOrGravelSelected2.js';
import RccToUsePerColumnGravel1 from '../functions/rccToUsePerColumnGravel1.js';
import RccToUsePerColumnGravel3 from '../functions/rccToUsePerColumnGravel3.js';
import RccToUsePerColumnPaved2 from '../functions/rccToUsePerColumnPaved2.js';
import RccToUsePerColumnPaved4 from '../functions/rccToUsePerColumnPaved4.js';
import FinalRccToUse2p0 from '../functions/finalRccToUse2p0.js';
import SelectedRccToMaxXwindDash8 from '../functions/selectedRccToMaxXwindDash82p0.js';
import SelectedRccToMaxXwindHS748 from '../functions/selectedRccToMaxXwindHS748.js';
import DispatchPerformanceCheck from '../functions/dispatchPerformanceCheck.js';
import SeventyPercentBareAndDryUpgradeTo0 from '../functions/seventyPercentBareAndDryUpgradeTo0.js';
import OneHundredPercentCompactedSnow from '../functions/oneHundredPercentCompactedSnow.js';
import BottomPercentageSelector from '../functions/bottomPercentageSelector.js';
import TopPercentageSelector from '../functions/topPercentageSelector.js';



const FirstPageRccNotProvided = ({ initialRunwayConditionDescriptionGravel1, runwayConditionDescriptionGravel1Handler,
    initialAircraftType, setAircraftTypeHandler,
    initialContaminationCoverage2, setContaminationCoverage2Handler,
    initialContaminationCoverage3, setContaminationCoverage3Handler,
    initialContaminationCoverage1, setContaminationCoverage1Handler,
    initialContaminationCoverage4, setContaminationCoverage4Handler,
    initialRunwayConditionDescriptionPaved2, setRunwayConditionDescriptionPaved2Handler,
    initialDropDownPavedOrGravel, setDropDownPavedOrGravelHandler,
    initialRunwayConditionDescriptionGravel3, setRunwayConditionDescriptionGravel3Handler,
    initialRunwayConditionDescriptionPaved4, setRunwayConditionDescriptionPaved4Handler,


}) => {


    const allRunwayConditionDescription = [
        initialRunwayConditionDescriptionGravel1,
        initialRunwayConditionDescriptionPaved2,
        initialRunwayConditionDescriptionGravel3,
        initialRunwayConditionDescriptionPaved4
    ];


    const allGravelRunwayConditionDescription = [initialRunwayConditionDescriptionGravel1, initialRunwayConditionDescriptionGravel3]

    const allPavedRunwayConditionDescription = [initialRunwayConditionDescriptionPaved2, initialRunwayConditionDescriptionPaved4]


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
    const [showAlert] = useState(false);
    const [callDxp] = useState(null);
    const [resetListBox, setResetListBox] = useState(false);

    ////////////////////////////////////PROPS//////////////////////////////////////////////

    const TopPercentageSelectorProps = TopPercentageSelector({
        initialDropDownPavedOrGravel,
        initialContaminationCoverage1,
        initialContaminationCoverage2,
    })

    const BottomPercentageSelectorProps = BottomPercentageSelector({
        initialDropDownPavedOrGravel,
        initialContaminationCoverage3,
        initialContaminationCoverage4,
    })


    const sumOfTopAndBottomPercentage = TopPercentageSelectorProps + BottomPercentageSelectorProps;


    const RccTotalPercentageBasic2p0State = RccTotalPercentageBasic2p0({
        TopPercentageSelectorProps, BottomPercentageSelectorProps
    });

    const fromPercentageState = FromPercentageToContamCounter2p0({
        TopPercentageSelectorProps, BottomPercentageSelectorProps
    });

    const RccToUsePerColumnGravel1Props = RccToUsePerColumnGravel1({
        initialRunwayConditionDescriptionGravel1,
        RccTotalPercentageBasic2p0State
    })

    const RccToUsePerColumnPaved2Props = RccToUsePerColumnPaved2({
        initialRunwayConditionDescriptionPaved2,
        RccTotalPercentageBasic2p0State
    })

    const RccToUsePerColumnPaved4Props = RccToUsePerColumnPaved4({
        initialRunwayConditionDescriptionPaved4,
        RccTotalPercentageBasic2p0State
    })

    const RccToUsePerColumnGravel3Props = RccToUsePerColumnGravel3({
        initialRunwayConditionDescriptionGravel3,
        RccTotalPercentageBasic2p0State
    })

    const RccToUsePerColumnWithpavedOrGravelSelected1Props = RccToUsePerColumnWithpavedOrGravelSelected1({
        initialDropDownPavedOrGravel,
        RccToUsePerColumnGravel1Props,
        RccToUsePerColumnPaved2Props
    })

    const RccToUsePerColumnWithpavedOrGravelSelected2Props = RccToUsePerColumnWithpavedOrGravelSelected2({
        initialDropDownPavedOrGravel,
        RccToUsePerColumnGravel3Props,
        RccToUsePerColumnPaved4Props
    })


    const LowerRccContaminant2p0Props = LowerRccContaminant2p0({
        RccToUsePerColumnWithpavedOrGravelSelected1Props,
        RccToUsePerColumnWithpavedOrGravelSelected2Props
    })

    const LowerRccContaminantWithBTW0To22p0Props = LowerRccContaminantWithBTW0To22p0({
        TopPercentageSelectorProps,
        BottomPercentageSelectorProps,
        RccToUsePerColumnWithpavedOrGravelSelected1Props,
        RccToUsePerColumnWithpavedOrGravelSelected2Props
    })

    const HigherPercentageContaminant2p0Props = HigherPercentageContaminant2p0({
        TopPercentageSelectorProps, BottomPercentageSelectorProps,
        RccToUsePerColumnWithpavedOrGravelSelected1Props,
        RccToUsePerColumnWithpavedOrGravelSelected2Props
    })

    const HigherPercentageContaminantWithBTW0To22p0Props = HigherPercentageContaminantWithBTW0To22p0({
        TopPercentageSelectorProps,
        BottomPercentageSelectorProps,
        RccToUsePerColumnWithpavedOrGravelSelected1Props,
        RccToUsePerColumnWithpavedOrGravelSelected2Props
    })

    const FinalRccToUse2p0Props = FinalRccToUse2p0({
        RccTotalPercentageBasic2p0State,
        fromPercentageState,
        TopPercentageSelectorProps,
        BottomPercentageSelectorProps,
        LowerRccContaminant2p0Props,
        LowerRccContaminantWithBTW0To22p0Props,
        HigherPercentageContaminant2p0Props,
        HigherPercentageContaminantWithBTW0To22p0Props,
        RccToUsePerColumnWithpavedOrGravelSelected1Props,
        RccToUsePerColumnWithpavedOrGravelSelected2Props,
    })

    const DispatchPerformanceCheckProps = DispatchPerformanceCheck({

        FinalRccToUse2p0Props,
        initialRunwayConditionDescriptionPaved2,
        initialRunwayConditionDescriptionGravel1,
        initialRunwayConditionDescriptionPaved4,
        initialRunwayConditionDescriptionGravel3,
        RccTotalPercentageBasic2p0State,
    })

    const SeventyPercentBareAndDryUpgradeTo0Props = SeventyPercentBareAndDryUpgradeTo0({
        RccTotalPercentageBasic2p0State,
        fromPercentageState,
        initialRunwayConditionDescriptionPaved2,
        initialRunwayConditionDescriptionGravel1,
        initialRunwayConditionDescriptionPaved4,
        initialRunwayConditionDescriptionGravel3,
        FinalRccToUse2p0Props
    })

    const OneHundredPercentCompactedSnowpProps = OneHundredPercentCompactedSnow({
        initialRunwayConditionDescriptionPaved2,
        initialDropDownPavedOrGravel,
        TopPercentageSelectorProps

    })

    //////////////////////////////


    /////////////////////////////////////////////////

    const SelectedRccToMaxXwindHS748Props = SelectedRccToMaxXwindHS748({
        FinalRccToUse2p0Props
    })

    const SelectedRccToMaxXwindDash8Props = SelectedRccToMaxXwindDash8({
        FinalRccToUse2p0Props
    })



    const resetButtonHandler = () => {

        setResetListBox(true);
        setContaminationCoverage1Handler(0);
        setContaminationCoverage2Handler(0);
        setContaminationCoverage3Handler(0);
        setContaminationCoverage4Handler(0);
        runwayConditionDescriptionGravel1Handler("SELECT GRAVEL CONTAMINANT");
        setRunwayConditionDescriptionPaved2Handler("SELECT PAVED CONTAMINANT");
        setRunwayConditionDescriptionGravel3Handler("SELECT GRAVEL CONTAMINANT");
        setRunwayConditionDescriptionPaved4Handler("SELECT PAVED CONTAMINANT");


        setAircraftTypeHandler("DHC-8");
        setDropDownPavedOrGravelHandler("GRAVEL")
    };


    const resetListbox1Handler = () => {
        setResetListBox(false);
    };




    return (

        <div>


            <Card cardTitle={"RWYCC Not Provided"} status={null}>
                <div>
                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Aircraft type:</div>
                        <ChoiceListbox
                            value={initialAircraftType}
                            choices={buttonAircraftType}
                            callback={setAircraftTypeHandler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler}
                        />
                    </div>

                    <div className="flex flex-row justify-between items-center p-2">
                        <div>Runway type: </div>
                        <ChoiceListbox
                            value={initialDropDownPavedOrGravel}
                            choices={["GRAVEL", "PAVED"]}
                            callback={setDropDownPavedOrGravelHandler}
                            reset={resetListBox}
                            resetCallback={resetListbox1Handler}
                        />
                    </div>

                    {initialDropDownPavedOrGravel === "PAVED" && (
                        <div className="flex flex-row justify-between items-center p-2">
                            <div>Contaminant 1: </div>
                            <div className="flex flex-row gap-4">
                                <ChoiceListbox
                                    value={initialRunwayConditionDescriptionPaved2}
                                    choices={runwayConditionDescriptionPaved2List}
                                    callback={setRunwayConditionDescriptionPaved2Handler}
                                    reset={resetListBox}
                                    resetCallback={resetListbox1Handler}
                                    width={"w-96"} />
                            </div>
                            <div>Percent Coverage 1: </div>

                            <div className="flex flex-row gap-4">
                                <ChoiceListbox
                                    value={initialContaminationCoverage2}
                                    choices={contaminationCoverage2List}
                                    callback={setContaminationCoverage2Handler}
                                    reset={resetListBox}
                                    resetCallback={resetListbox1Handler}
                                    width={"w-28"} />
                            </div>
                        </div>
                    )}

                    {initialRunwayConditionDescriptionPaved2 !== "SELECT PAVED CONTAMINANT" && initialDropDownPavedOrGravel === "PAVED"
                        && initialRunwayConditionDescriptionPaved2 !== '-Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow' &&
                        initialRunwayConditionDescriptionPaved2 !== '-100% Compacted Snow: -15ºC and Colder OAT' &&
                        initialRunwayConditionDescriptionPaved2 !== '-100% Compact Snow: Warmer than -15ºC OAT' &&
                        initialRunwayConditionDescriptionPaved2 !== '-Water on top of 100% Compacted Snow'
                        && TopPercentageSelectorProps !== 0 && TopPercentageSelectorProps !== 100 && (
                            <div className="flex flex-row justify-between items-center p-2 mb-2">
                                <div>Contaminant 2: </div>
                                <div className="flex flex-row gap-4">
                                    <ChoiceListbox
                                        value={initialRunwayConditionDescriptionPaved4}
                                        choices={runwayConditionDescriptionPaved4List}
                                        callback={setRunwayConditionDescriptionPaved4Handler}
                                        reset={resetListBox}
                                        resetCallback={resetListbox1Handler}
                                        width={"w-96"} />

                                </div>
                                <div>Percent Coverage 2: </div>
                                <div className="flex flex-row gap-4">

                                    <ChoiceListbox
                                        value={initialContaminationCoverage4}
                                        choices={contaminationCoverage3List}
                                        callback={setContaminationCoverage4Handler}
                                        reset={resetListBox}
                                        resetCallback={resetListbox1Handler}
                                        width={"w-28"} />
                                </div>
                            </div>
                        )}

                    {initialDropDownPavedOrGravel === "GRAVEL" && (
                        <div className="flex flex-row justify-between items-center p-2">
                            <div>Contaminant 1: </div>
                            <div className="flex flex-row gap-4">
                                <ChoiceListbox
                                    value={initialRunwayConditionDescriptionGravel1}
                                    choices={runwayConditionDescriptionGravel1List}
                                    callback={runwayConditionDescriptionGravel1Handler}
                                    reset={resetListBox}
                                    resetCallback={resetListbox1Handler}
                                    width={"w-96"}
                                />
                            </div>

                            <div >Percent Coverage 1: </div>
                            <div className="flex flex-row gap-4">
                                <ChoiceListbox
                                    value={initialContaminationCoverage1}
                                    choices={contaminationCoverage2List}
                                    callback={setContaminationCoverage1Handler}
                                    reset={resetListBox}
                                    resetCallback={resetListbox1Handler}
                                    width={"w-28"} />
                            </div>
                        </div>
                    )}

                    {initialRunwayConditionDescriptionGravel1 !== "SELECT GRAVEL CONTAMINANT" && initialDropDownPavedOrGravel === "GRAVEL"
                        && initialContaminationCoverage1 !== 0 && TopPercentageSelectorProps !== 100 && (
                            <div className="flex flex-row justify-between items-center p-2 mb-2">
                                <div className="flex px-0">Contaminant 2: </div>
                                <div className="flex flex-row gap-4">
                                    <ChoiceListbox
                                        value={initialRunwayConditionDescriptionGravel3}
                                        choices={runwayConditionDescriptionGravel3List}
                                        callback={setRunwayConditionDescriptionGravel3Handler}
                                        reset={resetListBox}
                                        resetCallback={resetListbox1Handler}
                                        width={"w-96"} />
                                </div>
                                <div>Percent Coverage 2: </div>
                                <div className="flex flex-row gap-4">
                                    <ChoiceListbox
                                        value={initialContaminationCoverage3}
                                        choices={contaminationCoverage3List}
                                        callback={setContaminationCoverage3Handler}
                                        reset={resetListBox}
                                        resetCallback={resetListbox1Handler}
                                        width={"w-28"} />
                                </div>
                            </div>
                        )}

                    <div className="p-2">
                        <CustomButton
                            title={"Reset"} onClickCallback={resetButtonHandler} />
                    </div>

                </div>

            </Card>

            <Card cardTitle={"Results"} status={callDxp}>
                <div>
                    <div className="flex flex-row justify-between p-2">
                        <div>RCC code:</div>

                        {initialRunwayConditionDescriptionPaved2.includes("100") && initialContaminationCoverage2 !== 100 ? (
                            <div className="flex text-white">
                                {FinalRccToUse2p0Props}
                            </div>
                        ) : (
                            <div className={`flex ${FinalRccToUse2p0Props === 0 && SeventyPercentBareAndDryUpgradeTo0Props === false ? 'text-red-500' : 'text-black'}`}>
                                {FinalRccToUse2p0Props}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-row justify-between p-2">
                        <div>Max crosswind:</div>
                        {initialAircraftType === "DHC-8" ? (
                            initialRunwayConditionDescriptionPaved2.includes("100") && initialContaminationCoverage2 !== 100 ? (
                                <div className="text-white">
                                    {SelectedRccToMaxXwindDash8Props}
                                </div>
                            ) : (
                                <div className={`flex ${FinalRccToUse2p0Props === 0 && SeventyPercentBareAndDryUpgradeTo0Props === false ? 'text-red-500' : 'text-black'}`}>
                                    {SelectedRccToMaxXwindDash8Props}
                                </div>
                            )
                        ) : (
                            initialRunwayConditionDescriptionPaved2.includes("100") && initialContaminationCoverage2 !== 100 ? (
                                <div className="text-white">
                                    {SelectedRccToMaxXwindHS748Props}
                                </div>
                            ) : (
                                <div className={`flex ${FinalRccToUse2p0Props === 0 && SeventyPercentBareAndDryUpgradeTo0Props === false ? 'text-red-500' : 'text-black'}`}>
                                    {SelectedRccToMaxXwindHS748Props}
                                </div>
                            )
                        )}
                    </div>






                    {showAlert && <div className="flex flex-row bg-red-500 rounded-md p-2 text-white">Please contact dispatch</div>}

                </div>





                <div style={{ marginBottom: '10px' }}>
                    {DispatchPerformanceCheckProps === true && initialAircraftType == "DHC-8" && sumOfTopAndBottomPercentage <= 100 && OneHundredPercentCompactedSnowpProps === false && FinalRccToUse2p0Props != 0 && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">

                            Dispatch may have to verify the takeoff or Landing distances on the DASH8
                        </div>
                    )}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    {SeventyPercentBareAndDryUpgradeTo0Props === true && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Code 0 does not need to be considered when the runway is 70% bare and dry or 70% bare and wet, in this case upgrade code 0 to 1. Dispatch may have to verify the takeoff or Landing distances on the DASH8
                        </div>
                    )}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    {initialRunwayConditionDescriptionPaved2.includes("100") && initialDropDownPavedOrGravel === "PAVED" && TopPercentageSelectorProps !== 100 && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Runway must be completely covered with Compacted Snow to select this contaminant. If that is the case, select 100%
                        </div>
                    )}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    {FinalRccToUse2p0Props === true && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Contaminant(s) over 100%!
                        </div>
                    )}
                </div>

                {/**CONTAMINATION DEPTH WARNING BELOW */}

                <div style={{ marginBottom: '10px' }}>
                    {initialDropDownPavedOrGravel === "PAVED" && FinalRccToUse2p0Props != 0 && allPavedRunwayConditionDescription.includes('-Dry Snow more than 1.0 in depth') && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Max Dry Snow Depth = 2.0 in
                        </div>
                    )}
                </div>


                <div style={{ marginBottom: '10px' }}>
                    {initialDropDownPavedOrGravel === "GRAVEL" && FinalRccToUse2p0Props != 0 && allGravelRunwayConditionDescription.includes('-Dry Snow more than 1.0 in depth') && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Max Dry Snow Depth = 2.0 in
                        </div>
                    )}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    {initialAircraftType === "DHC-8" && FinalRccToUse2p0Props != 0 && sumOfTopAndBottomPercentage < 40 && initialDropDownPavedOrGravel === "GRAVEL" &&
                        allGravelRunwayConditionDescription.includes('-Wet Snow greater than 0.13 in depth over Compacted snow/gravel mix') && (
                            <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                                Max Wet Snow Depth = 1.0 in
                            </div>
                        )}
                </div>


                <div style={{ marginBottom: '10px' }}>
                    {initialAircraftType === "HS-748" && FinalRccToUse2p0Props != 0 && sumOfTopAndBottomPercentage < 40 && initialDropDownPavedOrGravel === "GRAVEL" &&
                        allGravelRunwayConditionDescription.includes('-Wet Snow greater than 0.13 in depth over Compacted snow/gravel mix') && (
                            <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                                Max Wet Snow Depth = 0.5 in
                            </div>
                        )}
                </div>


                <div style={{ marginBottom: '10px' }}>
                    {initialAircraftType === "DHC-8" && initialDropDownPavedOrGravel === "PAVED" && FinalRccToUse2p0Props != 0 && allRunwayConditionDescription.includes('-Wet Snow greater than 0.13 in depth') && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Max Wet Snow Depth = 1.0 in
                        </div>
                    )}
                </div>


                <div style={{ marginBottom: '10px' }}>
                    {initialAircraftType === "HS-748" && initialDropDownPavedOrGravel === "PAVED" && FinalRccToUse2p0Props != 0 && allRunwayConditionDescription.includes('-Wet Snow greater than 0.13 in depth') && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Max Wet Snow Depth = 0.5 in
                        </div>
                    )}
                </div>




                <div style={{ marginBottom: '10px' }}>
                    {initialAircraftType === "DHC-8" && initialDropDownPavedOrGravel === "PAVED" && FinalRccToUse2p0Props != 0 && allRunwayConditionDescription.includes('-Water Greater than 0.13 in depth') && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Max Water Depth = 0.5 in
                        </div>
                    )}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    {initialAircraftType === "DHC-8" && initialDropDownPavedOrGravel === "GRAVEL" && FinalRccToUse2p0Props != 0 && allRunwayConditionDescription.includes('-Water Greater than 0.13 in depth') && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Max Water Depth = 0.5 in
                        </div>
                    )}
                </div>


                <div style={{ marginBottom: '10px' }}>
                    {initialAircraftType === "DHC-8" && initialDropDownPavedOrGravel === "PAVED" && FinalRccToUse2p0Props != 0 && allRunwayConditionDescription.includes('-Slush Greater than 0.13 in depth') && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Max Slush Depth = 0.5 in
                        </div>
                    )}
                </div>


                <div style={{ marginBottom: '10px' }}>
                    {initialAircraftType === "DHC-8" && initialDropDownPavedOrGravel === "GRAVEL" && allRunwayConditionDescription.includes('-Slush Greater than 0.13 in depth') && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Max Slush Depth = 0.5 in
                        </div>
                    )}
                </div>


                <div style={{ marginBottom: '10px' }}>
                    {initialAircraftType === "HS-748" && initialDropDownPavedOrGravel === "PAVED" && FinalRccToUse2p0Props != 0 && allRunwayConditionDescription.includes('-Slush Greater than 0.13 in depth') && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Max Slush Depth = 0.5 in
                        </div>
                    )}
                </div>


                <div style={{ marginBottom: '10px' }}>
                    {initialAircraftType === "HS-748" && initialDropDownPavedOrGravel === "GRAVEL" && allRunwayConditionDescription.includes('-Slush Greater than 0.13 in depth') && (
                        <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                            Max Slush Depth = 0.5 in
                        </div>
                    )}
                </div>


                <div style={{ marginBottom: '10px' }}>
                    {initialDropDownPavedOrGravel === "GRAVEL" && (
                        (!initialRunwayConditionDescriptionGravel1.includes("SELECT") && !initialRunwayConditionDescriptionGravel3.includes("SELECT") &&
                            initialRunwayConditionDescriptionGravel1 === initialRunwayConditionDescriptionGravel3)
                    ) && (
                            <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                                Same Contaminant in selection 1 and 2!
                            </div>
                        )}
                </div>


                <div style={{ marginBottom: '10px' }}>
                    {initialDropDownPavedOrGravel === "PAVED" && (
                        (!initialRunwayConditionDescriptionPaved2.includes("SELECT") && !initialRunwayConditionDescriptionPaved4.includes("SELECT") &&
                            initialRunwayConditionDescriptionPaved2 === initialRunwayConditionDescriptionPaved4)
                    ) && (
                            <div className="flex flex-row bg-orange-400 rounded-md p-2 text-white justify-center items-center">
                                Same Contaminant in selection 1 and 2!
                            </div>
                        )}
                </div>




            </Card>
            {/****RWYCCC NOT PROVIDED CARS ABOVE****/}





        </div >





    );


}

export default FirstPageRccNotProvided;

FirstPageRccNotProvided.propTypes = {
    initialRunwayConditionDescriptionPaved2: PropTypes.array,
    initialContaminationCoverage2: PropTypes.number,
    initialRunwayConditionDescriptionGravel3: PropTypes.array,
    initialRunwayConditionDescriptionPaved4: PropTypes.array,
    initialRunwayConditionDescriptionGravel1: PropTypes.array,
    runwayConditionDescriptionGravel1Handler: PropTypes.array,
    setRunwayConditionDescriptionPaved2Handler: PropTypes.array,
    setRunwayConditionDescriptionGravel3Handler: PropTypes.array,
    setRunwayConditionDescriptionPaved4Handler: PropTypes.array,
    initialAircraftType: PropTypes.string,
    setAircraftTypeHandler: PropTypes.string,
    setContaminationCoverage2Handler: PropTypes.number,
    initialContaminationCoverage3: PropTypes.number,
    setContaminationCoverage3Handler: PropTypes.number,
    initialDropDownPavedOrGravel: PropTypes.string,
    setDropDownPavedOrGravelHandler: PropTypes.string,
    initialContaminationCoverage1: PropTypes.number,
    setContaminationCoverage1Handler: PropTypes.array,
    initialContaminationCoverage4: PropTypes.number,
    setContaminationCoverage4Handler: PropTypes.array,



};
