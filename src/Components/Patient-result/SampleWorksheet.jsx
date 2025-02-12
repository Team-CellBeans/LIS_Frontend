import React from "react";
import { LuPrinter } from "react-icons/lu";
import { LuUserPlus } from "react-icons/lu";
import "./SampleWorksheet.css";

const SampleWorksheet = () => {
  return (
    <div className="main-container">
      {/* First Container: Sample Worksheet Form */}
      <div className="form-container">
        <h2 className="title">
          <span className=""></span><LuUserPlus /> SAMPLE WORKSHEET
        </h2>

        <form className="form-grid">
          <div className="form-group">
            <label>From Date</label>
            <input type="date" className="input-field" />
          </div>

          <div className="form-group">
            <label>To Date</label>
            <input type="date" className="input-field" />
          </div>

          <div className="form-group">
            <label>Select Client</label>
            <select className="input-field">
              <option>xxxxx</option>
            </select>
          </div>

          <div className="form-group">
            <label>Page Size</label>
            <input type="number" className="input-field" placeholder="" />
          </div>

          <div className="form-group">
            <label>Patient Name</label>
            <input type="text" className="input-field" placeholder="" />
          </div>

          <div className="form-group">
            <label>Reg. No.</label>
            <input type="text" className="input-field" placeholder="" />
          </div>

          <div className="form-group">
            <label>Barcode</label>
            <input type="text" className="input-field" placeholder="" />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select className="input-field">
              <option>HISTOPATHOLOGY</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select className="input-field">
              <option>Select Status</option>
            </select>
          </div>

          <div className="form-group">
             <label>F. Year</label>
             <select className="input-field">
               <option value="2024-2025">01/04/2024 to 31/03/2025</option>
             </select>
          </div>



          <div className="form-group">
            <label>Ref. Doctor</label>
            <select className="input-field">
              <option>Select Doctor</option>
            </select>
          </div>

          <div className="form-group">
            <label>Mobile No.</label>
            <input type="text" className="input-field" placeholder="" />
          </div>

          <div className="form-group">
            <label>Test Code</label>
            <input type="text" className="input-field" placeholder="" />
          </div>
        </form>

        {/* Buttons */}
        <div className="button-group">
          <button className="btn btn-list">LIST</button>
          <button className="btn btn-send">SEND FILES</button>
          <button className="btn btn-upload">UPLOAD PIC</button>
        </div>
      </div>

      {/* Second Container: Table */}
      <div className="table-container">
        {/* Status Summary */}
        <div className="status-summary">
          <span className="status-box red">Rejected: 0</span>
          <span className="status-box green">Registered</span>
          <span className="status-box orange">Partial Tested: 0</span>
          <span className="status-box blue">Tested: 0</span>
          <span className="status-box pink">Partial Authorized: 0</span>
          <span className="status-box purple">Authorized: 0</span>
          <span className="status-box yellow">Partially Printed: 0</span>
          <span className="status-box cyan">Printed: 0</span>
        </div>

        {/* Table Section */}
        <table className="data-table">
          <thead>
            <tr>
              <th>Reg No</th>
              <th>Client No.</th>
              <th>Patient Name</th>
              <th>Sex</th>
              <th>Age</th>
              <th>Doctor Name</th>
              <th>TAT (Min)</th>
              <th>Tests</th>
              <th>Test Name</th>
              <th>Sample Status</th>
              <th>Registration Date</th>
              <th>Balance</th>
              <th>Print</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="blue-text">98465132</td>
              <td>DHANASH1</td>
              <td>Mr. Nikhil B</td>
              <td>Male</td>
              <td>25</td>
              <td>DHANASHREE BLOOD COUNT</td>
              <td>24 (300)</td>
              <td>CBC21</td>
              <td>COMPLETE BLOOD COUNT</td>
              <td className="status-green">Registered</td>
              <td>03/02/2025 13:41:23</td>
              <td> 0</td>
              <td><button className="print-button"><LuPrinter /> Print</button></td>
            </tr>
            <tr className="highlight-red">
              <td className="blue-text">98465132</td>
              <td>DHANASH1</td>
              <td>Mr. Nikhil B</td>
              <td>Male</td>
              <td>25</td>
              <td>DHANASHREE BLOOD COUNT</td>
              <td>24 (300)</td>
              <td>CBC21</td>
              <td>COMPLETE BLOOD COUNT</td>
              <td className="status-red">Tested</td>
              <td>03/02/2025 13:41:23</td>
              <td> 0 </td>
              <td><button className="print-button"><LuPrinter /> Print</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SampleWorksheet;




