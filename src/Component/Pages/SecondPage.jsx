// SecondPage.jsx
import SecondPageCrosswindCalculator from '../Pages/SecondPageCrosswindCalculator.jsx'


const SecondPage = ({ setAircraftTypeHandler, initialAircraftType,
  initialRunwayHeading, setRunwayHeadingHandler,
  initialWindDirection, setWindDirectionHandler, initialWindSpeed, setWindSpeedHandler

}) => {

  console.log("initialAircraftType from SecondPage:", initialAircraftType)

  return (

    <div>
      <div className="grid h-screen md:place-items-center bg-gray-100 justify-center" >
        <div className="container mx-auto pt-10 md:pt-0 bg-gray-100"   >

          <div>


            {<SecondPageCrosswindCalculator
              initialAircraftType={initialAircraftType} setAircraftTypeHandler={setAircraftTypeHandler}
              initialRunwayHeading={initialRunwayHeading} setRunwayHeadingHandler={setRunwayHeadingHandler}
              initialWindDirection={initialWindDirection} setWindDirectionHandler={setWindDirectionHandler}
              initialWindSpeed={initialWindSpeed} setWindSpeedHandler={setWindSpeedHandler}
            />}

          </div>

        </div>


      </div>
    </div>
  );
}

export default SecondPage;
