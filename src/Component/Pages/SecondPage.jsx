// SecondPage.jsx
import SecondPageCrosswindCalculator from '../Pages/SecondPageCrosswindCalculator.jsx'


const SecondPage = ({ 
  setAircraftTypeHandler, 
  initialAircraftType,
  initialRunwayHeading, 
  setRunwayHeadingHandler,
  initialWindDirection, 
  setWindDirectionHandler, 
  initialWindSpeed, 
  setWindSpeedHandler

}) => {


  return (

   
<div className="container mx-auto pt-10 md:pt-0 bg-gray-100 flex justify-center items-center h-screen">
          <div>


            {<SecondPageCrosswindCalculator
              initialAircraftType={initialAircraftType} setAircraftTypeHandler={setAircraftTypeHandler}
              initialRunwayHeading={initialRunwayHeading} setRunwayHeadingHandler={setRunwayHeadingHandler}
              initialWindDirection={initialWindDirection} setWindDirectionHandler={setWindDirectionHandler}
              initialWindSpeed={initialWindSpeed} setWindSpeedHandler={setWindSpeedHandler}
            />}

          </div>
      </div>
 
  );
}

export default SecondPage;
