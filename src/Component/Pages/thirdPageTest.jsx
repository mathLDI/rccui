

const ThirdPageTest = ({ countHandler, countTest }) => {




    return (

        <div>


            <div>
                <button className="bg-blue-500" onClick={countHandler}>
                    click here(thirdPageTest.jsx)
                </button>

            </div>
            <div>
                {countTest}

                <button className="bg-blue-500" onClick={countHandler}>
        click here (thirdPage.jsx)
    </button>
      

            </div>

        </div>


    )
}

export default ThirdPageTest;