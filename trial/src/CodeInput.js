import React, { useState } from 'react';

const CodeInput = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [codeType, setCodeType] = useState('');

  const handleHtmlChange = (e) => {
    setHtmlCode(e.target.value);
  };

  const handleCssChange = (e) => {
    setCssCode(e.target.value);
  };

  const handleSubmit = () => {
    const code = {
      html: htmlCode,
      css: cssCode,
    };

    if (codeType === 'button') {
      // Save button code to Local Storage
      const buttonCodes = JSON.parse(localStorage.getItem('buttonCodes')) || [];
      buttonCodes.push(code);
      localStorage.setItem('buttonCodes', JSON.stringify(buttonCodes));
    } else if (codeType === 'checkbox') {
      // Save checkbox code to Local Storage
      const checkboxCodes = JSON.parse(localStorage.getItem('checkboxCodes')) || [];
      checkboxCodes.push(code);
      localStorage.setItem('checkboxCodes', JSON.stringify(checkboxCodes));
    }

    // Reset the input fields after successful submission
    setHtmlCode('');
    setCssCode('');
    setCodeType('');
  };

  return (
    <div className="code-input">
      <h2>Input Code</h2>
      <div className="form-group">
        <label htmlFor="html">HTML:</label>
        <textarea id="html" value={htmlCode} onChange={handleHtmlChange} />
      </div>
      <div className="form-group">
        <label htmlFor="css">CSS:</label>
        <textarea id="css" value={cssCode} onChange={handleCssChange} />
      </div>
      <div className="form-group">
        <label htmlFor="codeType">Code Type:</label>
        <select id="codeType" value={codeType} onChange={(e) => setCodeType(e.target.value)}>
          <option value="">Select Code Type</option>
          <option value="button">Button</option>
          <option value="checkbox">Checkbox</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Submit for Review</button>
    </div>
  );
};

export default CodeInput;
