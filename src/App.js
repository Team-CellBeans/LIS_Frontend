import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import TestStatusPage from './Components/PatientRegistration/TestStatusPage';
import WorkOrders from './Components/Accession/WorkOrders';
import TATReport from './Components/Accession/TATReport';
import SARReport from './Components/Accession/SARReport';
import SampleWorksheet from './Components/Patient-result/SampleWorksheet';
import TestsValueSearch from './Components/Patient-result/TestsValueSearch';
import DirectCashBill from './Components/Accounts/PatientAccount/DirectCashBill';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define Routes Correctly */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/TestStatusPage" element={<TestStatusPage />} />
        <Route path="/WorkOrders" element={<WorkOrders />} />
        <Route path="/TATReport" element={<TATReport />} />
        <Route path="/SARReport" element={<SARReport />} />
        <Route path="/SampleWorksheet" element={<SampleWorksheet />} />
        <Route path="/TestsValueSearch" element={<TestsValueSearch />} />
        <Route path="/DirectCashBill" element={<DirectCashBill />} />




      </Routes>
    </Router>
  );
}

export default App;

