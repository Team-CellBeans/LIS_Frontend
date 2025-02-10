import React from "react";
import "./TATReport.css";

const TATReport = () => {
  return (
    <div className="container">
        <h2 className="title"> TURNAROUND TIME REPORT</h2>

        <form className="form-grid">
          <div className="form-group">
            <label htmlFor="fromDate" className="form-label">From Date</label>
            <input
              type="date"
              id="fromDate"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="toDate" className="form-label">To Date</label>
            <input
              type="date"
              id="toDate"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="department" className="form-label">Select Department</label>
            <select
              id="department"
              className="form-input"
            >
              <option value="">Choose Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Oncology">Oncology</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="test" className="form-label">Select Test</label>
            <select
              id="test"
              className="form-input"
            >
              <option value="">Choose Test</option>
              <option value="Blood Test">Blood Test</option>
              <option value="X-Ray">X-Ray</option>
              <option value="MRI">MRI</option>
            </select>
          </div>
        </form>

        <div className="button-wrapper">
          <button className="submit-button">Report</button>
        </div>
    </div>
  );
};

export default TATReport;
