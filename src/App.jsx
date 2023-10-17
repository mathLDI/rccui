import { useState } from "react";
import Navbar from './Component/NavBar.jsx';
import SecondPage from './Component/Page2/SecondPage.jsx';
import FirstPage from './Component/Page1/firstPage.jsx';


function App() {



  //TODO insert rest of the logic

  const [selectedNavItem, setSelectedNavItem] = useState('RCC Calculator');

  // Function to handle navigation item selection
  const handleNavItemClick = (itemName) => {
    setSelectedNavItem(itemName);
  }


  return (
    <div>
      <div>
        <Navbar selectedNavItem={selectedNavItem} onNavItemClick={handleNavItemClick} />
        {selectedNavItem === 'RCC Calculator' && <FirstPage />}
        {selectedNavItem === 'Team' && <SecondPage />}
      </div>
    </div>
  );

}

export default App;
