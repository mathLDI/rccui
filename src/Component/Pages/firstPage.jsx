
import { useState } from "react";
import FirstPageRccNotProvided from '../Pages/firstPageRccNotProvided.jsx';
import FirstPageRccProvided from '../Pages/firstPageRccProvided.jsx';
import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"




const FirstPageSelector = ({ initialRunwayConditionDescriptionGravel1, runwayConditionDescriptionGravel1Handler,
    initialAircraftType, setAircraftTypeHandler, initialTypeOfReport, setTypeOfReportHandler, 
    initialContaminationCoverage2, setContaminationCoverage2Handler }) => {

    const buttonTypeOfReportChoices = ["RCC Not Provided", "RCC Provided"];



    return (


        <div className="grid h-screen md:place-items-center bg-gray-100 justify-center ">
            <div className="container mx-auto pt-10 md:pt-0 bg-gray-100 ">
                <div>
                    <Card cardTitle={""} status={null}>
                        <div className="flex flex-row justify-between items-center p-2">
                            <div>Type of Report:</div>
                            <ChoiceListbox
                                value={initialTypeOfReport}
                                choices={buttonTypeOfReportChoices}
                                callback={setTypeOfReportHandler}
                            />
                        </div>
                    </Card>
                </div>
                <div>
                    {initialTypeOfReport === "RCC Not Provided" && <FirstPageRccNotProvided initialRunwayConditionDescriptionGravel1={initialRunwayConditionDescriptionGravel1}
                        runwayConditionDescriptionGravel1Handler={runwayConditionDescriptionGravel1Handler}
                        initialAircraftType={initialAircraftType}
                        setAircraftTypeHandler={setAircraftTypeHandler}
                        initialTypeOfReport={initialTypeOfReport}
                        setTypeOfReportHandler={setTypeOfReportHandler}
                        initialContaminationCoverage2={initialContaminationCoverage2}
                        setContaminationCoverage2Handler={setContaminationCoverage2Handler}

                    />}
                    {initialTypeOfReport === "RCC Provided" && <FirstPageRccProvided
                        initialAircraftType={initialAircraftType}
                        setAircraftTypeHandler={setAircraftTypeHandler}
                        initialTypeOfReport={initialTypeOfReport}
                        setTypeOfReportHandler={setTypeOfReportHandler}

                    />}
                </div>
            </div>

        </div>

    );

}


export default FirstPageSelector;
