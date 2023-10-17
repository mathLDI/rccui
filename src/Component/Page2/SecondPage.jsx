// SecondPage.jsx
import { Card } from "../../Component/Card.jsx"

const SecondPage = () => {
  return (

    <div>
      <div className="grid h-screen md:place-items-center bg-gray-100 justify-center" >
        <div className="container mx-auto pt-10 md:pt-0 bg-gray-100"   >
       
                        <Card cardTitle={"Page 2 !"} status={null}>
                            <div>
                                <div className="flex flex-row justify-between p-2">
                                    <div>RCC code:</div>
                                  
                                </div>
                                <div className="flex flex-row justify-between p-2">
                                    <div>Max crosswind:</div>
                                
                                </div>
                               

                            </div>
                        </Card>

        </div>


      </div>
    </div>










  );
}

export default SecondPage;
