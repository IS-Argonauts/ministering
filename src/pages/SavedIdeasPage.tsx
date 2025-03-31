import { useState } from "react";
import SavedIdeas from "../components/idea_generator/SavedIdeas";
import NavBar from "../NavBar";

export default function SavedIdeasPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div>
      <NavBar setIsAuthenticated={setIsAuthenticated} />
      <SavedIdeas />
    </div>
  );
}
