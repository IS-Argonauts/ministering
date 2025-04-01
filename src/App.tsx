import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
<<<<<<< HEAD
// import { AdminTools } from "./components/admin_site/AdminTools";
=======
>>>>>>> origin/dev
import NavBar from "./NavBar";
import Home from "./pages/Home";
import IdeaGenerator from "./pages/IdeaGenerator";
import Admin from "./pages/Admin";
import PastEvents from "./pages/PastEvents";
import ServiceRequest from "./pages/ServiceRequest";
import Directory from "./pages/Directory";
import SavedIdeasPage from "./pages/SavedIdeasPage";
<<<<<<< HEAD
import MemberProfile from "./components/member_page/MemberProfileLarry";
import { useState } from "react";
=======
import Login from "./pages/Login";
import Submit from "./components/service_request/submit/Submit";
>>>>>>> origin/dev

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Function to log out the user
  const logout = () => {
    console.log("Logging out...");
    localStorage.removeItem("isAuthenticated"); // Clear localStorage
    localStorage.removeItem("loginTime"); // Clear login time
    setIsAuthenticated(false); // Update state
  };

  // Check if user is still authenticated when the app loads
  useEffect(() => {
    console.log("Checking session...");

    // Fetch the values from localStorage
    const storedAuth = localStorage.getItem("isAuthenticated");
    const storedLoginTime = localStorage.getItem("loginTime");

    console.log("Stored Auth:", storedAuth);
    console.log("Stored Login Time:", storedLoginTime);

    // Check if user is authenticated and if login time is valid
    if (storedAuth === "true" && storedLoginTime) {
      const currentTime = Date.now();
      const sessionDuration = currentTime - Number(storedLoginTime);

      console.log("Session Duration:", sessionDuration);

      if (sessionDuration > 60 * 60 * 1000) {
        console.log("Session expired, logging out...");
        logout();
      } else {
        console.log("Session valid, staying logged in...");
        setIsAuthenticated(true); // User remains authenticated
      }
    } else {
      console.log("User not authenticated or login time missing.");
      setIsAuthenticated(false); // User is not authenticated
    }
  }, []); // Empty dependency array, so this runs only once when the component mounts

  // Show loading while checking session storage or if no valid session
  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show loading state while checking session
  }

  return (
    <>
<<<<<<< HEAD
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/IdeaGenerator" element={<IdeaGenerator />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/ServiceRequest" element={<ServiceRequest />} />
        <Route path="/PastEvents" element={<PastEvents />} />
        <Route path="/SavedIdeas" element={<SavedIdeasPage />} />
        <Route path="/Directory" element={<Directory />} />
        <Route path='/MemberProfile' element={<MemberProfile />} />
=======
      {isAuthenticated && <NavBar setIsAuthenticated={setIsAuthenticated} />}
>>>>>>> origin/dev

      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        {isAuthenticated && (
          <>
            <Route path="/Home" element={<Home />} />
            <Route path="/IdeaGenerator" element={<IdeaGenerator />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/ServiceRequest" element={<ServiceRequest />} />
            <Route path="/PastEvents" element={<PastEvents />} />
            <Route path="/SavedIdeas" element={<SavedIdeasPage />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/Directory" element={<Directory />} />
          </>
        )}
      </Routes>
      <MemberProfile/>
    </>
  );
}

export default App;
