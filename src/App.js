// import React from 'react';
// import './App.css';
// import CapsuleSearch from './Components/capsuleSearch';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Capsule web development test</h1>
//         <div className="search-container">
//           <CapsuleSearch />
//         </div>
//         <p className="footer-text">"Find medicines with amazing discount"</p>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js
// import React from 'react';
// import './App.css';
// import CapsuleSearch from './Components/capsuleSearch';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Capsule web development test</h1>
//         <div className="search-container">
//           <CapsuleSearch />
//         </div>
//         <p className="footer-text">"Find medicines with amazing discount"</p>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js
import React, { useState } from 'react';
import SearchMedicine from './Components/SearchMedicine';
import MedicineList from './Components/MedicineList';

const App = () => {
  const [medicines, setMedicines] = useState([]);

  const fetchMedicines = (query) => {
    // Perform API call to the provided endpoint
    fetch(`https://backend.cappsule.co.in/api/v1/new_search?q=${query}&pharmacyIds=1,2,3`)
      .then((response) => response.json())
      .then((data) => setMedicines(data.data.saltSuggestions))
      .catch((error) => console.error('Error fetching medicines:', error));
  }
  
  return (
    <div>
      <h1>Medicine Search</h1>
      <SearchMedicine onSearch={fetchMedicines} />
      <MedicineList medicines={medicines} />
    </div>
  );
};

export default App;
