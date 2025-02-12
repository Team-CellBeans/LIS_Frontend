import React, { useState } from "react";
import "./ReportsDownload.css"; // Importing the external CSS file


const ReportsDownload = () => {

    const [showTable, setShowTable] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowTable(true); // Show the table when the "LIST" button is clicked
      };
      
      const data = [
        {
          regNo: "250232300045",
          patientName: "Mr NILESH KUMAR SHRIVASTAV",
          sex: "Male",
          age: 37,
          mdy: "Year",
          refDoctorName: "DHANASHREE HOSPITAL MOSHI",
          centerName: "DHANASHREE HOSPITAL DIAGNOSTICS",
          testName: "LIVER FUNCTION TEST",
          graphs:"",
          status: "Tested",
          outstandingAmount: 0,
          
        },
        {
          regNo: "250232300044",
          patientName: "Mrs SWAPNALI AWALE",
          sex: "Female",
          age: 50,
          mdy: "Year",
          refDoctorName: "DHANASHREE HOSPITAL MOSHI",
          centerName: "DHANASHREE HOSPITAL DIAGNOSTICS",
          testName: "HbA1c (GLYCOSYLATED HAEMOGLOBIN) BLOOD",
          graphs:'',
          status: "Registered",
          outstandingAmount: 0,
        
        },
        {
          regNo: "250232300043",
          patientName: "Mr DADU JADHAV",
          sex: "Male",
          age: 28,
          mdy: "Year",
          refDoctorName: "DHANASHREE HOSPITAL MOSHI",
          centerName: "DHANASHREE HOSPITAL",
          testName: "SERUM ELECTROLYTES",
          graphs:'',
          status: "Registered",
          outstandingAmount: 0,
          
        },
        {
          regNo: "250232300042",
          patientName: "Mrs ASHWINI PAWAR",
          sex: "Female",
          age: 23,
          mdy: "Year",
          refDoctorName: "DHANASHREE HOSPITAL",
          centerName: "DHANASHREE HOSPITAL",
          testName: "THYROID FUNCTION TEST",
          graphs:'',
          status: "Tested",
          outstandingAmount: 1750,
          
        },
      ];
    
    
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
        <span>⚙️ Reports Download/Printing</span>
      </div>

      {/* Form */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Client</label>
          <select className="select">
            <option value="all">All</option>
          </select>
        </div>

        <div className="form-group">
          <label>From Date</label>
          <input type="date" className="input" />
        </div>

        <div className="form-group">
          <label>To Date</label>
          <input type="date" className="input" />
        </div>

        <div className="form-group">
          <label>Patient Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Patient Name"
          />
        </div>

        <div className="form-group">
          <label>Reg. Number</label>
          <input type="text" className="input" placeholder="Enter Reg. No." />
        </div>

        <div className="form-group">
          <label>F. Year</label>
          <select className="select">
            <option value="2024-2025">01/04/2024 to 31/03/2025</option>
          </select>
        </div>

        <div className="form-group">
          <label>Barcode</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Barcode"
          />
        </div>

        {/* <div className="form-group"> */}
        <button type="submit" className="button">
          List
        </button>
        {/* </div> */}

        {/* <button type="submit" className="button">
          List
        </button> */}
      </form>

      {/* Table */}
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
                <th>Graphs</th>
                <th>Status</th>
                <th>Outstanding Amount</th>
                <th>Reports</th>
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
                  <td>{item.graphs}</td>
                  <td>{item.status}</td>
                  <td>{item.outstandingAmount}</td>
                  <td>
              <a href="#" className="text-primary">
                Report
              </a>
            </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReportsDownload;
