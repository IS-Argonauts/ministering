
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AdminTools } from "./components/admin_site/AdminTools";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import IdeaGenerator from "./pages/IdeaGenerator";
import Admin from "./pages/Admin";
import PastEvents from "./pages/PastEvents";
import ServiceRequest from "./pages/ServiceRequest";

function App() {

  return (
    <> 
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/IdeaGenerator" element={<IdeaGenerator/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/ServiceRequest" element={<ServiceRequest/>} />
        <Route path="/PastEvents" element={<PastEvents/>} />
        
      </Routes>
    </>
  )
}


export default App;
