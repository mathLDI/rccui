// SecondPage.jsx
import SecondPageCrosswindCalculator from '../Pages/SecondPageCrosswindCalculator.jsx'


const SecondPage = () => {
  return (

    <div>
      <div className="grid h-screen md:place-items-center bg-gray-100 justify-center" >
        <div className="container mx-auto pt-10 md:pt-0 bg-gray-100"   >
       
             <div>
              
              
             {<SecondPageCrosswindCalculator/>}

              </div>          

        </div>


      </div>
    </div>










  );
}

export default SecondPage;
