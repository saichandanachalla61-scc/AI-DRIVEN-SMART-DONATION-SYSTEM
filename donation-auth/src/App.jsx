import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./helpinghub.css";
import Landing from "./Landing";
import DonorLogin from "./components/DonorLogin";
import DonorSignup from "./components/DonorSignup";
import NgoLogin from "./components/NgoLogin";
import NgoSignup from "./components/NgoSignup";
import AdminLogin from "./components/AdminLogin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/donor/login" element={<DonorLogin />} />
        <Route path="/donor/register" element={<DonorSignup />} />
        <Route path="/ngo/login" element={<NgoLogin />} />
        <Route path="/ngo/register" element={<NgoSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}