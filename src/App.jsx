import { useState } from "react";
import Navbar from './Component/NavBar.jsx';
import SecondPage from './Component/Pages/SecondPage.jsx';
import FirstPageSelector from './Component/Pages/firstPage.jsx';


function App() {

  // Log the result to the console

  const [selectedNavItem, setSelectedNavItem] = useState('RCC Calculator');

  // Function to handle navigation item selection
  const handleNavItemClick = (v) => {
    setSelectedNavItem(v);
  }

  return (
    <div>
      <Navbar selectedNavItem={selectedNavItem} onNavItemClick={handleNavItemClick} />


      {selectedNavItem === 'RCC Calculator' && <FirstPageSelector />}

      {selectedNavItem === 'Team' && <SecondPage />}
    </div>
  );
}
export default App;
