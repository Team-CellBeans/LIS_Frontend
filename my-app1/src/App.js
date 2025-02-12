import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import DoctorShare from './Components/Doctor-share/doctorShare';
import EditTestRegistration from './Components/PatientRegistration/EditTestRegistration';
import TestStatusPage from './Components/PatientRegistration/TestStatusPage';
import ReportsDownload from './Components/PatientRegistration/ReportsDownload';
import PatientTestResultReport from './Components/PatientRegistration/PatientTestResultReport';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define Routes Correctly */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/DoctorShare" element={<DoctorShare />} />
        <Route path="/TestStatusPage" element={<TestStatusPage />} />
        <Route path="/EditTestRegistration" element={<EditTestRegistration />} />
        <Route path="/ReportsDownload" element={<ReportsDownload />} />
        <Route path="/PatientTestResultReport" element={<PatientTestResultReport />} />

      </Routes>
    </Router>
  );
}

export default App;

