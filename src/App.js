import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import DoctorShare from './Components/Doctor-share/doctorShare';
import TestStatusPage from './Components/PatientRegistration/TestStatusPage';
import WorkOrders from './Components/Accession/WorkOrders';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define Routes Correctly */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/DoctorShare" element={<DoctorShare />} />
        <Route path="/TestStatusPage" element={<TestStatusPage />} />
        <Route path="/WorkOrders" element={<WorkOrders />} />
      </Routes>
    </Router>
  );
}

export default App;

