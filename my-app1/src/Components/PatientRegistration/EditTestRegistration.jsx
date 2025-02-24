import React, { useState } from "react";
import "./EditTestRegistration.css"; // Importing the external CSS file



const EditTestRegistration = () => {

const [showTable, setShowTable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTable(true); // Show the table when the "LIST" button is clicked
  };


  const data = [
    {
      regNo: "250232300045",
      patientName: "Mr NILESH KUMAR SHRIVASTAV",
    //   sex: "Male",
    //   age: 37,1326
    //   mdy: "Year",
    //   refDoctorName: "DHANASHREE HOSPITAL MOSHI",
      centerName: "DHANASHREE HOSPITAL DIAGNOSTICS",
      testName: "LIVER FUNCTION TEST",
      testCharges: "500",
      
    //   dateOfEntry: "06/02/2025",
    },
    {
      regNo: "250232300044",
      patientName: "Mrs SWAPNALI AWALE",
    //   sex: "Female",
    //   age: 50,
    //   mdy: "Year",
    //   refDoctorName: "DHANASHREE HOSPITAL MOSHI",
      centerName: "DHANASHREE HOSPITAL DIAGNOSTICS",
      testName: "HbA1c (GLYCOSYLATED HAEMOGLOBIN) BLOOD",
      testCharges: "1000",
      
    //   outstandingAmount: 0,
    //   dateOfEntry: "06/02/2025",
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
        <span>⚙️ Edit Test Registration</span>
      </div>

      {/* Form */}
      {/* <form className="form" onSubmit={handleSubmit}> */}
        {/* <div className="form-group">
          <label>Select Client</label>
          <select className="select">
            <option value="all">All</option>
          </select>
        </div> */}

         {/* <div className="form-group">
          <label>From Date</label>
          <input type="date" className="input" />
        </div>

        <div className="form-group">
          <label>To Date</label>
          <input type="date" className="input" />
        </div>

        <div className="form-group">
          <label>F. Year</label>
          <select className="select">
            <option value="2024-2025">01/04/2024 to 31/03/2025</option>
          </select>
        </div>

        <div className="form-group">
          <label>Reg. Number</label>
          <input type="text" className="input" placeholder="Enter Reg. No." />
        </div> */}
          {/* <div className="form-group">
          <label>Patient Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Patient Name"
          />
        </div>


        <div className="form-group">
          <label>Total Patient</label>
          <input type="text" className="input"  />
        </div>



        <div className="form-group">
          <label>Barcode</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Barcode"
          />
        </div>


        <button type="submit" className="button">
          Show
        </button> */}
        <form className="form" onSubmit={handleSubmit}>
  <div className="form-group">
          <div className="form-group">
            <label>Select Client</label>
            <select
              className="select"
              name="client"
             
            >
              <option value="all">All</option>
            </select>
          </div>
        </div>

  <div className="form-group">
    <label>From Date</label>
    <input type="date" className="input" name="fromDate" />
  </div>

  <div className="form-group">
    <label>To Date</label>
    <input type="date" className="input" name="toDate" />
  </div>

  <div className="form-group">
    <label>Financial Year</label>
    <select className="select" name="financialYear">
      <option value="2024-2025">01/04/2024 to 31/03/2025</option>
    </select>
  </div>

  <div className="form-group">
    <label>Reg. Number</label>
    <input type="text" className="input" name="regNumber" placeholder="Enter Reg. No." />
  </div>

  <div className="form-group">
    <label>Patient Name</label>
    <input type="text" className="input" name="patientName" placeholder="Enter Patient Name" />
  </div>

  <div className="form-group">
    <label>Total Patient</label>
    <input type="text" className="input" name="totalPatient" />
  </div>

  <div className="form-group">
    <label>Barcode</label>
    <input type="text" className="input" name="barcode" placeholder="Enter Barcode" />
  </div>

  <div className="form-group button-group">
    <button type="submit" className="button">Show</button>
  </div>
</form>

      
            {/* Table */}
      {showTable && (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>RegNo</th>
                <th>Patient Name</th>
                <th>Center Name</th>
                <th>Test Name</th>
                <th>Test Charges</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.regNo}</td>
                  <td>{item.patientName}</td>
                  <td>{item.centerName}</td>
                  <td>{item.testName}</td>
                  <td>{item.testCharges}</td>
                  <td>
              <a href="#" className="text-primary">
                Edit Test
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


export default EditTestRegistration;
