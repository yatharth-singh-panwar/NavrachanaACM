import "./App.css";
import Events from "../src/pages/Events";
import { Landing } from "./pages/Landing";
import { Team } from "./pages/Team";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="Team" element={<Team />} />
          <Route path="Events" element={<Events />} />
          <Route path="admin/login" element={<Login />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin" element={<Navigate to="login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
