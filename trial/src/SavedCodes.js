import React, { useEffect, useState } from 'react';

const SavedCodes = () => {
  const [approvedCodes, setApprovedCodes] = useState([]);

  useEffect(() => {
    // Retrieve the approvedCodes array from Local Storage
    const storedApprovedCodes = JSON.parse(localStorage.getItem('approvedCodes')) || [];

    // Update the state with the retrieved approvedCodes array
    setApprovedCodes(storedApprovedCodes);
  }, []);

  return (
    <div className="saved-codes">
      <h2>Saved Codes</h2>
      <ul>
        {approvedCodes.map((code, index) => (
          <li key={index}>
            <div className="code-preview">
              <style>{code.css}</style>
              <div dangerouslySetInnerHTML={{ __html: code.html }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedCodes;
