import { Radius } from "lucide-react";
import React, { useState } from "react";

const DoctorShare = () => {
  const [searchFilters, setSearchFilters] = useState({
    billNo: "",
    mrNo: "",
    patientName: "",
    fromDate: "",
    toDate: "",
  });

  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const mockData = [
    {
      id: 1,
      mrNo: 1701,
      tariffName: "MJPJAY",
      sponsorName: "Medify CMP",
      billDate: "Jan 2, 2024",
      discount: 0,
      netAmount: 100,
      patientName: "Mrs. Ningamma Aralikatti",
      govNo: "Gov/2025/000194",
      billNo: "Gov/2025/01/02/0000139",
      billAmount: 600,
    },
  ];

  const tableData = mockData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleFilterChange = (key, value) => {
    setSearchFilters({ ...searchFilters, [key]: value });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(Number(size));
    setCurrentPage(1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h6 style={{ backgroundColor: "#34B3F1", padding: "10px", borderRadius: "5px" }}>
        Doctor Share
      </h6>

      {/* Search Section */}
      <div style={{ display: "flex", gap: "10px", padding: "10px", borderRadius: "5px" }}>
        <input type="number" placeholder="Bill No." value={searchFilters.billNo} onChange={(e) => handleFilterChange("billNo", e.target.value)} />
        <input type="number" placeholder="MR No." value={searchFilters.mrNo} onChange={(e) => handleFilterChange("mrNo", e.target.value)} />
        <input type="text" placeholder="Patient First Name" value={searchFilters.patientName} onChange={(e) => handleFilterChange("patientName", e.target.value)} />
        <input type="date" placeholder="From Date" value={searchFilters.fromDate} onChange={(e) => handleFilterChange("fromDate", e.target.value)} />
        <input type="date" placeholder="To Date" value={searchFilters.toDate} onChange={(e) => handleFilterChange("toDate", e.target.value)} />
        <button style={{ backgroundColor: "#34B3F1", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "5px" }}>
          🔍 Search Key
        </button>
        <button style={{ backgroundColor: "#ff4d4d", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "5px" }}>
          ❌ Reset
        </button>
      </div>

      {/* Table Section */}
      {/* <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>Sr No.</th>
            <th>Action</th>
            <th>Mr No.</th>
            <th>Tariff Name</th>
            <th>Sponsor Name</th>
            <th>Bill Date</th>
            <th>Discount</th>
            <th>Net Amount</th>
            <th>Patient Name</th>
            <th>Gov No.</th>
            <th>Bill No.</th>
            <th>Bill Amount</th>
            <th>Freeze/Unfreeze</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={row.id}>
              <td>{(currentPage - 1) * pageSize + index + 1}</td>
              <td>
                <button style={{ backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", padding: "4px 8px" }}>Edit</button>
              </td>
              <td>{row.mrNo}</td>
              <td>{row.tariffName}</td>
              <td>{row.sponsorName}</td>
              <td>{row.billDate}</td>
              <td>{row.discount}</td>
              <td>{row.netAmount}</td>
              <td>{row.patientName}</td>
              <td>{row.govNo}</td>
              <td>{row.billNo}</td>
              <td>{row.billAmount}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}


<table style={{ 
  width: "100%", 
  marginTop: "20px", 
  borderCollapse: "collapse", 
  textAlign: "center" 
}}>
  <thead>
    <tr style={{ backgroundColor: "#f2f2f2" }}>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Sr No.</th>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Action</th>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Mr No.</th>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Tariff Name</th>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Sponsor Name</th>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Bill Date</th>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Discount</th>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Net Amount</th>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Patient Name</th>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Gov No.</th>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Bill No.</th>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Bill Amount</th>
      <th style={{ padding: "10px", border: "1px solid gray" }}>Freeze/Unfreeze</th>
    </tr>
  </thead>
  <tbody>
    {tableData.map((row, index) => (
      <tr key={row.id} style={{ borderBottom: "1px solid gray" }}>
        <td style={{ padding: "10px", border: "1px solid gray" }}>{(currentPage - 1) * pageSize + index + 1}</td>
        <td style={{ padding: "10px", border: "1px solid gray" }}>
          <button style={{ 
            backgroundColor: "#34B3F1", 
            color: "#fff", 
            border: "none", 
            borderRadius: "4px", 
            padding: "4px 8px" 
          }}>
            Edit
          </button>
        </td>
        <td style={{ padding: "10px", border: "1px solid gray" }}>{row.mrNo}</td>
        <td style={{ padding: "10px", border: "1px solid gray" }}>{row.tariffName}</td>
        <td style={{ padding: "10px", border: "1px solid gray" }}>{row.sponsorName}</td>
        <td style={{ padding: "10px", border: "1px solid gray" }}>{row.billDate}</td>
        <td style={{ padding: "10px", border: "1px solid gray" }}>{row.discount}</td>
        <td style={{ padding: "10px", border: "1px solid gray" }}>{row.netAmount}</td>
        <td style={{ padding: "10px", border: "1px solid gray" }}>{row.patientName}</td>
        <td style={{ padding: "10px", border: "1px solid gray" }}>{row.govNo}</td>
        <td style={{ padding: "10px", border: "1px solid gray" }}>{row.billNo}</td>
        <td style={{ padding: "10px", border: "1px solid gray" }}>{row.billAmount}</td>
        <td style={{ padding: "10px", border: "1px solid gray" }}>
          <input type="checkbox" />
        </td>
      </tr>
    ))}
  </tbody>
</table>


      {/* Pagination Section */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "5px", marginTop: "10px" }}>
        <select value={pageSize} onChange={(e) => handlePageSizeChange(e.target.value)}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <div>
          {[...Array(Math.ceil(mockData.length / pageSize)).keys()].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page + 1)}
              style={{ margin: "0 5px", padding: "5px 10px", backgroundColor: currentPage === page + 1 ? "#007bff" : "#fff", color: currentPage === page + 1 ? "#fff" : "#000", border: "1px solid #ccc", borderRadius: "3px" }}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorShare;
