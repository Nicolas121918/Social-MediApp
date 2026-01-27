import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home';
export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login"  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />

      </Routes>
    </Router>
  );
}