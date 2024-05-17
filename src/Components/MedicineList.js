// MedicineList.js
import React from 'react';

const MedicineList = ({ medicines }) => {
  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.id}>
            <h3>{medicine.salt}</h3>
            <p>Strength: {medicine.most_common.Strength}</p>
            <p>Packing: {medicine.most_common.Packing}</p>
            <p>Available Forms: {medicine.available_forms.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
