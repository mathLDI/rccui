// SecondPage.jsx
import SecondPageCrosswindCalculator from '../Pages/SecondPageCrosswindCalculator.jsx'


const SecondPage = ({setAircraftTypeHandler, initialAircraftType}) => {

  console.log("initialAircraftType from SecondPage:", initialAircraftType)

  return (

    <div>
      <div className="grid h-screen md:place-items-center bg-gray-100 justify-center" >
        <div className="container mx-auto pt-10 md:pt-0 bg-gray-100"   >
       
             <div>
              
              
             {<SecondPageCrosswindCalculator   initialAircraftType={initialAircraftType} setAircraftTypeHandler={setAircraftTypeHandler}  />}

              </div>          

        </div>


      </div>
    </div>
  );
}

export default SecondPage;
