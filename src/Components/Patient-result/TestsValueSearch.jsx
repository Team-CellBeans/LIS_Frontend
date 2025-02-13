import React from "react";
import { LuUserPlus } from "react-icons/lu";
import "./TestsValueSearch.css";

const TestsValueSearch = () => {
  return (
    <div className="main-container">
     

      {/* Header Section */}
      <h2 className="title">
        <span className=""></span><LuUserPlus /> TEST VALUE SEARCH
      </h2>

      {/* Search Test Section */}
      <div className="section">
        <h3>Search Test</h3>
        <input type="text" className="search-input" value="" />
      </div>

      {/* Parameters Section */}
      <div className="section">
  <h3>Parameters</h3>
  <div className="checkbox-group">
    {[
      "Volume", "RESULT", "Volume",
      "RESULT", "Volume", "RESULT",
      "Volume", "Volume", "RESULT"
    ].map((param, index) => (
      <div className="checkbox-item" key={index}>
        <label>
          <input type="checkbox" /> {param}
        </label>
      </div>
    ))}
  </div>
</div>

      {/* Result Values Section */}
      <div className="section">
        <h3>Result Values</h3>
        <div className="result-values">
          {/* Date Selection */}
          <div className="date-group">
            <label>From Date</label>
            <input type="date" className="input-text"/>
          </div>
          <div className="date-group">
            <label>To Date</label>
            <input type="date" defaultValue="2025-02-03" />
          </div>
        </div>

        {/* Numeric & Text Selection */}
        <div className="radio-group">
          <label>
            <input type="radio" name="valueType" /> Numeric
          </label>
          <label>
            <input type="radio" name="valueType" /> Text
          </label>
          <select className="operator-dropdown">
            <option>=</option>
            <option>&gt;</option>
            <option>&lt;</option>
          </select>
          <input type="text" className="input-text" />
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button className="btn report">REPORT/PRINT</button>
          <button className="btn back">BACK</button>
        </div>
      </div>
    </div>
  );
};

export default TestsValueSearch;
