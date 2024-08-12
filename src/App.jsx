import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import EmployeeList from "./components/EmployeeList";
import MainLayout from "./layouts/MainLayout"; // импортируем MainLayout
import Finance from "./pages/Finance";
import Workers from "./pages/Workers";
import History from "./pages/History";
import Project from "./pages/Project";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="login" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/finance" element={<Finance/>}/>
            <Route path="/workers" element={<Workers/>}/>
            <Route path="/archive" element={<History/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/profil" element={<Profil/>}/>
            <Route index element={<Dashboard/>} />  
            <Route path="employees" element={<EmployeeList />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
