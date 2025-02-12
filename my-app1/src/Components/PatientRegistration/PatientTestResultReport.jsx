import React from 'react'
import "./PatientTestResultReport.css";

const PatientTestResultReport = () => {
  return (
    <div className="container">
      {/* Breadcrumb */}
      {/* <div className="header">
        <span className="breadcrumb">
          Home &gt; Patient Registration &gt; Test Status
        </span>
      </div> */}

      {/* Title */}
      <div className="title">
        <span>⚙️ Patient Test Result Report</span>
      </div>
      {/* Form */}
      <form className="form" >
       
        <div className="form-group">
          <label>From Date</label>
          <input type="date" className="input" />
        </div>

        <div className="form-group">
          <label>To Date</label>
          <input type="date" className="input" />
        </div>
        <br></br>
 
        <div className="form-group">
          <label>Reg. No.</label>
          <input type="text" className="input" placeholder="Enter Reg. No." />
        </div>

      <br></br>
      {/* <div className="form-group">
    <div className="row" style={{ display: "flex", flexWrap: "nowrap", gap: "10px", justifyContent: "start" }}>
        <button type="submit" className="button" title="Export to PDF">PDF Report</button>
        <button type="submit" className="button" title="Export to Summary">Excel Report</button>
    </div>
</div> */}
<div className="form-group">
    <div className="row" style={{ display: "flex", flexWrap: "nowrap", gap: "10px" }}>
        <button type="submit" className="button" title="Export to PDF" style={{ width: "150px", height: "40px" }}>PDF Report</button>
        <button type="submit" className="button" title="Export to Summary" style={{ width: "150px", height: "40px" }}>Excel Report</button>
    </div>
</div>
      </form>

      {/* Table
      {showTable && (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>RegNo</th>
                <th>Patient Name</th>
                <th>Sex</th>
                <th>Age</th>
                <th>MDY</th>
                <th>Ref.Doctor Name</th>
                <th>Center Name</th>
                <th>Test Name</th>
                <th>Status</th>
                <th>Outstanding Amount</th>
                <th>Date Of Entry</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.regNo}</td>
                  <td>{item.patientName}</td>
                  <td>{item.sex}</td>
                  <td>{item.age}</td>
                  <td>{item.mdy}</td>
                  <td>{item.refDoctorName}</td>
                  <td>{item.centerName}</td>
                  <td>{item.testName}</td>
                  <td>{item.status}</td>
                  <td>{item.outstandingAmount}</td>
                  <td>{item.dateOfEntry}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
    </div>
  );
};

export default PatientTestResultReport;

