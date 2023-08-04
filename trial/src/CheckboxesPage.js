import React, { useState, useEffect } from 'react';

const CheckboxesPage = () => {
  const [approvedCodes, setApprovedCodes] = useState([]);

  useEffect(() => {
    const codes = JSON.parse(localStorage.getItem('approvedCheckboxCodes')) || [];
    setApprovedCodes(codes);
  }, []);

  return (
    <div className="checkboxes-page">
      <h2>Checkboxes Page</h2>
      <ul>
        {approvedCodes.map((code, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" />
              <span dangerouslySetInnerHTML={{ __html: code.html }} />
            </label>
            <style>{code.css}</style>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxesPage;
