import "./Login.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./containers/Login";
import Registerpage from "./containers/Registerpage";
import Dashboard from "./containers/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/Registerpage" element={<Registerpage />}/>
      <Route path="/Dashbord" element={<Dashboard />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
