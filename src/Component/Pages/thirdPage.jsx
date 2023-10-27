
import { useState } from "react";
import FirstPageRccNotProvided from '../Pages/firstPageRccNotProvided.jsx';
import ThirdPageTest  from '../Pages/thirdPageTest.jsx';

import { ChoiceListbox } from "../ListBox.jsx";
import { Card } from "../Card.jsx"




const ThirdPage = ({countHandler, countTest }) => {


    const buttonTypeOfReportChoices = ["RCC Not Provided", "RCC Provided"];

    const [typeOfReport, setTypeOfReport] = useState('RCC Not Provided');


    const onDropdownChange = (v) => {
        return setTypeOfReport(v);
    }

    return (


        <div className="grid h-screen md:place-items-center bg-gray-100 justify-center ">
            <div className="container mx-auto pt-10 md:pt-0 bg-gray-100 ">
                <div>
                    <Card cardTitle={"test third page!!"} status={null}>
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
                    {typeOfReport === "RCC Not Provided" && <ThirdPageTest countHandler={countHandler} countTest={countTest}  />}
                </div>
            </div>
            <div>


<div>
    <button className="bg-blue-500" onClick={countHandler}>
        click here (thirdPage.jsx)
    </button>

</div>
<div>
    {countTest}

    
</div>

</div>

        </div>

    );

}


export default ThirdPage;