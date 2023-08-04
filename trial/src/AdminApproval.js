import React, { useState } from 'react';

const AdminApproval = () => {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [codeIndex, setCodeIndex] = useState('');
  const [codeType, setCodeType] = useState('');

  const correctPassword = 'admin123';

  const handleLogin = () => {
    if (password === correctPassword) {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setPassword('');
  };

  const handleCodeIndexChange = (e) => {
    setCodeIndex(e.target.value);
  };

  const handleCodeTypeChange = (e) => {
    setCodeType(e.target.value);
  };

  const handleApprove = () => {
    const pendingCodesKey = `pending${codeType === 'button' ? 'Button' : 'Checkbox'}Codes`;
    const approvedCodesKey = `approved${codeType === 'button' ? 'Button' : 'Checkbox'}Codes`;

    let pendingCodes = JSON.parse(localStorage.getItem(pendingCodesKey)) || [];
    let approvedCodes = JSON.parse(localStorage.getItem(approvedCodesKey)) || [];

    const code = pendingCodes[codeIndex];

    if (code && !code.approved) {
      code.approved = true;
      approvedCodes.push(code);
      pendingCodes.splice(codeIndex, 1);

      localStorage.setItem(approvedCodesKey, JSON.stringify(approvedCodes));
      localStorage.setItem(pendingCodesKey, JSON.stringify(pendingCodes));
    }

    setCodeIndex('');
    setCodeType('');
  };

  return (
    <div className="admin-approval">
      {loggedIn ? (
        <>
          <h2>Admin Approval</h2>
          <div className="form-group">
            <label htmlFor="codeIndex">Code Index:</label>
            <input id="codeIndex" type="text" value={codeIndex} onChange={handleCodeIndexChange} />
          </div>
          <div className="form-group">
            <label htmlFor="codeType">Code Type:</label>
            <select id="codeType" value={codeType} onChange={handleCodeTypeChange}>
              <option value="">Select Code Type</option>
              <option value="button">Button</option>
              <option value="checkbox">Checkbox</option>
            </select>
          </div>
          <button onClick={handleApprove}>Approve Code</button>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          {error && <p className="error">{error}</p>}
        </>
      )}
    </div>
  );
};

export default AdminApproval;
