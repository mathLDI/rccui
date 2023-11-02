
import FirstPageRccNotProvided from '../Pages/firstPageRccNotProvided.jsx';
import FirstPageRccProvided from '../Pages/firstPageRccProvided.jsx';
import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"
import PropTypes from "prop-types";




const FirstPageSelector = ({ initialRunwayConditionDescriptionGravel1, runwayConditionDescriptionGravel1Handler,
    initialAircraftType, setAircraftTypeHandler, initialTypeOfReport, setTypeOfReportHandler,
    initialContaminationCoverage2, setContaminationCoverage2Handler,
    initialRunwayConditionDescriptionPaved2, setRunwayConditionDescriptionPaved2Handler,
    initialDropDownPavedOrGravel, setDropDownPavedOrGravelHandler,
    initialRunwayConditionDescriptionGravel3, setRunwayConditionDescriptionGravel3Handler,
    initialRunwayConditionDescriptionPaved4, setRunwayConditionDescriptionPaved4Handler,
    initialContaminationCoverage3, setContaminationCoverage3Handler, initialRwycc1, setRwycc1Handler,
    initialRwycc2, setRwycc2Handler, initialRwycc3, setRwycc3Handler, initialCorrectedLandingDistance,
    setCorrectedLandingDistanceHandler, initialRunwayLength, setRunwayLengthHandler, initialContaminationCoverage1,
    setContaminationCoverage1Handler, initialContaminationCoverage4, setContaminationCoverage4Handler,
    initialSelectedNavItem,
}) => {

    const buttonTypeOfReportChoices = ["RCC Not Provided", "RCC Provided"];

    //const shouldAddBorder = initialSelectedNavItem.length === 2;
    //const containerClasses = shouldAddBorder
        //? "container md:pt-0 bg-gray-100 flex justify-center items-center h-screen border border-gray-300 rounded"
        //: "container mx-auto pt-10 md:pt-0 bg-gray-100 flex justify-center items-center h-screen";


//add containerClasses as show below to add border line to RWYCC not provided:
//<div name="firstPage" className="container mx-auto pt-10 lg:pt-0 bg-gray-100 flex justify-center items-center ">
//<div className={containerClasses}>
//<div className="flex flex-col justify-center items-center">


    return (
/////////////////////modify h-screen!//////

<div className='flex justify-around  '>     
    <div name="firstPage" className="flex border-2 rounded p-3    bg-gray-100 ">
            <div >

                <div className="">

                    <Card cardTitle={"Type of Report"} status={null}>
                        <div className="flex flex-row justify-between items-center p-2">
                            
                            <ChoiceListbox
                                value={initialTypeOfReport}
                                choices={buttonTypeOfReportChoices}
                                callback={setTypeOfReportHandler}
                            />
                        </div>
                    </Card>

                    <div className="mt-4">
                        {initialTypeOfReport === "RCC Not Provided" && <FirstPageRccNotProvided initialRunwayConditionDescriptionGravel1={initialRunwayConditionDescriptionGravel1}
                            runwayConditionDescriptionGravel1Handler={runwayConditionDescriptionGravel1Handler}
                            initialAircraftType={initialAircraftType}
                            setAircraftTypeHandler={setAircraftTypeHandler}
                            initialTypeOfReport={initialTypeOfReport}
                            setTypeOfReportHandler={setTypeOfReportHandler}
                            initialContaminationCoverage2={initialContaminationCoverage2}
                            setContaminationCoverage2Handler={setContaminationCoverage2Handler}
                            initialRunwayConditionDescriptionPaved2={initialRunwayConditionDescriptionPaved2}
                            setRunwayConditionDescriptionPaved2Handler={setRunwayConditionDescriptionPaved2Handler}
                            initialDropDownPavedOrGravel={initialDropDownPavedOrGravel}
                            setDropDownPavedOrGravelHandler={setDropDownPavedOrGravelHandler}
                            initialRunwayConditionDescriptionGravel3={initialRunwayConditionDescriptionGravel3}
                            setRunwayConditionDescriptionGravel3Handler={setRunwayConditionDescriptionGravel3Handler}
                            initialRunwayConditionDescriptionPaved4={initialRunwayConditionDescriptionPaved4}
                            setRunwayConditionDescriptionPaved4Handler={setRunwayConditionDescriptionPaved4Handler}
                            initialContaminationCoverage3={initialContaminationCoverage3}
                            setContaminationCoverage3Handler={setContaminationCoverage3Handler}
                            initialContaminationCoverage4={initialContaminationCoverage4}
                            setContaminationCoverage4Handler={setContaminationCoverage4Handler}
                            initialContaminationCoverage1={initialContaminationCoverage1}
                            setContaminationCoverage1Handler={setContaminationCoverage1Handler}

                        />}
                        {initialTypeOfReport === "RCC Provided" && <FirstPageRccProvided
                            initialAircraftType={initialAircraftType}
                            setAircraftTypeHandler={setAircraftTypeHandler}
                            initialTypeOfReport={initialTypeOfReport}
                            setTypeOfReportHandler={setTypeOfReportHandler}
                            initialRwycc1={initialRwycc1}
                            setRwycc1Handler={setRwycc1Handler}
                            initialRwycc2={initialRwycc2}
                            setRwycc2Handler={setRwycc2Handler}
                            initialRwycc3={initialRwycc3}
                            setRwycc3Handler={setRwycc3Handler}
                            initialCorrectedLandingDistance={initialCorrectedLandingDistance}
                            setCorrectedLandingDistanceHandler={setCorrectedLandingDistanceHandler}
                            initialRunwayLength={initialRunwayLength}
                            setRunwayLengthHandler={setRunwayLengthHandler}

                        />}
                    </div>
                    
                </div>
            </div>
        </div>

</div>

   


    );

}


export default FirstPageSelector;


FirstPageSelector.propTypes = {
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
    initialTypeOfReport: PropTypes.string,
    setTypeOfReportHandler: PropTypes.string,
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

    initialContaminationCoverage1: PropTypes.number,
    setContaminationCoverage1Handler: PropTypes.array,
    initialContaminationCoverage4: PropTypes.number,
    setContaminationCoverage4Handler: PropTypes.array,


};