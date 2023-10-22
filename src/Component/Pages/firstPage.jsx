
import { useState } from "react";
import FirstPageRccNotProvided from '../Pages/firstPageRccNotProvided.jsx';
import FirstPageRccProvided from '../Pages/firstPageRccProvided.jsx';
import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"




const FirstPageSelector = () => {

    const buttonTypeOfReportChoices = ["RCC Not Provided", "RCC Provided"];

    const [typeOfReport, setTypeOfReport] = useState('RCC Not Provided');


    const onDropdownChange = (v) => {
        return setTypeOfReport(v);
    }

    return (


        <div className="grid h-screen md:place-items-center bg-gray-100 justify-center ">
            <div className="container mx-auto pt-10 md:pt-0 bg-gray-100 ">
                <div>
                    <Card cardTitle={""} status={null}>
                        <div className="flex flex-row justify-between items-center p-2">
                            <div>Type of Report:</div>
                            <ChoiceListbox
                                choices={buttonTypeOfReportChoices}
                                callback={onDropdownChange}
                            />
                        </div>
                    </Card>
                </div>
                <div>
                    {typeOfReport === "RCC Not Provided" && <FirstPageRccNotProvided />}
                    {typeOfReport === "RCC Provided" && <FirstPageRccProvided />}
                </div>
            </div>

        </div>

    );

}


export default FirstPageSelector;
