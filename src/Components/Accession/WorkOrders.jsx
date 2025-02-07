import React, { useState } from "react";
import "./WorkOrders.css"; // Importing the external CSS file
import { Barcode } from "lucide-react";


const WorkOrders = () => {
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
      year: "Year",
      TestNames: "CBC",
      SampleType: "WHOLE BLOOD COUNT",
      Barcode: "213454656",
      AcceptReject: "accept",
      Submit:"submit",
      SubmitAndPrint: "submit",
      ReRun:"reRun",
      XRayQty:"define",
      MonthlyClientCode:"13245",
    },
    {
      regNo: "250232300044",
      patientName: "Mrs SWAPNALI AWALE",
      sex: "Female",
      age: 50,
      year: "Year",
      TestNames: "CBC",
      SampleType: "WHOLE BLOOD COUNT",
      Barcode: "213454656",
      AcceptReject: "accept",
      Submit:"submit",
      SubmitAndPrint: "submit",
      ReRun:"reRun",
      XRayQty:"define",
      MonthlyClientCode:"13245",
    },
    {
      regNo: "250232300043",
      patientName: "Mr DADU JADHAV",
      sex: "Male",
      age: 28,
      year: "Year",
      TestNames: "CBC",
      SampleType: "WHOLE BLOOD COUNT",
      Barcode: "213454656",
      AcceptReject: "accept",
      Submit:"submit",
      SubmitAndPrint: "submit",
      ReRun:"reRun",
      XRayQty:"define",
      MonthlyClientCode:"13245",
    },
    {
      regNo: "250232300042",
      patientName: "Mrs ASHWINI PAWAR",
      sex: "Female",
      age: 23,
       year: "Year",
      TestNames: "CBC",
      SampleType: "WHOLE BLOOD COUNT",
      Barcode: "213454656",
      AcceptReject: "accept",
      Submit:"submit",
      SubmitAndPrint: "submit",
      ReRun:"reRun",
      XRayQty:"define",
      MonthlyClientCode:"13245",
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
        <span>⚙️ WORK ORDERS</span>
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

        {/* <div className="form-group">
          <label>Status</label>
          <select className="select">
            <option value="all">All</option>
          </select>
        </div> */}

        <div className="form-group">
          <label>Patient Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Patient Name"
          />
        </div>

        <div className="form-group">
          <label>Reg. No.</label>
          <input type="text" className="input" placeholder="Enter Reg. No." />
        </div>

        {/* <div className="form-group">
          <label>Select Department</label>
          <select className="select">
            <option value="all">All Department</option>
          </select>
        </div> */}

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

        {/* <div className="form-group">
          <label>Total Patient</label>
          <input type="text" className="input"  />
        </div> */}

        <button type="submit" className="button">
          SHOW
        </button>
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
                <th>Year</th>
                <th>Test Names</th>
                <th>Sample Type</th>
                <th>Barcode</th>
                <th>Accept/Reject</th>
                <th>Submit</th>
                <th>Submit And Print</th>
                <th>Re-Run</th>
                <th>X-Ray Qty</th>
                <th>Monthly Client Code</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.regNo}</td>
                  <td>{item.patientName}</td>
                  <td>{item.sex}</td>
                  <td>{item.age}</td>
                  <td>{item.Year}</td>
                  <td>{item.TestNames}</td>
                  <td>{item.SampleType}</td>
                  <td>{item.Barcode}</td>
                    <td>
                        <div>
                            <label>
                                <input type="radio"
                                    name={`acceptReject-${index}`}
                                    value="accept">  
                                </input>
                              Accept
                            </label>

                            <label>
                                <input type="radio"
                                    name={`acceptReject-${index}`}
                                    value="reject">  
                                </input>
                              Reject
                            </label>

                            <label>
                                <input type="radio"
                                    name={`acceptReject-${index}`}
                                    value="none">  
                                </input>
                              None
                            </label>
                        </div>
                    </td>
                  <td>{item.Submit}</td>
                  <td>{item.SubmitAndPrint}</td>
                  <td>{item.ReRun}</td>
                  <td>{item.XRayQty}</td>
                  <td>{item.MonthlyClientCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default WorkOrders;
