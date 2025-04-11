
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';

export  function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/users" element={<FirebaseUserViewer />} /> */}

      </Routes>
    </Router>
  );
  
  }

export default App
