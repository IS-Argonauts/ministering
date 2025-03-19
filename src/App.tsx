import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PastEvents from "./components/past_events/PastEvents";
import { Header } from "./components/shared_components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Redirect from root to PastEvents */}
        <Route path="/" element={<Navigate to="/past-events" />} />
        <Route path="/past-events" element={<PastEvents />} />
      </Routes>
    </Router>
  );
};

export default App;
