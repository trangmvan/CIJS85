import React, { useState, useEffect } from 'react';

const ButtonPage = () => {
  const [approvedCodes, setApprovedCodes] = useState([]);

  useEffect(() => {
    const codes = JSON.parse(localStorage.getItem('approvedButtonCodes')) || [];
    setApprovedCodes(codes);
  }, []);

  return (
    <div className="button-page">
      <h2>Button Page</h2>
      <ul>
        {approvedCodes.map((code, index) => (
          <li key={index}>
            <button dangerouslySetInnerHTML={{ __html: code.html }} />
            <style>{code.css}</style>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonPage;
