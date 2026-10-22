import React, { useState } from 'react';

const App = () => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [availableUnits, setAvailableUnits] = useState([]);

  const handleProgramSelect = (event) => {
    const selectedProgram = event.target.value;
    setSelectedProgram(selectedProgram);

    // Simulate fetching available units from the database based on the selected program
    const units = fetchAvailableUnitsFromDatabase(selectedProgram);
    setAvailableUnits(units);
  };

  // Simulated function to fetch available units from the database based on the selected program
  const fetchAvailableUnitsFromDatabase = (selectedProgram) => {
    // Perform database query or API request here to retrieve units based on the selected program
    // Replace this static data with your actual database queries or API calls
    const mockUnitsData = {
      'BTEC HND in Computing and Systems Development': [
        'Unit 1: Programming',
        'Unit 2: Web Development',
        'Unit 3: Database Management',
      ],
      'BTEC HND in Business': [
        'Unit 1: Business Environment',
        'Unit 2: Marketing Essentials',
        'Unit 3: Human Resource Management',
      ],
    };

    return mockUnitsData[selectedProgram] || [];
  };

  return (
    <div>
      <h2>Unit Selection</h2>
      <div>
        <label htmlFor="program-select">Select Program:</label>
        <select id="program-select" value={selectedProgram} onChange={handleProgramSelect}>
          <option value="">-- Select a program --</option>
          <option value="BTEC HND in Computing and Systems Development">BTEC HND in Computing and Systems Development</option>
          <option value="BTEC HND in Business">BTEC HND in Business</option>
        </select>
      </div>
      {selectedProgram && (
        <div>
          <h3>Available Units for {selectedProgram}:</h3>
          {availableUnits.length > 0 ? (
            <ul>
              {availableUnits.map((unit) => (
                <li key={unit}>{unit}</li>
              ))}
            </ul>
          ) : (
            <p>No units available for the selected program.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
