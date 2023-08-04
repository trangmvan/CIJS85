import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CodeInput from "./CodeInput";
import ButtonPage from "./ButtonPage";
import CheckboxesPage from "./CheckboxesPage";
import AdminApproval from "./AdminApproval";
import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<CodeInput />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/checkboxes" element={<CheckboxesPage />} />
          <Route path="/adminapproval" element={<AdminApproval />} />
        </Routes>
      </div>
    </Router>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" activeClassName="active">
            Input Code
          </NavLink>
        </li>
        <li>
          <NavLink to="/button" activeClassName="active">
            Button
          </NavLink>
        </li>
        <li>
          <NavLink to="/checkboxes" activeClassName="active">
            Checkboxes
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminapproval" activeClassName="active">
            Admin Approval
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default App;
